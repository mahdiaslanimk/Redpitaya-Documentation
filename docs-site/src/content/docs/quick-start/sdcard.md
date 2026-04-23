---
title: SD Card Setup
description: How to prepare and flash an SD card for Red Pitaya.
---

# SD Card Setup

The Red Pitaya OS runs from a micro SD card. This guide explains how to prepare it.

## Requirements

- Micro SD card: **Class 10** or higher, minimum **8 GB** (16 GB recommended)
- SD card reader (USB or built-in)
- **balenaEtcher** software (free, cross-platform)

## Step 1: Download the OS Image

Download the latest Red Pitaya OS image:

1. Go to [redpitaya.com/downloads](https://redpitaya.com/downloads/)
2. Select your board model (e.g., STEMlab 125-14)
3. Download the latest `.img.zip` file

## Step 2: Download and Install balenaEtcher

1. Go to [balena.io/etcher](https://www.balena.io/etcher/)
2. Download the version for your operating system
3. Install and open balenaEtcher

## Step 3: Flash the SD Card

1. **Insert** the micro SD card into your card reader
2. Open **balenaEtcher**
3. Click **Flash from file** and select the downloaded `.img.zip`
4. Click **Select target** and choose your SD card
   
   > ⚠️ **Warning:** All data on the selected drive will be erased!

5. Click **Flash!** and wait for the process to complete (typically 3–5 minutes)
6. balenaEtcher will verify the flash automatically

## Step 4: Insert and Boot

1. Remove the SD card from the reader
2. Insert it into the **micro SD slot** on the Red Pitaya board
3. Connect the Ethernet cable and power supply
4. Wait for the board to boot (~30–60 seconds)

## SD Card Performance Tips

- Use a reputable brand (SanDisk, Samsung, Kingston)
- Avoid cheap off-brand cards — they may cause random crashes
- A faster card (Class 10 / UHS-I) improves boot times

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Board doesn't boot | Re-flash the SD card |
| SD card not detected | Try a different card or reader |
| Flash fails | Download the image again and retry |
| Board boots but seems slow | Upgrade to a faster SD card |
