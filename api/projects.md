---
prev: false
next: false
---
# Projects

## Table of Contents

[[toc]]

## Create

**POST /v1/projects**

### Example request

```bash
curl --request POST \
  --url https://api-new.v2.vapor.cloud/v1/projects \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"name": "My Project",
	"organization": {
		"id": "97E55E93-9803-4BCF-8BAA-A4168A5153D0"
	}
}'
```

### Example response

```json
{
	"name": "My Project",
	"cost": null,
	"organization": {
		"credits": 0,
		"name": "My organization",
		"cost": null,
		"id": "97E55E93-9803-4BCF-8BAA-A4168A5153D0",
		"slug": "vapor-cloud-apis",
		"wallet": null,
		"refillCredits": null,
		"billingEmail": null,
		"refillThreshold": null
	},
	"id": "0B257CC3-2AEE-4FE0-9146-1789AB3C5BD7",
	"color": ""
}
```
