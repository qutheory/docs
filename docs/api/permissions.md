---
prev: false
next: false
---
# Permissions

## Table of Contents

[[toc]]

**POST /admin/users/USER/permissions/organizations/ORGANIZATION**

### Example request

<tabs>
    <tab name="CURL">
<pre><code class="language-bash">curl --request POST \
  --url https://api-new.v2.vapor.cloud//admin/users/C4EF419D-78A1-4EEE-933F-2AD0819B963C/permissions/organizations/97E55E93-9803-4BCF-8BAA-A4168A5153D0 \
  --header 'authorization: Bearer AccessToken' \
  --header 'content-type: application/json' \
  --data '[
	"projectCreate",
	"projectAdmin",
	"permissionUpdate",
	"organizationDelete",
	"organizationUpdate",
	"organizationRead"
]'
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
	"permissionUpdate",
	"organizationRead",
	"organizationUpdate",
	"projectAdmin",
	"organizationDelete",
	"projectCreate"
]
</code></pre>
    </tab>
    <tab name="Vapor">
<pre><code class="language-swift">// Vapor client not done</code></pre>      
    </tab>
</tabs>
