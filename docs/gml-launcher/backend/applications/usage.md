---
sidebar_position: 10
---

# Using the Application

After creating an external application, you receive an **access token**, which is used for authentication when interacting with the **Gml Backend API**.  
With this token, the application can perform authorized actions, such as managing profiles, builds, players, or servers.

---

## Authorization

Each external application interacts with the API using a **Bearer Token**.  
The token must be included in the `Authorization` header of each request.

**Example request:**

```bash
curl -X GET https://api.gml.dev/v1/profiles \
  -H "Authorization: Bearer <YOUR_TOKEN>"
