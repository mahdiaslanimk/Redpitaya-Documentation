---
title: Troubleshooting
description: Common issues and solutions when setting up Red Pitaya.
---

# Troubleshooting

## Can't Connect to the Board

### Issue: `rp-XXXXXX.local` doesn't resolve

**Solution:**

1. Ensure your computer and Red Pitaya are on the **same network**
2. Check that the board's LEDs are active (indicates it has booted)
3. Try connecting via IP address instead:
   - Find the IP in your router's DHCP client list
   - Or use a network scanner like **Angry IP Scanner**

```bash
# Scan your network (replace with your subnet)
nmap -sn 192.168.1.0/24
```

4. On Windows, install **Bonjour** to enable mDNS name resolution

### Issue: Ethernet not detected

- Check that the Ethernet cable is properly connected
- Try a different Ethernet cable
- Ensure the router/switch port is active

## Board Doesn't Boot

### Issue: No LED activity after power-on

- Verify you're using a **5V/2A** power supply (not 5V/1A)
- Check that the micro USB cable supports power (not just data)
- Ensure the SD card is properly inserted
- Try re-flashing the SD card

### Issue: Board boots but web interface is unavailable

Wait up to **60 seconds** for the OS to fully start. The web interface becomes available only after all services have started.

## Web Interface Issues

### Issue: Applications don't launch

- Clear browser cache (`Ctrl+Shift+Delete`)
- Try a different browser
- Disable browser extensions
- Use the direct application URL:
  ```
  http://rp-XXXXXX.local/apps/scope/
  ```

## SSH Access Issues

```bash
# Default credentials
Username: root
Password: root

# Connect
ssh root@rp-XXXXXX.local
```

> **Note:** If you've changed the password and forgotten it, you'll need to re-flash the SD card.

## Getting More Help

- [Red Pitaya Forum](https://forum.redpitaya.com)
- [Red Pitaya GitHub Issues](https://github.com/RedPitaya/RedPitaya/issues)
- [Red Pitaya Support](https://redpitaya.com/contact)
