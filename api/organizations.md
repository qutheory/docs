---
prev: false
next: false
---
# Organization

## Table of Contents

[[toc]]

## Create

**POST /admin/organizations**

### Example request

```bash
curl --request POST \
  --url https://api-new.v2.vapor.cloud/admin/organizations \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"name": "My organization"
}'
```

### Example response

```json
{
	"credits": 0,
	"name": "My organization",
	"cost": null,
	"id": "97E55E93-9803-4BCF-8BAA-A4168A5153D0",
	"slug": "my-organization",
	"wallet": null,
	"refillCredits": null,
	"billingEmail": null,
	"refillThreshold": null
}
```
