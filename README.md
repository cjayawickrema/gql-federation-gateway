# GraphQL Federation Gateway

## Overview
This gateway orchestrates following Microservices.
- Product Service (remote)
- Review Service (remote)
- Book Catalog Service (local)

## Instructions

For DataDog metrics make sure DD agent is running
```bash
docker run -d --name dd-agent -p 8126:8126 -v /var/run/docker.sock:/var/run/docker.sock:ro -v /proc/:/host/proc/:ro -v /sys/fs/cgroup/:/host/sys/fs/cgroup:ro -e DD_API_KEY=<key> gcr.io/datadoghq/agent:7
```

### 1. Get Apollo Rover CLI installed (optional)
### 2. Make sure sub graphs are up and running
### 3. Build super graph
```bash
rover subgraph introspect http://localhost:4001 > subgraph-1.graphql
rover supergraph compose --config ./supergraph-config.yaml > supergraph.graphql
```
### 4. Start server
```
node index.js
```
