---
sidebar_position: 3
---

# Authentication

This page describes the different types of authentication supported by Gml.Backend.  
You will find a brief description and links to official resources for each type of authentication.

#### Predefined Types

Currently, Gml Backend supports several predefined authentication types:

| Authentication Type   | Description                                                                                                                                                                                                      |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined             | **Not allowed** for any launcher-side authentication                                                                                                                                                             |
| Any                   | **Allowed** for any launcher-side authentication                                                                                                                                                                 |
| DataLifeEngine        | Authorization script for CMS <br/>[DataLifeEngine](https://dle-news.ru)                                                                                                                                          |
| Azuriom               | Authentication via CMS <br/>[Azuriom](https://github.com/Azuriom/Azuriom) <br/> **UUID generation must be adjusted. <br/>Process is described on [this page](/docs/gml-launcher/backend/authorization/azuriom).* |
| EasyCabinet           | Authentication via user cabinet system <br/>[Aurora EasyCabinet](https://github.com/AuroraTeam/EasyCabinet)                                                                                                      |
| UnicoreCMS            | Authentication via UnicoreCMS system                                                                                                                                                                             |
| Custom Authentication | Authentication that you can configure yourself for your API                                                                                                                                                      |

You can read more about custom authentication on [this page](/docs/gml-launcher/backend/authorization/custom).
