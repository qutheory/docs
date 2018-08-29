---
prev: false
next: false
---
# Applications

## Table of Contents

[[toc]]

## List Applications

**GET /v2/apps**

### Parameters

| Parameter | Required | Description | Type |
| --------- | -------- | ----------- | ---- |
| organizationID | No | Only view applications for specific organization id | INT |
| organizationSlug | No | Only view applications for specific organization slug | String |

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url 'https://api-new.v2.vapor.cloud/v2/apps/applications?organizationID=8' \
  --header 'authorization: Bearer AccessToken'
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

### Example response

<tabs>
    <tab name="CURL">
<pre><code class="language-json">[
  {
		"id": 42,
		"createdAt": "2018-08-29T10:55:05Z",
		"organizationID": 8,
		"name": "test-app10",
		"updatedAt": "2018-08-29T10:55:05Z",
		"namespace": "ns-lake-bold-88631",
		"slug": "test-app10",
		"gitURL": "git@git.code.vapor.cloud:test-app10.git"
	},
	{
		"id": 43,
		"createdAt": "2018-08-29T11:08:02Z",
		"organizationID": 8,
		"name": "test-app11",
		"updatedAt": "2018-08-29T11:08:02Z",
		"namespace": "ns-fog-fragrant-37262",
		"slug": "test-app11",
		"gitURL": "git@git.code.vapor.cloud:test-app11.git"
	}
]
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Search Applications

**GET /v2/apps/search/applications?term=TERM**

### Parameters

| Parameter | Required | Description | Type |
| --------- | -------- | ----------- | ---- |
| term | Yes | Search term | String |

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url 'https://api-new.v2.vapor.cloud/v2/apps/applications/search?term=test' \
  --header 'authorization: Bearer AccessToken'
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

### Example response

<tabs>
    <tab name="CURL">
<pre><code class="language-json">[
  {
		"id": 42,
		"createdAt": "2018-08-29T10:55:05Z",
		"organizationID": 8,
		"name": "test-app10",
		"updatedAt": "2018-08-29T10:55:05Z",
		"namespace": "ns-lake-bold-88631",
		"slug": "test-app10",
		"gitURL": "git@git.code.vapor.cloud:test-app10.git"
	},
	{
		"id": 43,
		"createdAt": "2018-08-29T11:08:02Z",
		"organizationID": 8,
		"name": "test-app11",
		"updatedAt": "2018-08-29T11:08:02Z",
		"namespace": "ns-fog-fragrant-37262",
		"slug": "test-app11",
		"gitURL": "git@git.code.vapor.cloud:test-app11.git"
	}
]
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Create application

**POST /v2/apps/applications**

::: tip INFO
Be aware, right now it can take 5-10 seconds after an application is created until the Git repository is available
:::

### Body

| Name | Required | Default value | Description |
| ---- | -------- | ------------- | ----------- |
| organization | Yes | - | Organization slug that should own the application |
| slug | No | Random generated name | Application slug SLUG.vapor.cloud, if not set it will default to a random generated name |
| name | No | Slug | A user friendly name, defaults to the slug if not set |
| environment.name | Yes | - | Name of the first environment that should be created |
| region | Yes | - | Name of the region to create the application in |
| plan | Yes | - | Which plan the application should use

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request POST \
  --url https://api-new.v2.vapor.cloud/v2/apps/applications \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"organization": "my-org",
	"slug": "my-application",
	"environment": {
		"name": "production"
	},
  "region": "do-us",
  "plan": "dev-free"
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
	"application": {
		"id": 43,
		"createdAt": "2018-08-29T11:08:02Z",
		"organizationID": 8,
		"name": "test-app11",
		"updatedAt": "2018-08-29T11:08:02Z",
		"namespace": "ns-fog-fragrant-37262",
		"slug": "test-app11",
		"gitURL": "git@git.code.vapor.cloud:test-app11.git"
	},
	"environments": [
		{
			"id": 33,
			"createdAt": "2018-08-29T11:08:02Z",
			"name": "production",
			"updatedAt": "2018-08-29T11:08:02Z",
			"regionID": 1,
			"defaultBranch": "master",
			"applicationID": 43
		}
	]
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>
