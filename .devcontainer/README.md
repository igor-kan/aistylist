# Development Container for aistylist

This directory contains the VS Code dev container configuration for consistent development environments.

## What's Included

### Tools & Runtime
- Node.js 20 LTS
- Git and GitHub CLI
- Docker-in-Docker support
- Essential development tools

### VS Code Extensions
- Language-specific extensions (TypeScript, ESLint, Prettier)
- Git integration (GitLens)
- GitHub Copilot
- Docker support
- Code spell checker

### Development Features
- Format on save
- Auto import organization
- Integrated linting and type checking
- Debug configurations
- Task automation

## Usage

1. **Open in Container**: When opening this project in VS Code, you'll be prompted to reopen in container
2. **Manual Setup**: Use Command Palette → "Dev Containers: Reopen in Container"
3. **Rebuild**: Use Command Palette → "Dev Containers: Rebuild Container" to update

## Ports

The following ports are automatically forwarded:
- 3000: Development server
- 3001: Additional services

## Customization

You can customize this dev container by modifying:
- `devcontainer.json`: Main configuration
- `Dockerfile`: Container image customization  
- `docker-compose.yml`: Multi-service setup (if present)

## Troubleshooting

### Container Build Issues
- Ensure Docker Desktop is running
- Try "Dev Containers: Rebuild Container"
- Check Docker resources (memory/disk space)

### Extension Issues
- Extensions are automatically installed on container creation
- Manually reload window if extensions don't activate
- Check VS Code settings sync if preferences aren't applied

### Port Access Issues
- Ports are automatically forwarded
- Check VS Code's "Ports" tab for status
- Ensure no local services conflict on same ports
