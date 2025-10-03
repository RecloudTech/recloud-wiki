# Multi-stage Dockerfile for Docusaurus wiki
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm ci

# Copy the rest of the source and build the site
COPY . .
RUN npm run build

# Runtime stage
FROM node:20-alpine AS runner

WORKDIR /app

# Only copy the pieces we need to serve the built site
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built static site and necessary files for docusaurus serve
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules /app/node_modules
# Docusaurus serve needs access to the site config (and its sidebar file referenced from config)
COPY --from=builder /app/docusaurus.config.js ./docusaurus.config.js
COPY --from=builder /app/sidebars.js ./sidebars.js
# Also copy custom plugins required by docusaurus.config.js (e.g., Tailwind PostCSS plugin)
COPY --from=builder /app/plugins ./plugins
# Optionally copy Tailwind config if needed at runtime
COPY --from=builder /app/tailwind.config.cjs ./tailwind.config.cjs

# Docusaurus serve listens on provided port
EXPOSE 3031

# Use docusaurus built-in static server
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "3031"]
