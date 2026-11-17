"""Create product gallery variants for aloe shampoo PDP."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "images" / "aloe-vera-shampoo-studio.jpg"
OUT_DIR = ROOT / "images" / "aloe-product"
BGS = ("#f3ebe3", "#efe8df", "#ffffff")


def paste_contain(canvas: Image.Image, fg: Image.Image) -> None:
    cw, ch = canvas.size
    fw, fh = fg.size
    scale = min(cw / fw, ch / fh) * 0.92
    nw, nh = int(fw * scale), int(fh * scale)
    fg = fg.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas.paste(fg, ((cw - nw) // 2, (ch - nh) // 2))


def main() -> None:
    if not SRC.is_file():
        raise SystemExit(f"Missing {SRC}")
    base = Image.open(SRC).convert("RGB")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    size = (900, 1125)
    for i, bg in enumerate(BGS, start=1):
        canvas = Image.new("RGB", size, bg)
        paste_contain(canvas, base)
        out = OUT_DIR / f"{i:02d}-gallery.jpg"
        canvas.save(out, "JPEG", quality=94, subsampling=0)
        print(f"Wrote {out}")
    # detail crop
    w, h = base.size
    crop = base.crop((int(w * 0.2), int(h * 0.05), int(w * 0.8), int(h * 0.72)))
    canvas = Image.new("RGB", size, "#f3ebe3")
    paste_contain(canvas, crop.resize((int(crop.width * 1.15), int(crop.height * 1.15)), Image.Resampling.LANCZOS))
    out = OUT_DIR / "04-detail.jpg"
    canvas.save(out, "JPEG", quality=94, subsampling=0)
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()