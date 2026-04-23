---
title: Developer Guide Overview
description: Overview of development options for Red Pitaya including software APIs, FPGA development, and hardware specifications.
---

# Developer Guide Overview

Red Pitaya is designed to be highly programmable and customizable. This guide covers all development options.

## Development Approaches

### 1. Software Programming

Program Red Pitaya using high-level languages:

- **Python** – Via the `rp` module or SCPI over TCP
- **C/C++** – Native programming with the Red Pitaya C API
- **MATLAB** – Using the MATLAB Instrument Control Toolbox
- **LabVIEW** – National Instruments integration

### 2. FPGA Development

Customize the FPGA fabric using:

- **Vivado** – AMD Xilinx Vivado IDE (2020.1 recommended)
- **Vitis** – For embedded software alongside FPGA
- **Custom IP cores** – Add your own processing blocks

### 3. OS-Level Development

- SSH access to the Linux OS
- Install custom packages via `apt`
- Cross-compile programs
- Modify the device tree

## Quick Example: Python API

```python
import rp

# Initialize the Red Pitaya API
rp.rp_Init()

# Configure analog output
rp.rp_GenWaveform(rp.RP_CH_1, rp.RP_WAVEFORM_SINE)
rp.rp_GenFreq(rp.RP_CH_1, 10000)    # 10 kHz
rp.rp_GenAmp(rp.RP_CH_1, 0.5)       # 0.5 V amplitude
rp.rp_GenOutEnable(rp.RP_CH_1)

# Read analog input
value = rp.rp_AIpinGetValue(0)
print(f"Analog input 0: {value} V")

# Cleanup
rp.rp_Release()
```

## Board Specifications

| Parameter | STEMlab 125-14 |
|-----------|----------------|
| FPGA | Xilinx Zynq 7010 |
| CPU | Dual-core ARM Cortex-A9 @ 666 MHz |
| ADC | 14-bit, 125 MS/s |
| DAC | 14-bit, 125 MS/s |
| RAM | 512 MB DDR3 |
| USB | USB 2.0 Host |
| Ethernet | 1 Gbit |
