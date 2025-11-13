---
sidebar_position: 1
---

# GNU/Linux

This guide will help you install the Gml.Backend server component on GNU/Linux systems.  
The installation script will automatically configure all necessary components for you.

## Prerequisites

Before starting the installation, make sure you have:

- A GNU/Linux system with the systemd init system
- Terminal access with administrative privileges (sudo)
- An internet connection to download installation files

### Officially Tested Distributions

The server component should work on most modern GNU/Linux distributions, but the official installation script provided here supports only certain distributions. Below is a list of officially tested distributions and their support status:

- ✅ Fully supported  
- ⚠️ Should work, but not tested  
- ❌ Not supported, use [manual installation](install-source)

| Distribution  | Versions |
| ------------- | -------- |
| `Ubuntu`      | 25 ✅ 24 ⚠️ 22 ⚠️ |
| `Debian`      | 13 ✅ 12 ⚠️ |
| `Fedora`      | 42 ✅ 41 ⚠️ |
| `Rocky`       | 9 ✅ |
| `Arch Linux`  | ⚠️ |
| `Alpine`      | ❌ |

## Installation Steps

### Step 1: Download the Installation Script

Open a terminal and run the following command to download the installation script:

```bash
curl -O https://raw.githubusercontent.com/Gml-Launcher/Gml.Backend.Installer/refs/heads/master/installer.sh
````

This command downloads the installation script from the GitHub repository.

### Step 2: Make the Script Executable

After downloading the script, make it executable by running:

```bash
chmod +x ./installer.sh
```

This command grants the script permission to run on your system.

### Step 3: Run the Installation

Now you can start the installation by executing:

```bash
./installer.sh --version v2025.3.2
```

The script will guide you through the installation process with prompts in Russian. Follow the on-screen instructions to complete the setup.

## Troubleshooting

If you encounter issues during installation:

* Make sure you have an active internet connection
* Verify that you have administrative privileges (try running with sudo if necessary)
* Check for correct command input
* If the script fails to download, you can manually download it from the [GitHub repository](https://github.com/GamerVII-NET/Gml.Backend.Installer)

## Additional Information

For more information or to report issues, visit the GitHub repository:
[Gml.Backend.Installer](https://github.com/GamerVII-NET/Gml.Backend.Installer)

```