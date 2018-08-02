---
prev: false
next: false
---
# Application

## Table of Contents

[[toc]]

## Create application

**POST /v1/application**

::: tip INFO
Be aware, this endpoint can take between 5 and 15 seconds to finish
:::

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request POST \
  --url https://api-new.v2.vapor.cloud/v1/application \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"project": {
		"id": "0B257CC3-2AEE-4FE0-9146-1789AB3C5BD7"
	},
	"repoName": "my-app",
	"name": "My application",
	"environment": {
		"name": "production"
	}
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
	"environment": {
		"defaultBranch": "master",
		"name": "production"
	},
	"hosting": {
		"gitUrl": "git@git.code.vapor.cloud:my-app.git"
	},
	"application": {
		"id": "EF1DA763-A8D3-4D64-A2B5-044952D84CA9",
		"repoName": "my-app",
		"name": "My application"
	}
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>
