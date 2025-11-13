---
sidebar_position: 2
id: other
---

# Additional

## Checking API Availability

To verify that requests are sent to the correct address and that the server responds, you can use the browser's Developer Tools. Follow these steps:

1. Open your browser (e.g., Google Chrome or Firefox).
2. Press **F12** or right-click on the page and select **Inspect** or **Inspect Element**.
3. Go to the **Network** tab.
4. Perform an action on the page that should send a request to the API.
5. In the Network tab, you will see a list of requests. Find your request and ensure that the **Name** column shows the correct address.
6. Click on the request, and at the bottom panel you will see detailed information about it:
    - **Headers**: Verify that the **Request URL** matches the expected address.
    - **Response**: Ensure the server returned the correct response.

By following these steps, you can confirm that your requests are sent to the correct endpoint and that the server is responding properly.
