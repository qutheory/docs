---
prev: false
next: false
---
# Organization

## Table of Contents

[[toc]]

## Index

::: tip Todo
Not working atm.
:::

## View

**POST /v2/auth/organizations/SLUG**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url https://api-new.v2.vapor.cloud/v2/auth/organizations/my-org \
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
	"id": 2,
	"slug": "my-org",
	"updatedAt": "2018-08-12T14:31:18Z",
	"name": "My org",
	"createdAt": "2018-08-12T14:31:18Z"
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Create

**POST /v2/auth/organizations**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request POST \
  --url https://api-new.v2.vapor.cloud/v2/auth/organizations \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"name": "My org"
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
	"id": 21,
	"slug": "my-org",
	"updatedAt": "2018-08-14T01:55:07Z",
	"name": "My org",
	"createdAt": "2018-08-14T01:55:07Z"
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
