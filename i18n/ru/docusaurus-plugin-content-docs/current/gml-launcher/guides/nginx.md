---
sidebar_position: 1
---

# Руководство по настройке Nginx

## 1. Настройка HTTPS и обратного проксирования

Создайте конфигурационный файл Nginx для домена **gmlf.ВашСайт**.


```
server {
    listen 80;
    server_name gmlf.ВашСайт;
    return 301 https://$host$request_uri; # Перенаправление всех запросов на HTTPS
}

server {
    listen 443 ssl;
    server_name gmlf.ВашСайт;

    ssl_certificate /etc/letsencrypt/live/gmlf.ВашСайт/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/gmlf.ВашСайт/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:5003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 2. Проверка корректности конфигурации и перезапуск службы

Для проверки синтаксиса конфигурационного файла выполните команду:

```bash
nginx -t
```

Ожидаемый результат:

```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Если ошибок не обнаружено, перезапустите службу Nginx:

```bash
service nginx restart
```

После успешного перезапуска **Frontend** и **Backend** будут доступны по защищённому протоколу:

```
https://gmlf.ВашСайт
```

---

## 3. Установка и настройка SSL-сертификата Let's Encrypt

На сервере, выполняющем роль прокси, выполните установку необходимых пакетов:

```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
```

После установки инициируйте получение SSL-сертификата:

```bash
certbot certonly --nginx -d gmlf.ВашСайт
```

Во время первого запуска потребуется:

* Указать действующий адрес электронной почты;
* Согласиться с условиями использования, ответив `Y`.

---

## 4. Настройка Cloudflare (при использовании)

:::info
 ⚠️ данный раздел применим **только** при использовании Cloudflare.
:::

Если домен обслуживается через Cloudflare:

1. Перейдите в раздел **SSL/TLS** панели Cloudflare.
2. Убедитесь, что соединение отображается в виде **замков с обеих сторон**.
3. Нажмите **Configure → Custom SSL/TLS**.
4. Установите режим **FULL**.

:::info
Режим **FULL** требует наличия действительного сертификата Let's Encrypt на сервере (VDS).
:::


---

## 5. Завершение настройки

После выполнения всех вышеуказанных шагов:

* Сервер доступен по протоколу **HTTPS**;
* Запросы корректно проксируются на backend (порт `5003`);
* Используется действующий сертификат **Let's Encrypt**;
* Конфигурация совместима с режимом **Cloudflare Full SSL**.