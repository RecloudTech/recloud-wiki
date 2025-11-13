---

## sidebar_position: 3

# Discord and Telegram News in the Launcher

This guide describes the process of setting up an integration to display news from your **Discord server** or **Telegram channel** in the GML launcher.

---

## 1. Environment Preparation

All steps are performed on your **VPS server** (VDS), where the integration service will be hosted.

Connect to your server via SSH and clone the repository:

```bash
git clone https://github.com/Niobrix/gml-custom-news.git
```

After downloading, navigate to the project directory:

```bash
cd gml-custom-news
```

---

## 2. Setting Environment Variables

Open the `.env.example` file using any convenient method — via **SFTP** (e.g., Notepad++) or directly in the terminal (`nano`, `vim`, `micro`, etc.).

### Fill in the following variables:

| Variable            | Description                                                                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DISCORD_BOT_TOKEN` | Discord bot token with access to the news channel. Add the bot to the server with administrator permissions. [Discord Developers Documentation](https://discord.com/developers/docs/intro). |
| `CHANNEL_ID`        | ID of the channel from which messages will be read. [How to get a channel ID](https://support.discord.com/hc/ru/articles/206346498).                                                        |
| `PORT`              | Port on which the integration application will run. Default is `3000`.                                                                                                                      |

> ⚠️ It is not recommended to change other variables unless you are sure of their purpose.

After making changes, save the file as **`.env`** (remove the `.example` suffix).

---

## 3. Running the Application via Docker

In the same directory, run:

```bash
docker compose up -d --build
```

After the build completes, the application will be accessible at:

```
http://{SERVER_IP}:{PORT}
```

---

## 4. Configuring Proxy and HTTPS

For proper operation, it is recommended to set up a **domain** and **SSL certificate**.

1. Configure a subdomain to proxy requests to your application.

2. Install Nginx and Certbot:

   ```bash
   sudo apt install -y nginx certbot python3-certbot-nginx
   ```

3. Create an Nginx configuration using the example:
   👉 [Nginx config example (Gist)](https://gist.github.com/yakoshiq/5b6aa80133fef30f8dc44f7e3cb37ec6)

4. Obtain an SSL certificate:

   ```bash
   certbot --nginx
   ```

After successful setup, the application will be available at a secure address:

```
https://{your_domain}/discord/messages
```

---

## 5. Connecting the Integration in the GML Panel

Insert the link to your endpoint (`https://{your_domain}/discord/messages`) in the **launcher panel** settings under:

```
Integrations → Social Media → Custom
```

---

## 6. Additional Information

* 🔄 **Caching:** data is cached both on the integration side and in GML. If the Discord API is temporarily unavailable, the latest news will continue to display.
* 🕒 **Update Frequency:** news from Telegram is updated approximately every 15 minutes.
* 🧩 **Telegram Integration:** allows fetching news from Telegram channels without using a bot.
* 🧾 **News Title:** determined by the first line of the message (before pressing Enter).
* 🔁 **Updates:** a shell script for automatic updates is available in the repository. See instructions in the [GitHub README](https://github.com/Niobrix/gml-custom-news).

---

## 7. Summary

After completing all steps, you will have:

✅ Automatic import of news from Discord and/or Telegram
✅ Secure HTTPS connection
✅ Easy management via the launcher panel
✅ Data caching for stable operation
