# -*- coding: utf-8 -*-
"""
ZarWebCoders - HD Image Upscaler
Upscales low-res PNG/JPG assets using Lanczos resampling + unsharp mask.
Originals backed up to public/assets/_originals/
"""
import sys, os, shutil
sys.stdout.reconfigure(encoding='utf-8')

from PIL import Image, ImageFilter

ASSET_DIR  = r"c:\Users\thank\Desktop\Zarwebcoders\public\assets"
BACKUP_DIR = os.path.join(ASSET_DIR, "_originals")
EXTS       = {".png", ".jpg", ".jpeg", ".webp"}

def scale_factor(w):
    if w < 200:  return 4   # tiny icons
    if w < 400:  return 3   # small images
    if w < 800:  return 2   # medium images
    return 1                # already large

os.makedirs(BACKUP_DIR, exist_ok=True)
processed, skipped = [], []

for fname in sorted(os.listdir(ASSET_DIR)):
    ext = os.path.splitext(fname)[1].lower()
    if ext not in EXTS:
        continue

    src_path    = os.path.join(ASSET_DIR, fname)
    backup_path = os.path.join(BACKUP_DIR, fname)

    try:
        img = Image.open(src_path)
        orig_w, orig_h = img.size
        sf = scale_factor(orig_w)

        # Backup original (only once)
        if not os.path.exists(backup_path):
            shutil.copy2(src_path, backup_path)
        
        # Use backup as source so repeated runs stay idempotent
        img = Image.open(backup_path)
        orig_w, orig_h = img.size
        sf = scale_factor(orig_w)

        # Convert to appropriate mode
        if ext == ".png":
            img = img.convert("RGBA")
        else:
            img = img.convert("RGB")

        # Upscale with highest-quality Lanczos
        if sf > 1:
            new_w = orig_w * sf
            new_h = orig_h * sf
            img = img.resize((new_w, new_h), Image.LANCZOS)

        # Mild unsharp mask for crispness recovery
        if orig_w > 50:
            img = img.filter(ImageFilter.UnsharpMask(
                radius=1.2, percent=60, threshold=3
            ))

        # Save high-quality
        if ext == ".png":
            img.save(src_path, "PNG", optimize=True, compress_level=6)
        elif ext in (".jpg", ".jpeg"):
            img.convert("RGB").save(
                src_path, "JPEG", quality=97,
                optimize=True, progressive=True, subsampling=0
            )
        elif ext == ".webp":
            img.save(src_path, "WEBP", quality=97, method=6)

        final_w, final_h = img.size
        processed.append(
            f"OK  {fname:<42} {orig_w}x{orig_h} -> {final_w}x{final_h}  (x{sf})"
        )

    except Exception as e:
        skipped.append(f"ERR {fname}: {e}")

print("\n=== PROCESSED ===")
for line in processed:
    print(line)

if skipped:
    print("\n=== ERRORS ===")
    for line in skipped:
        print(line)

print(f"\nDone: {len(processed)} enhanced, {len(skipped)} errors.")
print(f"Backups: {BACKUP_DIR}")
