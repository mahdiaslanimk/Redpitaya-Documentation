---
title: Apps & Features Overview
description: Overview of all applications and features available on Red Pitaya.
---

# Apps & Features Overview

Red Pitaya provides a suite of web-based software-defined instruments accessible directly from your browser.

## Available Applications

### Instruments

| Application | Description |
|-------------|-------------|
| **Oscilloscope** | 2-channel digital oscilloscope up to 125 MS/s |
| **Signal Generator** | Arbitrary waveform generator |
| **Spectrum Analyzer** | FFT-based spectrum analysis |
| **Bode Analyzer** | Frequency response (Bode plot) measurements |
| **LCR Meter** | Inductance, capacitance, and resistance measurement |
| **Vector Network Analyzer** | VNA measurements |

### Communication

| Protocol | Description |
|----------|-------------|
| **SCPI** | Remote control via Standard Commands for Programmable Instruments |
| **Python API** | Direct Python programming interface |
| **MATLAB** | MATLAB integration |
| **LabVIEW** | National Instruments LabVIEW support |

## Remote Control (SCPI)

The SCPI interface allows you to control Red Pitaya remotely:

```python
import redpitaya_scpi as scpi

rp = scpi.scpi('192.168.1.100')

# Set output channel 1 to sine wave at 1 kHz, 1 Vpp
rp.tx_txt('GEN:RST')
rp.tx_txt('SOUR1:FUNC SINE')
rp.tx_txt('SOUR1:FREQ:FIX 1000')
rp.tx_txt('SOUR1:VOLT 1')
rp.tx_txt('OUTPUT1:STATE ON')
```

## Web Interface

Access all applications through the web dashboard at `http://rp-XXXXXX.local` from any device on your network.
