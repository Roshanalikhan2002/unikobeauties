"""Regenerate catalog-style studio shot from original photo (Laushe-like lighting)."""
from __future__ import annotations

import io
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from rembg import new_session, remove

SESSION = new_session("isnet-general-use")

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "aloe vera shampoo" / "WhatsApp Image 2026-11-18 at 2.48.20 AM.jpeg"
OUT = ROOT / "aloe vera shampoo" / "aloe-vera-shampoo-studio.jpg"
OUT_COPY = ROOT / "images" / "aloe-vera-shampoo-studio.jpg"

W, H = 1600, 2000
MARGIN = 0.06
JPEG_QUALITY = 97


def defringe(rgba: Image.Image) -> Image.Image:
    arr = np.array(rgba, dtype=np.float32)
    rgb, a = arr[..., :3], arr[..., 3] / 255.0
    edge = (a > 0.05) & (a < 0.92)
    safe = np.maximum(a[..., None], 0.15)
    unmul = np.clip(rgb / safe, 0, 255)
    rgb = np.where(edge[..., None], unmul, rgb)
    arr[..., :3] = rgb
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGBA")


def straighten_vertical(rgba: Image.Image) -> Image.Image:
    """Straight-on hero angle: rotate so bottle axis is vertical."""
    alpha = np.array(rgba.split()[3])
    ys, xs = np.nonzero(alpha > 140)
    if len(xs) < 200:
        return rgba
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    col_top = alpha[y0 : y0 + max(8, (y1 - y0) // 12), x0:x1].sum(axis=0)
    col_bot = alpha[y1 - max(8, (y1 - y0) // 12) : y1, x0:x1].sum(axis=0)
    top_cx = x0 + int(np.argmax(col_top > col_top.max() * 0.25))
    bot_cx = x0 + int(np.argmax(col_bot > col_bot.max() * 0.25))
    angle = np.degrees(np.arctan2(bot_cx - top_cx, y1 - y0))
    if abs(angle) > 0.25 and abs(angle) < 7:
        return rgba.rotate(-angle, resample=Image.Resampling.BICUBIC, expand=True)
    return rgba


def even_studio_light(rgba: Image.Image) -> Image.Image:
    """Remove uneven side lighting; keep label colors intact."""
    arr = np.array(rgba, dtype=np.float32)
    r, g, b, a = arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3]
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    lum_img = Image.fromarray(np.clip(lum, 0, 255).astype(np.uint8), "L")
    illum = np.array(lum_img.filter(ImageFilter.GaussianBlur(45)), dtype=np.float32)
    illum = np.maximum(illum, 28.0)
    factor = np.clip(122.0 / illum, 0.84, 1.22)
    mask = a > 20
    for i in range(3):
        ch = np.clip(arr[..., i] * factor, 0, 255)
        arr[..., i] = np.where(mask, ch, arr[..., i])
    arr[..., :3] = np.clip(arr[..., :3] + np.where(mask[..., None], 10, 0), 0, 255)
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


def contact_shadow_layer(width: int) -> Image.Image:
    """Soft oval shadow directly under product (no side cast shadow)."""
    sw = int(width * 0.62)
    sh = max(18, int(sw * 0.09))
    layer = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))
    mask = Image.new("L", (sw, sh), 0)
    ImageDraw.Draw(mask).ellipse((2, 2, sw - 3, sh - 3), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=max(6, sh // 4)))
    alpha = mask.point(lambda p: int(p * 0.26))
    layer.putalpha(alpha)
    return layer


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
    product = straighten_vertical(product)
    product = even_studio_light(product)

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
    px = (W - nw) // 2
    py = int(H * 0.5 - nh * 0.52)

    shadow = contact_shadow_layer(nw)
    shadow_y = py + nh - int(shadow.size[1] * 0.35)
    canvas.alpha_composite(shadow, (px + (nw - shadow.size[0]) // 2, shadow_y))
    canvas.alpha_composite(product, (px, py))

    rgb = canvas.convert("RGB")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(OUT, "JPEG", quality=JPEG_QUALITY, subsampling=0, optimize=True)
    OUT_COPY.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(OUT_COPY, "JPEG", quality=JPEG_QUALITY, subsampling=0, optimize=True)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()