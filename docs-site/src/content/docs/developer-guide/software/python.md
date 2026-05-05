---
title: Python API
description: Using the Red Pitaya Python API for signal acquisition and generation.
---

# Python API

Red Pitaya provides a native Python library (`rp`) that allows direct control of the hardware.

## Installation

The `rp` Python module is pre-installed on Red Pitaya OS. Access it by SSH-ing into your board:

```bash
ssh root@rp-XXXXXX.local
python3
```

## Basic Example

```python
import rp

# Initialize the Red Pitaya API
rp.rp_Init()

# ---- Signal Generation ----

# Set output to sine wave at 10 kHz, 0.5 V amplitude
rp.rp_GenWaveform(rp.RP_CH_1, rp.RP_WAVEFORM_SINE)
rp.rp_GenFreq(rp.RP_CH_1, 10000)   # 10 kHz
rp.rp_GenAmp(rp.RP_CH_1, 0.5)      # 0.5 V amplitude
rp.rp_GenOffset(rp.RP_CH_1, 0.0)   # No DC offset
rp.rp_GenOutEnable(rp.RP_CH_1)

# ---- Analog Acquisition ----

# Set acquisition parameters
rp.rp_AcqSetDecimation(rp.RP_DEC_1)   # No decimation
rp.rp_AcqSetTriggerLevel(rp.RP_T_CH_1, 0.1)
rp.rp_AcqSetTriggerDelay(0)

# Start acquisition
rp.rp_AcqStart()
rp.rp_AcqSetTriggerSrc(rp.RP_TRIG_SRC_CHA_PE)

# Wait for trigger
import time
while rp.rp_AcqGetTriggerState()[1] != rp.RP_TRIG_STATE_TRIGGERED:
    time.sleep(0.001)

# Read data
buff = rp.Buffer(rp.ADC_BUFFER_SIZE)
rp.rp_AcqGetOldestDataV(rp.RP_CH_1, rp.ADC_BUFFER_SIZE, buff)

data = [buff[i] for i in range(rp.ADC_BUFFER_SIZE)]
print(f"Acquired {len(data)} samples, max = {max(data):.3f} V")

# Cleanup
rp.rp_Release()
```

## Waveform Types

| Constant | Waveform |
|----------|----------|
| `RP_WAVEFORM_SINE` | Sine wave |
| `RP_WAVEFORM_SQUARE` | Square wave |
| `RP_WAVEFORM_TRIANGLE` | Triangle wave |
| `RP_WAVEFORM_RAMP_UP` | Rising sawtooth |
| `RP_WAVEFORM_RAMP_DOWN` | Falling sawtooth |
| `RP_WAVEFORM_DC` | DC signal |
| `RP_WAVEFORM_PWM` | PWM signal |
| `RP_WAVEFORM_ARBITRARY` | Arbitrary waveform |

## Remote Python via SCPI

You can also control Red Pitaya from your PC using SCPI over TCP:

```python
# Install: pip install redpitaya-scpi
import redpitaya_scpi as scpi

rp = scpi.scpi('192.168.1.100')  # Replace with your board's IP

# Set output channel 1 to 1 kHz sine wave
rp.tx_txt('GEN:RST')
rp.tx_txt('SOUR1:FUNC SINE')
rp.tx_txt('SOUR1:FREQ:FIX 1000')
rp.tx_txt('SOUR1:VOLT 1')
rp.tx_txt('OUTPUT1:STATE ON')

# Read a value
rp.tx_txt('ACQ:START')
rp.tx_txt('ACQ:TRIG NOW')
rp.tx_txt('ACQ:SOUR1:DATA?')
data = rp.rx_txt()
print(data)
```
