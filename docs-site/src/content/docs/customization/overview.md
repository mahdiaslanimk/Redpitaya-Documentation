---
title: Customization Overview
description: Guide to customizing Red Pitaya with custom FPGA designs and applications.
---

# Customization Overview

Red Pitaya is built on open-source hardware and software, making it fully customizable for your specific application.

## What Can Be Customized?

### FPGA Firmware
- Design custom signal processing pipelines
- Add custom IP cores
- Modify the existing FPGA project in Vivado

### Web Applications
- Build custom web-based instruments
- Use the Red Pitaya web application framework
- Deploy your own web apps to the board

### Linux OS
- Install additional packages
- Write custom systemd services
- Add custom startup scripts

### Hardware Extensions
- Use the E1/E2 extension connectors
- Add custom HAT boards
- Interface with external sensors and actuators

## Getting Started with FPGA Customization

### Prerequisites

1. Install **AMD Xilinx Vivado** (2020.1 recommended)
2. Clone the Red Pitaya FPGA repository:

```bash
git clone https://github.com/RedPitaya/RedPitaya-FPGA.git
cd RedPitaya-FPGA
```

3. Source the Vivado environment:

```bash
source /opt/Xilinx/Vivado/2020.1/settings64.sh
```

### Build the Default Project

```bash
cd RedPitaya-FPGA
make project PRJ=v0.94 MODEL=Z10
```

### Create a Custom IP Core

1. Open Vivado and create a new IP core
2. Add it to the Red Pitaya block design
3. Connect it to the AXI bus for CPU access
4. Build the bitstream and deploy it to the board

## Custom Web Applications

Red Pitaya uses a marketplace-style web app framework. To create a custom app:

1. Create an `info.json` file with app metadata
2. Write a `main.js` for the front-end
3. Optionally, add a Python or C back-end service
4. Deploy to `/opt/redpitaya/www/apps/your-app/`

```json
{
  "name": "My Custom App",
  "version": "1.0.0",
  "description": "Custom measurement application",
  "author": "Your Name",
  "categories": ["custom"]
}
```

## Resources

- [Red Pitaya FPGA GitHub](https://github.com/RedPitaya/RedPitaya-FPGA)
- [Red Pitaya OS GitHub](https://github.com/RedPitaya/RedPitaya)
- [Red Pitaya Forum](https://forum.redpitaya.com)
