---
prev: false
next: false
---
# API

## Table of Contents

[[toc]]

## Getting started

The Vapor Cloud API exposes all features used by Vapor Cloud

::: warning
Be aware, when using the Vapor Cloud API, you are working against the live API.
:::

## Authentication

When authenticating against the API, you should create a user token.

This can be created by running

```bash
vapor cloud token create
```

or through the dashboard. You can create as many tokens as you want. Tokens don't have an expiration.

::: warning
If you think your key have been compromised, make sure to delete it immediately.
:::

## Deployment

Various different endpoints, can trigger a `deployment`. Deployment is an action used against the servers.

If an endpoint exposes a deployment object, you can listen to the websocket system, with the deployment id, to get live output.
