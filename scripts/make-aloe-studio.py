"""Regenerate studio shot from original photo — no color/brightness editing."""
from __future__ import annotations

import io
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter
from rembg import new_session, remove

SESSION = new_session("isnet-general-use")

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "aloe vera shampoo" / "WhatsApp Image 2026-11-18 at 2.48.20 AM.jpeg"
OUT = ROOT / "aloe vera shampoo" / "aloe-vera-shampoo-studio.jpg"
OUT_COPY = ROOT / "images" / "aloe-vera-shampoo-studio.jpg"

W, H = 1600, 2000
MARGIN = 0.09
SHADOW_OFFSET_Y = 24
JPEG_QUALITY = 97


def defringe(rgba: Image.Image) -> Image.Image:
    """Remove dark matting halo on edges (geometry only, not exposure)."""
    arr = np.array(rgba, dtype=np.float32)
    rgb, a = arr[..., :3], arr[..., 3] / 255.0
    edge = (a > 0.05) & (a < 0.92)
    a3 = a[..., None]
    # Un-premultiply fringed pixels toward foreground
    safe = np.maximum(a3, 0.15)
    unmul = np.clip(rgb / safe, 0, 255)
    rgb = np.where(edge[..., None], unmul, rgb)
    arr[..., :3] = rgb
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGBA")


def main() -> None:
    raw = SRC.read_bytes()
    cut = remove(
        raw,
        session=SESSION,
        alpha_matting=True,
        alpha_matting_foreground_threshold=250,
        alpha_matting_background_threshold=8,
        alpha_matting_erode_size=10,
    )
    product = Image.open(io.BytesIO(cut)).convert("RGBA")
    product = defringe(product)

    bbox = product.getbbox()
    if bbox:
        product = product.crop(bbox)

    cw, ch = product.size
    inner_w = int(W * (1 - 2 * MARGIN))
    inner_h = int(H * (1 - 2 * MARGIN))
    scale = min(inner_w / cw, inner_h / ch)
    nw, nh = int(cw * scale), int(ch * scale)
    product = product.resize((nw, nh), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (W, H), (255, 255, 255, 255))

    alpha = product.split()[3]
    shadow = Image.new("L", (nw, nh), 0)
    shadow.paste(alpha)
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=max(14, int(nw * 0.03))))
    shadow_rgba = Image.new("RGBA", (nw, nh), (0, 0, 0, 0))
    sa = np.array(shadow, dtype=np.float32) * 0.34
    shadow_rgba.putalpha(Image.fromarray(sa.astype(np.uint8)))

    px = (W - nw) // 2
    py_center = (H - nh) // 2
    canvas.alpha_composite(shadow_rgba, (px, py_center + SHADOW_OFFSET_Y))
    canvas.alpha_composite(product, (px, py_center))

    rgb = canvas.convert("RGB")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(OUT, "JPEG", quality=JPEG_QUALITY, subsampling=0, optimize=True)
    OUT_COPY.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(OUT_COPY, "JPEG", quality=JPEG_QUALITY, subsampling=0, optimize=True)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()