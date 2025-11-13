---
sidebar_position: 1
---

# Nginx Setup Guide

## 1. Configure HTTPS and Reverse Proxy

Create an Nginx configuration file for your domain **gmlf.YourSite**.

```nginx
server {
    listen 80;
    server_name gmlf.YourSite;
    return 301 https://$host$request_uri; # Redirect all requests to HTTPS
}

server {
    listen 443 ssl;
    server_name gmlf.YourSite;

    ssl_certificate /etc/letsencrypt/live/gmlf.YourSite/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/gmlf.YourSite/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:5003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Hwid $http_x_hwid;
        proxy_cache_bypass $http_upgrade;
    }
}
````

---

## 2. Check Configuration and Restart Service

To check the syntax of the configuration file, run:

```bash
nginx -t
```

Expected output:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

If there are no errors, restart the Nginx service:

```bash
service nginx restart
```

After a successful restart, the **Frontend** and **Backend** will be accessible via HTTPS:

```
https://gmlf.YourSite
```

---

## 3. Install and Configure Let's Encrypt SSL Certificate

On the server acting as a proxy, install the required packages:

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
```

After installation, initiate the SSL certificate issuance:

```bash
certbot certonly --nginx -d gmlf.YourSite
```

During the first run, you will need to:

* Provide a valid email address.
* Agree to the terms of service by entering `Y`.

---

## 4. Cloudflare Configuration (if used)

If your domain is managed via Cloudflare:

1. Go to the **SSL/TLS** section in the Cloudflare panel.
2. Ensure the connection shows **locked icons on both sides**.
3. Click **Configure → Custom SSL/TLS**.
4. Set the mode to **FULL**.

---

## 5. Finalizing Setup

After completing all steps:

* The server will be accessible via **HTTPS**;
* Requests will be correctly proxied to the backend (port `5003`);
* A valid **Let's Encrypt** certificate will be in use;
* Configuration will be compatible with **Cloudflare Full SSL** mode.
