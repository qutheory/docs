---
prev: false
next: false
---
# Organization

## Table of Contents

[[toc]]

## Index

**POST /admin/organizations**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url https://api-new.v2.vapor.cloud/admin/organizations \
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
<pre class="lang-json"><code class="lang-json">{
	"data": [
		{
			"refillCredits": null,
			"cost": null,
			"id": "712BD38D-519D-46B0-8A23-803574835580",
			"name": "My organization",
			"credits": 0,
			"refillThreshold": null,
			"slug": "my-organization",
			"billingEmail": null,
			"wallet": null
		}
	],
	"page": {
		"position": {
			"max": 1,
			"current": 1
		},
		"data": {
			"per": 10,
			"total": 1
		}
	}
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>  
    </tab>
</tabs>

## View

**POST /admin/organizations/ID**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url https://api-new.v2.vapor.cloud/admin/organizations/712BD38D-519D-46B0-8A23-803574835580 \
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
	"refillCredits": null,
	"cost": {
		"hourly": 0,
		"monthly": 0
	},
	"id": "712BD38D-519D-46B0-8A23-803574835580",
	"name": "My organization",
	"credits": 0,
	"refillThreshold": null,
	"slug": "my-organization",
	"billingEmail": null,
	"wallet": null
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Create

**POST /admin/organizations**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request POST \
  --url https://api-new.v2.vapor.cloud/admin/organizations \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"name": "My organization"
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
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Delete

::: tip
@TODO
:::
