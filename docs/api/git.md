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

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request POST \
  --url https://api-new.v2.vapor.cloud/v2/git/ssh \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '{
    "sshKey": "ssh public key"
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
    "userID": "ACBCCDC5-BBF2-414A-BB0E-5C27C4B4ED04",
    "sshKey": "ssh public key",
    "updatedAt": "2018-07-30T10:48:27Z",
    "createdAt": "2018-07-30T10:48:27Z",
    "id": 3
}
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Delete SSH Key

**DELETE /v2/git/ssh/ID**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request DELETE \
  --url https://api-new.v2.vapor.cloud/v2/git/ssh/2 \
  --header 'authorization: Bearer AccessToken'
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>
