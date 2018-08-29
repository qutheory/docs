---
prev: false
next: false
---
# Git

## Table of Contents

[[toc]]

## List keys

**GET /v2/git/keys**

::: tip
Not done yet
:::

## Create Key

**POST /v2/git/keys**

::: tip
This endpoint can take a few seconds to finish
:::

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request POST \
  --url https://api-new.v2.vapor.cloud/v2/git/keys \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
	"key": "my-key-content"
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
	"id": 24,
	"key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDBActycQilNhONlCcEJjk2V4fF2HWA9kWLdzTYLnk20kWPvGjiG5GY+zzgdN1KHjLeO1dvHxXiTuskUdPQdrFTg694BRyk5V7p3NeMIwGSMNzq10R1x6\/3HtfnK\/28ahgpaHfG0304SW2gVwiA1MhQc505Ec454dH3VtBWTaI88hcosNbPSfQ3LNoOjbjb150n7N1Nua4WjRUA0URPa7nWSx3ZVb6PmUjSfKb\/J35qFRiiWKow56nQobDY5BlKa7NpFoKSrEdaqVhB8JIbX\/TA3ejRAQNsOb7KHjLoQnHEFnnDZkAJ25y3C8Wyf+8IQBnDCASJ+Sg9HK4mypz1q+fV rsa 2048",
	"userID": 1,
	"updatedAt": "2018-08-19T01:33:50Z",
	"createdAt": "2018-08-19T01:33:50Z"
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Delete Key

**DELETE /v2/git/keys?part=part-of-key-to-delete**

::: tip
This endpoint can take a few seconds to finish
:::

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request DELETE \
  --url https://api-new.v2.vapor.cloud/v2/git/keys?part=EAAAADAQABAAABAQDBActycQilNhONlC \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

### Example response

<tabs>
    <tab name="CURL">
<pre><code class="language-json">
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>
