# Persistent storage

Vapor Cloud provide persistent storage for Database and Redis. Our persistent storage is build to scale.
The system is based on a popular open source solution called CephFS.

CephFS is build to provide large self-healing clustered storage solutions. Because of this, when you store data
on Vapor Cloud, the data is split into smaller bits, and stored out in the Cluster, which makes it fast
to assemble and get the data.

The system will automatically make 3 copies of each bit, and store these on 3 different servers, in 3 different datacenters, which makes the system very fault tolerant.

## Backup

The system is automatically build for logical backups, depending on the plan, the system will in interval take snapshots of the virtual storage volumes. The backups are stored on a filestorage with the Cloud provider selected.

| Provider        | Storage solution |
| --------------- |:----------------:|
| AWS             | S3               |
| Digital Ocean   | Spaces           |
