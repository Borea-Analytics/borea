# Borea
Borea is product analytics for developers. Track every event and session on your app to really understand how people use your software. 

<br /><br />

## Join our community!

Join our [Borea Discord server](https://discord.gg/RNueFbmGnM) if you need help with your deployment, want to chat, or are thinking of a new feature. We're here to help you and make Borea better!

<br /><br />

## Features

- **Event-based** analytics at a user level - capture your product's usage data to see which users are doing what in your application.
- **Product data visualizations**: utilize graphs, funnels, user cohorts, user paths, retention tables, and  custom dashboards.
- **Complete control** over your data - host it yourself.
- **Session recording** to watch videos of your user behavior, with fine-grained privacy controls.
- **Automatically capture** clicks and pageviews to analyze what your users are doing without pushing events manually.
- **Heatmaps** with the Borea Toolbar.
- **Super easy deploy** using Docker.

<br /><br />

# Deployment

## Prerequisites
- 4 GB RAM
- 2-core CPU
- 50 GB memory

---

## Deploying via Docker

1. Access your instance, vm, or machine where you will be hosting Borea

2. Install the [Docker Engine](https://docs.docker.com/engine/install/)
Ensure docker is installed by running this command:
`docker version`

3. Install Git by running this command:
`sudo apt-get update && sudo apt-get install git`

4. Clone the Borea repository and enter the folder with this command:
`git clone https://github.com/Borea-Analytics/borea.git && cd borea`

5. Generate a secret key that is unique to your instance:
**NOTE: Do not use the default secret key. You must generate a new key for your instance**
	- Run: `openssl rand -hex 32` in your terminal. This generates a random key for you to use.
	- Then, open the docker-compose.yml file with the command: `nano docker-compose.yml` or `vi docker-compose.yml`
	- Lastly, substitute "\<randomly generated secret key\>" for your generated key.
	- This means the SECRET_KEY: "\<randomly generated secret key\>" line will end up looking something like this (with your key; don't use this one, as it's in our public documentation 😊):
	- `SECRET_KEY: "271d54957bca2b4978ff920c956114b2b4e8a2c33343ba8d6190b794e3667ab2"`

6. To run Borea, run:

`sudo docker compose up -d`

Tada! Borea should now be accessible on the domain you set up or the IP of your instance.

#### Important: If you do not have a TLS/SSL certificate set up for your domain/IP, accessing your Borea instance at that address will not work. 
#### To get around this, you need to edit the docker-compose.yml file manually and add the environment variables `DISABLE_SECURE_SSL_REDIRECT: 'true'` and `SECURE_COOKIES: 'false'` under services > web > environment. This is a manual process because Borea should not be run without a certificate (over HTTP). 
#### Doing this and restarting the service will allow you to access Borea over HTTP, but might require configuring browser settings to allow HTTP traffic depending on what browser you use.

## Running Borea Behind a Reverse Proxy or Load Balancer

### Setup

If Borea is running behind a proxy, you need to do the following:

- Make sure you have the `IS_BEHIND_PROXY` environment variable set to `'true'` under `services > web > environment`.
- If deploying with Docker, use the docker-compose-config.py script to expose the appropriate port in docker-compose.yml. By default port 80 is exposed, causing a port conflict between the Borea Docker container and the proxy.
- Depending on your setup, you might also need to set the `ALLOWED_HOSTS` environment variable under `services > web > environment`. Try this if the above settings do not solve your issue.

### Suggested configuration

#### NGINX Config (Suggested)

You need to make sure your proxy server is sending `X-Forwarded-For` headers. For NGINX, that config should look something like this:
```
location / {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header Host $http_host;
    proxy_redirect off;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_pass http://127.0.0.1:8000;
}
```
#### Apache2 Config

You need the proxy proxy_http and proxy_html modules enabled. To do this, run sudo a2enmod proxy proxy_http proxy_html.

Ensure SSL is enabled, and include the `X-Forwarded-Proto header` so that Borea knows.

```
<VirtualHost *:443>
	ProxyPass / http://0.0.0.0:8000/
    RequestHeader set X-Forwarded-Proto expr=%{REQUEST_SCHEME}
    # SSL & other configuration here
</VirtualHost>
```

---

## Some important points
1. **Don't run Borea without SSL/TLS. Ever.**
Borea must be run using HTTPS or it will fail and your user data will be at risk. 

2. **Make sure your firewall rules allow access to the port that Borea is running on**
If you cannot access your dashboard through port 8000 or your specified port, this is usually a firewall issue. To solve it, run:
`sudo ufw allow <PORT> && sudo ufw reload`
Then check to make sure the changes were applied and you should be able to acces the port:
`sudo ufw status`
3. **Ensure your cloud provider's security rules and firewall allow access to the specified ports. See below for platform-specific details:**
- [AWS](https://repost.aws/knowledge-center/connect-http-https-ec2)
- [GCS](https://cloud.google.com/firewall/docs/firewalls)
- [Azure](https://learn.microsoft.com/en-us/azure/virtual-network/tutorial-filter-network-traffic?tabs=portal)

## Contributing

We are a small team, so contributions to improve this product are always welcome. To contribute, open a pull request and email Logan at lsreedercontact@gmail.com