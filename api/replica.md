---
prev: false
next: false
---
# Replica

## Table of Contents

[[toc]]

## Scale

Scale the amount of replicas of your application.

::: tip
Exposes deployment object, listen to websocket to get status
:::

**PATCH /v2/apps/replicas/APPLICATION/ENVIRONMENT/REPLICA/scale**

### Example request

```bash
curl --request PATCH \
  --url https://api-new.v2.vapor.cloud/v2/apps/replicas/my-app/production/web/scale \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"replicas": 1
}'
```

### Example response

```json
{
	"replica": {
		"status": "created",
		"name": "web",
		"replicas": 1,
		"environmentID": "8D0F0E6A-583F-4CAA-9FAC-91AADDC828CD",
		"version": "7815792",
		"id": 19
	},
	"deployment": {
		"status": "waiting",
		"environmentID": "8D0F0E6A-583F-4CAA-9FAC-91AADDC828CD",
		"meta": {
			"id": "19",
			"gitHash": "",
			"action": "scale",
			"shortGitHash": ""
		},
		"regionID": "1",
		"type": "replica",
		"id": 239,
		"userID": "ACBCCDC5-BBF2-414A-BB0E-5C27C4B4ED04"
	}
}
```

## Resize

Resize the replicas, by changing the plan.

::: tip
Exposes deployment object, listen to websocket to get status
:::

**PATCH /v2/apps/replicas/APPLICATION/ENVIRONMENT/REPLICA/resize**

### Example request

```bash
curl --request PATCH \
  --url https://api-new.v2.vapor.cloud/v2/apps/replicas/my-app/production/web/resize \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"plan": "small"
}'
```

### Example response

```json
{
	"deployment": {
		"meta": {
			"gitHash": "",
			"id": "19",
			"shortGitHash": "",
			"action": "resize"
		},
		"status": "waiting",
		"environmentID": "8D0F0E6A-583F-4CAA-9FAC-91AADDC828CD",
		"userID": "ACBCCDC5-BBF2-414A-BB0E-5C27C4B4ED04",
		"regionID": "1",
		"id": 149,
		"type": "replica"
	},
	"replica": {
		"status": "created",
		"replicas": 1,
		"region": {
			"id": 1,
			"description": "Digital Ocean - New York City",
			"country": "United States",
			"providerRegion": "nyc1",
			"provider": "Digital Ocean",
			"name": "do-nyc1"
		},
		"environmentID": "8D0F0E6A-583F-4CAA-9FAC-91AADDC828CD",
		"plan": {
			"productID": 2,
			"slug": "small",
			"id": 5,
			"description": "",
			"details": {
				"memory": 256
			},
			"price": "0",
			"name": "Dev - Small"
		},
		"id": 19,
		"version": "39d4dbca",
		"name": "web"
	}
}
```

## Reboot

Reboot your replicas

::: tip
Exposes deployment object, listen to websocket to get status
:::

**PATCH /v2/apps/replicas/APPLICATION/ENVIRONMENT/REPLICA/reboot**

### Example request

```bash
curl --request PATCH \
  --url https://api-new.v2.vapor.cloud/v2/apps/replicas/my-app/production/web/scale \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json'
```

### Example response

```json
{
	"replica": {
		"status": "created",
		"id": 3,
		"environmentID": "CC3A273A-4BCC-4A6D-9C17-5FD011726294",
		"replicas": 1,
		"name": "web",
		"version": "267d7e7"
	},
	"deployment": {
		"status": "waiting",
		"environmentID": "CC3A273A-4BCC-4A6D-9C17-5FD011726294",
		"userID": "ACBCCDC5-BBF2-414A-BB0E-5C27C4B4ED04",
		"id": 206,
		"regionID": "1",
		"meta": {
			"gitHash": "",
			"id": "3",
			"shortGitHash": "",
			"action": "reboot"
		},
		"type": "replica"
	}
}
```
