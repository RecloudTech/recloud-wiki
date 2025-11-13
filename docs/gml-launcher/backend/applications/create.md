---
sidebar_position: 9
---

# Creating an External Application

External applications allow you to integrate third-party systems with **Gml Backend** and use the REST API to manage game data, profiles, and servers.

## How to Create an Application

1. **Open the Section**  
   Go to **Settings → Applications**.

   ![Application List](/img/gml_app_create_1.png)

2. **Click the** `Create Application` **button**.  
   A window for creating a new application will open.

   ![Application List](/img/gml_app_create_2.png)

3. **Enter the Application Name**  
   Provide a name to identify your integration.  
   For example: `GmlCraft`, `LauncherUpdater`, or `DiscordBot`.

4. **Select Access Permissions**  
   Permissions determine what actions the application can perform via the API —  
   for example, managing profiles, users, or launcher builds.

5. **Click** `Create`.  
   The application will be added to the list, and the system will display an access token.

   ![Application List](/img/gml_app_create_3.png)

6. **Save the Application Token**  
   The token is shown **only once**.  
   Save it in a secure location — it is required for API authorization.

---

## Important

- A lost token cannot be recovered — create a new application if necessary.
- Only share the token with trusted systems.
- Each application has its own set of permissions limiting data access.

---

## Example of Using the Token

After creating the application, you can access the Gml Backend API by including the token in the request header:

```bash
curl -X GET https://api.gml.dev/v1/profiles \
  -H "Authorization: Bearer <YOUR_TOKEN>"
