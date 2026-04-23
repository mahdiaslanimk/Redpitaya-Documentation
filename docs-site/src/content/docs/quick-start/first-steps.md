---
title: First Steps
description: Step-by-step guide to get your Red Pitaya board up and running for the first time.
---

# First Steps

Follow these steps to get your Red Pitaya board up and running.

## Step 1: Download the OS Image

Download the latest Red Pitaya OS image from the [official downloads page](https://redpitaya.com/downloads/).

## Step 2: Flash the SD Card

1. Download and install **balenaEtcher**
2. Insert your micro SD card into the card reader
3. Open balenaEtcher and select the downloaded `.img.zip` file
4. Select your SD card as the target
5. Click **Flash!** and wait for the process to complete

## Step 3: Connect Your Board

1. Insert the flashed SD card into the Red Pitaya
2. Connect the Ethernet cable from Red Pitaya to your router
3. Connect the power supply

> **Note:** Ensure your computer is on the same network as the Red Pitaya.

## Step 4: Access the Web Interface

Open your web browser and navigate to:

```
http://rp-XXXXXX.local
```

Where `XXXXXX` is the last 6 characters of the board's MAC address (printed on the Ethernet connector).

Alternatively, you can find the IP address using your router's admin panel or a network scanner.

## Step 5: Launch Applications

Once connected, you'll see the Red Pitaya dashboard. From here you can launch:

- **Oscilloscope** – Real-time signal visualization
- **Signal Generator** – Generate test waveforms
- **Spectrum Analyzer** – Frequency domain analysis
- **Bode Analyzer** – Frequency response measurements
- And many more!

## Troubleshooting

If you cannot connect, see the [Troubleshooting](/docs/quick-start/troubleshooting) guide.
