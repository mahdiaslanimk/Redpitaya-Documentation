---
title: OS Update
description: How to update the Red Pitaya OS to the latest version.
---

# OS Update

Keeping your Red Pitaya OS up-to-date ensures you have the latest features, bug fixes, and security patches.

## Method 1: Web Interface Update

1. Connect your Red Pitaya board to your network
2. Open the web interface at `http://rp-XXXXXX.local`
3. Navigate to **System → Update**
4. Click **Check for Updates**
5. If an update is available, click **Update Now**
6. Wait for the update to complete and the board to restart

## Method 2: Manual SD Card Flash

1. Download the latest OS image from [redpitaya.com/downloads](https://redpitaya.com/downloads/)
2. Flash the image to a new SD card using **balenaEtcher**
3. Replace the old SD card with the newly flashed one
4. Power on the board

## Method 3: Command Line Update

SSH into your Red Pitaya and run:

```bash
# Connect via SSH
ssh root@rp-XXXXXX.local

# Update package lists
apt-get update

# Upgrade all packages
apt-get upgrade -y
```

## Checking Your OS Version

```bash
cat /etc/redpitaya/version.json
```

Or from the web interface: **System → About**

## Important Notes

> **Warning:** Always backup any custom data before updating.

- Network connection is required for web interface updates
- Manual SD card flash is recommended for major version upgrades
- Some FPGA bitstreams may need to be updated separately
