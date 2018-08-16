---
prev: false
next: false
---
# Permissions

## Table of Contents

[[toc]]

## View

**POST /v2/auth/permissions/organizations/ID**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url https://api-new.v2.vapor.cloud/v2/auth/permissions/organizations/26 \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json'
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

### Example response

<tabs>
    <tab name="CURL">
<pre><code class="language-json">{
	"organizationID": 27,
	"id": 2,
	"userID": 19,
	"type": "admin",
	"updatedAt": "2018-08-15T22:40:01Z",
	"createdAt": "2018-08-15T22:40:01Z"
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Create

**POST /v2/auth/permissions**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request POST \
  --url https://api-new.v2.vapor.cloud/v2/auth/permissions \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"organization": "myorg-1",
	"email": "jonas@vapor.codes",
	"type": "developer"
}'
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

### Example response

<tabs>
    <tab name="CURL">
<pre><code class="language-json">{
	"userID": 18,
	"organizationID": 27,
	"id": 4,
	"inviteToken": "dd191c3dce5482f9fcab2817a2631c5af85cf8b2efa000383af1",
	"updatedAt": "2018-08-16T00:45:55Z",
	"createdAt": "2018-08-16T00:45:55Z",
	"type": "developer"
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>
