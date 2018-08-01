---
prev: false
next: false
---
# Configuration

## Table of Contents

[[toc]]

## Modify configuration

**PATCH /v1/application**

::: warning
Be aware, when updating configuration, the replicas will be updated, which will cause a reboot.
:::

::: tip
Exposes deployment object, listen to websocket to get status
:::

### Example request

```bash
curl --request PATCH \
  --url https://api-new.v2.vapor.cloud/v1/config/my-app/production \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
    "KEY": "Value"
}'
```

### Example response

```json
{
    "deployment": {
        "status": "waiting",
        "id": 189,
        "meta": {
            "gitHash": "",
            "action": "config",
            "shortGitHash": "",
            "id": "23"
        },
        "userID": "",
        "type": "replica",
        "regionID": "1",
        "environmentID": "FC62C23D-752A-4CDB-9425-0828F82855DB"
    },
    "config": [
        {
            "value": "Value",
            "environment": {
                "id": "FC62C23D-752A-4CDB-9425-0828F82855DB"
            },
            "id": "E7014F0D-EDE0-4000-B934-6A9FE6C22376",
            "key": "KEY"
        }
    ]
}
```
