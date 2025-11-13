---
sidebar_position: 2
---

# Using a Custom Java Version

This guide explains how to configure and use your **own Java version (JDK/JRE)** when building a profile in GML Backend.

---

## 1. Determine the Target Platform

Go to the directory:

```

/srv/gml/data/GmlBackend/runtime/

```

Inside, you will find folders corresponding to different operating systems:

```

linux/
linux-i386/
mac-os/
mac-os-arm64/
windows-arm64/
windows-x64/  ← example
windows-x86/

```

> ⚠️ Select the folder that matches the system for which you are building the profile.  
> In this example, we will use **`windows-x64`**.

---

## 2. Prepare the Folder for Your Java

Navigate to the chosen platform directory, for example:

```

/srv/gml/data/GmlBackend/runtime/windows-x64/

```

Create (or open, if it already exists) a folder:

```

java-runtime-gamma

````

---

## 3. Install Your Custom Java

The `java-runtime-gamma` folder may already contain a preinstalled Java. To replace it with your version:

1. Remove all existing files in this folder.  
2. Copy your JDK or JRE contents into this folder.  
3. Ensure the directory structure is correct and contains executable files (`bin/java`, `bin/java.exe`, etc.).

---

## 4. Set Permissions

For Linux or other UNIX systems, set read and execute permissions only:

```bash
chmod 0555 java-runtime-gamma
````

This will result in the following permissions:

| Permission  | Owner | Group | Others |
| ----------- | ----- | ----- | ------ |
| R (Read)    | ✅     | ✅     | ✅      |
| W (Write)   | ❌     | ❌     | ❌      |
| X (Execute) | ✅     | ✅     | ✅      |

**Permission code:** `0555`
**Owner:** root
**Group:** root

> ✅ This protects your Java from accidental modification or deletion.

---

## 5. Alternative Method (Windows, without WSL)

If you are on **Windows 10/11** and not using WSL, you can apply similar restrictions via NTFS properties:

1. Right-click the `java-runtime-gamma` folder → **Properties** → **Security**.
2. Click **Edit**.
3. For each group (e.g., *Users*, *Administrators*), check **Deny** for the **Write** permission.
4. Click **Apply** → **OK**.

This is equivalent to `chmod 0555` on Windows.

---

## 6. Verify the Setup

After completing the steps, ensure that:

* The `java-runtime-gamma` folder structure is correct.
* All necessary executables (`java`, `javac`, etc.) are present.
* Permissions are set properly.

Now, when building a profile for the corresponding platform (in this example — `windows-x64`), your custom Java version will be used.

---

## 7. Note for Other Platforms

If you are building a profile for a different OS:

* Simply replace `windows-x64` in the paths with the appropriate folder, for example:

    * `linux`
    * `linux-i386`
    * `mac-os`
    * `mac-os-arm64`

---

## ✅ Outcome

After completing this guide:

* GML Backend will use your custom Java when building profiles.
* The Java version is fully under your control.
* Standard environment or bundled runtimes will not interfere.
