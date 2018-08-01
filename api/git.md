---
prev: false
next: false
---
# Git

## Table of Contents

[[toc]]

## Add SSH Key

**POST /v2/git/ssh**

### Example request

```bash
curl --request POST \
  --url https://api-new.v2.vapor.cloud/v2/git/ssh \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
    "sshKey": "ssh public key"
}'
```

### Example response

```json
{
    "userID": "ACBCCDC5-BBF2-414A-BB0E-5C27C4B4ED04",
    "sshKey": "ssh public key",
    "updatedAt": "2018-07-30T10:48:27Z",
    "createdAt": "2018-07-30T10:48:27Z",
    "id": 3
}
```

## Delete SSH Key

**DELETE /v2/git/ssh/ID**

### Example request

```bash
curl --request DELETE \
  --url https://api-new.v2.vapor.cloud/v2/git/ssh/2 \
  --header 'authorization: Bearer AccessToken'
```
