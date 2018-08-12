---
prev: false
next: false
---
# Permissions

You can invite and give users permissions to your organization. Users with access to your organization will have access to features
depending on their permission group.

Users invited to your organization will automatically have access to all projects under your organization.

## Permission groups

The following groups can be applied to users.

| group | permissions |
| ----- | ------ |
| admin | Read, Write, Operate, Manage, Billing |
| developer | Read, Write, Operate |
| billing | Billing |

### Manage access

Manage access should be seen as **Owner** this is the only role that can do administrative tasks like:

- Delete
- Invite users
- Manage permissions etc.

This role can also lock an environment, locking other users from manage this specific environment, for example disallow developers from
managing Production environment.

## Developer access

This user can do all actions on tools linked to the organizations, unless a specific environment is locked.

## Lock environment

Admins can lock a specific environment, and disallow developers from accessing it. A case for this can be
an admin can lock Production environment, so only admins can deploy to this environment.

This fits very well into the pipeline system, so only approved persons are able to promote an application to production, making sure
everything is tested and works before promoting to production.
