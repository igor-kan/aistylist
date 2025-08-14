# Development container for Node.js/Next.js projects
FROM node:20-alpine

# Install system dependencies
RUN apk add --no-cache \
    git \
    openssh-client \
    bash \
    curl \
    wget \
    nano \
    vim \
    python3 \
    make \
    g++ \
    libc6-compat

# Install global npm packages
RUN npm install -g \
    @next/codemod \
    typescript \
    ts-node \
    nodemon \
    npm-check-updates \
    serve

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S node -u 1001 -G nodejs

# Set up working directory
WORKDIR /workspace
RUN chown -R node:nodejs /workspace

# Switch to non-root user
USER node

# Configure Git (will be overridden by user's git config)
RUN git config --global init.defaultBranch main
RUN git config --global pull.rebase false

# Set default shell
SHELL ["/bin/bash", "-c"]

# Expose development ports
EXPOSE 3000 3001

# Keep container running
CMD ["sleep", "infinity"]