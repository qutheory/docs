---
prev: false
next: false
---
# Deployment

## Table of Contents

[[toc]]

::: tip
All Deploy types gives a `trackingURL`, this is the URL to a websocket, allowing to listening to realtime log output
:::

## Code deploy

**PATCH /v2/apps/replicas/SLUG/ENVIRONMENT/REPLICA/deploy**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url 'https://api-new.v2.vapor.cloud/v2/apps/replicas/test-app11/production/web/deploy' \
  --header 'authorization: Bearer AccessToken'
  --data '{
  "branch": "master"
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
	"id": 33,
	"replicas": 0,
	"name": "web",
	"status": "",
	"activity": {
		"id": 137,
		"trackingURL": "https:\/\/api-new.v2.vapor.cloud\/v2\/activity\/channel\/137"
	},
	"environmentID": 33,
	"release": {
		"id": 146,
		"replicas": 0,
		"createdAt": "2018-08-29T11:27:00Z",
		"activityID": 137,
		"planID": 1,
		"version": "v5",
		"updatedAt": "2018-08-29T11:27:00Z",
		"environmentID": 33,
		"type": "replicaDeploy"
	}
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Update config

**PATCH /v2/apps/replicas/SLUG/ENVIRONMENT/REPLICA/config**

::: tip
To remove a config key, set the value to `null`
:::

::: warning
When updating config, each replica will reboot, this can cause slight downtime.
:::

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url 'https://api-new.v2.vapor.cloud/v2/apps/replicas/test-app11/production/web/config' \
  --header 'authorization: Bearer AccessToken'
  --data '{
  "config": {
    "CONFIG1": "Foo",
    "CONFIG2": "Bar"
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
	"id": 33,
	"replicas": 0,
	"name": "web",
	"status": "",
	"activity": {
		"id": 137,
		"trackingURL": "https://api-new.v2.vapor.cloud/v2/activity/channel/137"
	},
	"environmentID": 33,
	"release": {
		"id": 146,
		"replicas": 0,
		"createdAt": "2018-08-29T11:27:00Z",
		"activityID": 137,
		"planID": 1,
		"version": "v5",
		"updatedAt": "2018-08-29T11:27:00Z",
		"environmentID": 33,
		"type": "replicaDeploy"
	}
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Scale

**PATCH /v2/apps/replicas/SLUG/ENVIRONMENT/REPLICA/scale**

::: tip
You can set either quantity, plan or both depending on the scaling needs
:::

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url 'https://api-new.v2.vapor.cloud/v2/apps/replicas/test-app11/production/web/scale' \
  --header 'authorization: Bearer AccessToken'
  --data '{
    "quantity": 1,
    "plan": "tiny"
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
	"id": 33,
	"replicas": 0,
	"name": "web",
	"status": "",
	"activity": {
		"id": 137,
		"trackingURL": "https:\/\/api-new.v2.vapor.cloud\/v2\/activity\/channel\/137"
	},
	"environmentID": 33,
	"release": {
		"id": 146,
		"replicas": 0,
		"createdAt": "2018-08-29T11:27:00Z",
		"activityID": 137,
		"planID": 1,
		"version": "v5",
		"updatedAt": "2018-08-29T11:27:00Z",
		"environmentID": 33,
		"type": "replicaDeploy"
	}
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>
