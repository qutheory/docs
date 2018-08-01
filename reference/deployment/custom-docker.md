---
prev: false
next: false
---
# Custom docker

::: tip
This page is still work in progress
:::

## Table of Contents

[[toc]]

Vapor Cloud is built using very scalable Docker templates for running Vapor. But sometimes you can experience cases where you want to change the Docker template, either because you need some major changes to the template, or simply want to run something different from Vapor, for example a VueJS frontend application for your Vapor app.

To accomplish this, you can easily change the Docker template used by the deployment process.
Setting up custom docker template

## Docker file

Start by adding a Dockerfile in your application root. The Vapor Cloud docker setup supports Multi-step docker build.
Here is an example of a VueJS template using NGinx

```docker
# build stage
FROM node:9.11.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html/dist
RUN chown -R nginx:nginx /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
```

## Yaml file

Before your custom docker file is used, you need to modify the `cloud.yaml` file.

```yaml
customDocker: true
```

Default the system will read port `8080` in your container. If you need another port, like the example above, add the following line in the yaml file.

```yaml
containerPort: 80
```

## Unsupported features

**EXPOSE**

You can't use `EXPOSE` to expose your port from the dockerfile, instead set the `containerPort` in the yaml file.
