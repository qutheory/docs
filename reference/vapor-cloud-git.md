---
prev: false
next: false
---
# Vapor Cloud GIT

The recommended deployment method, is using the Vapor Cloud GIT. This is a git server
hosted by Vapor Cloud, providing free private repositories.

## Setting up

Setting up Vapor Cloud GIT, is easy through the Toolbox.

Simply run

```bash
vapor-beta cloud init
```

After this you can simply run

```bash
git push cloud master:production
```

This will deploy `master` branch to `production` environment.

to make sure you have access, you can always test the connection with the following

```bash
ssh git@git.code.vapor.cloud
```

This will return something similar to this

```bash
PTY allocation request failed on channel 0
Hi jonas@qutheory.io! Welcome to Vapor Cloud GIT
 R W	app1
 R W	app2
Connection to git.code.vapor.cloud closed.
```
