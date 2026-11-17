"""Real photo → white studio shot with soft drop shadow (no AI repaint)."""
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter
from rembg import new_session, remove

SESSION = new_session("u2net")

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "aloe vera shampoo" / "WhatsApp Image 2026-11-18 at 2.48.20 AM.jpeg"
OUT = ROOT / "aloe vera shampoo" / "aloe-vera-shampoo-studio.jpg"
OUT_COPY = ROOT / "images" / "aloe-vera-shampoo-studio.jpg"

W, H = 1600, 2000
MARGIN = 0.09
SHADOW_OFFSET_Y = 28
JPEG_QUALITY = 96


def _enhance_product(rgba: Image.Image) -> Image.Image:
    """Lift exposure on product only — keeps white bg untouched."""
    r, g, b, a = rgba.split()
    rgb = Image.merge("RGB", (r, g, b))
    rgb = ImageEnhance.Brightness(rgb).enhance(1.16)
    rgb = ImageEnhance.Contrast(rgb).enhance(1.12)
    rgb = ImageEnhance.Color(rgb).enhance(1.08)
    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=1.4, percent=125, threshold=3))
    r, g, b = rgb.split()
    return Image.merge("RGBA", (r, g, b, a))


def main() -> None:
    source = Image.open(SRC).convert("RGB")
    source = ImageEnhance.Brightness(source).enhance(1.08)
    source = ImageEnhance.Contrast(source).enhance(1.06)
    import io

    buf = io.BytesIO()
    source.save(buf, format="JPEG", quality=98)
    cut = remove(buf.getvalue(), session=SESSION)
    product = Image.open(io.BytesIO(cut)).convert("RGBA")
    product = _enhance_product(product)

    # Trim transparent padding
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
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=max(12, int(nw * 0.028))))
    shadow_rgb = Image.new("RGBA", (nw, nh), (0, 0, 0, 0))
    shadow_arr = np.array(shadow, dtype=np.float32)
    shadow_arr = shadow_arr * 0.38
    shadow_rgb.putalpha(Image.fromarray(shadow_arr.astype(np.uint8)))

    px = (W - nw) // 2
    py = (H - nh) // 2 + SHADOW_OFFSET_Y
    canvas.alpha_composite(shadow_rgb, (px, py + 18))

    px2 = (W - nw) // 2
    py2 = (H - nh) // 2
    canvas.alpha_composite(product, (px2, py2))

    rgb = canvas.convert("RGB")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(OUT, "JPEG", quality=JPEG_QUALITY, subsampling=0, optimize=True)
    OUT_COPY.parent.mkdir(parents=True, exist_ok=True)
    rgb.save(OUT_COPY, "JPEG", quality=JPEG_QUALITY, subsampling=0, optimize=True)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()