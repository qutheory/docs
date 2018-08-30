---
prev: false
next: false
---
# Replicas

## Table of Contents

[[toc]]

## Pod status

**GET /v2/apps/replicas/SLUG/ENVIRONMENT/REPLICA/status**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url 'https://api-new.v2.vapor.cloud/v2/apps/replicas/test-app11/production/web/status' \
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
		"token": "5d668f9466-t82rs",
		"restartCount": 0,
		"status": "Running",
		"node": "do-fra-web-free1"
	}
]
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>

## Get logs

**GET /v2/apps/replicas/SLUG/ENVIRONMENT/REPLICA/POD_TOKEN/logs**

::: tip
You get POD_TOKEN from the status endpoint above
:::

### Parameters

| Parameter | Required | Default | Description |
| lines | No | 200 | Amount of lines that should be printed |
| timestamps | No | false | If each line should contain the timestamp of when it was written. |

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request GET \
  --url 'https://api-new.v2.vapor.cloud/v2/apps/replicas/test-app11/production/web/5d668f9466-t82rs/logs?lines=50' \
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
<pre><code class="language-json">[0;31m[ ERROR ][0m data received after completed connection: close message [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:32)[0m
[ DEBUG ] Conform `HTTPParserError` to `Debuggable` for better debug info. [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:34)[0m
[0;31m[ ERROR ][0m data received after completed connection: close message [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:32)[0m
[ DEBUG ] Conform `HTTPParserError` to `Debuggable` for better debug info. [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:34)[0m
[0;31m[ ERROR ][0m data received after completed connection: close message [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:32)[0m
[ DEBUG ] Conform `HTTPParserError` to `Debuggable` for better debug info. [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:34)[0m
[0;31m[ ERROR ][0m data received after completed connection: close message [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:32)[0m
[ DEBUG ] Conform `HTTPParserError` to `Debuggable` for better debug info. [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:34)[0m
[0;31m[ ERROR ][0m data received after completed connection: close message [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:32)[0m
[ DEBUG ] Conform `HTTPParserError` to `Debuggable` for better debug info. [0;36m(/app/.build/checkouts/vapor.git-7601042921176710432/Sources/Vapor/Logging/Logger+LogError.swift:34)[0m
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>
