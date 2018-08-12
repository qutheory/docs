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

### Admin group

Admin group should be seen as **owner** of the organization, and gets access to everything for example

- Delete
- Invite users
- Manage permissions etc.
- Locking

::: tip Info
We do recommend having as few admins as possible in an organization, to keep the overall account secure.
:::

### Developer group

Users in the developer group can do everything except manage the organization and billing

If an application or environment are **Locked** these can't be accessed by developers

### Billing group

This group can be used for people to only access billing information, to manage credit cards, see transactions, and download
invoices. (These information can also be accessed by the admin group)

This is a good way to give a finance department access to billing information, without giving them access to applications

## Locking

Locking can be done by the **Admin group**

### Lock environment

Admins can lock a specific environment, and disallow developers from accessing it. A case for this can be
an admin can lock Production environment, so only admins can deploy to this environment.

And example use case is to use it with the Build pipeline system, making it possible to lock production environment
so only Admins can promote a release to production.

### Lock application

Locking an application makes it possible to remove access to people in developer group.
so when an application isn't under development, it's possible to lock it so all data and code are safe from change.
