# Vapor Cloud Docs

This is the documentation for Vapor Cloud 2.

The documentation can temporarily be found here: https://cloud-docs.v2.vapor.cloud

## Development

The documentation is built using a system called VuePress, to make it work locally you should first install this with

```
yarn global add vuepress # OR npm install -g vuepress
```

After this, simply run it with

```
cd docs/
npm install
vuepress dev
```

You don't need to build anything to production, this happens during the deployment process (see the Dockerfile)
