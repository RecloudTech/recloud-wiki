---
sidebar_position: 4
---

# Launch Options

This page describes configuring JVM launch arguments for a game profile using preconfigured parameters and Authlib Injector settings.

## JVM Arguments for Authlib Injector

In the game profile, you can specify your own JVM arguments, as well as others preconfigured in the libraries and client.

| JVM Argument                         | Description                                                                                      | Available Values                                                                                                                                         |
|--------------------------------------|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| -Dauthlibinjector.mojangNamespace    | Whether to enable the Mojang namespace (suffix @mojang).                                         | default, enabled, disabled                                                                                                                               |
| -Dauthlibinjector.legacySkinPolyfill | Use the legacy skin API, specifically:<br/>```GET``` ```/skins/MinecraftSkins/{username}.png```. | default, enabled, disabled                                                                                                                               |
| -Dauthlibinjector.debug              | Enable Authlib Injector debug mode                                                               | verbose (Detailed log)<br/>authlib (Mojang authlib log)<br/>dumpClass (Output of modified classes)<br/>printUntransformed (Output of unmodified classes) |
| -Dauthlibinjector.disableHttpd       | Disable Mojang namespace and legacy API support for fetching textures                            |                                                                                                                                                          |
| -Dauthlibinjector.noShowServerName   | Disable displaying the authentication server name on the Minecraft menu screen                   |                                                                                                                                                          |

| Game Arguments                     | Description                                                                                 | Applicable Versions |
|------------------------------------|---------------------------------------------------------------------------------------------|---------------------|
| --server [ip] --port [port]        | Automatically connect to a server on game launch. Legacy method.                            | 1.7.2 - 1.19.4      |
| --quickPlayMultiplayer [ip]:[port] | Automatically connect to a server on game launch. New method replacing --server and --port. | 1.20 and above      |
