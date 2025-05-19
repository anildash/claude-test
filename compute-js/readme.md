# Fastly Compute Deployment

This directory contains the configuration and code needed to deploy the claude-test app to Fastly's Compute platform.

## Local Development

To develop and test locally:

```bash
# Install dependencies
npm install

# Publish content to the local dev environment
npm run dev:publish

# Start the local development server
npm run dev:start
```

This will serve your app at http://127.0.0.1:7676, powered by a simulated KV Store.

## Deployment to Fastly

To deploy to Fastly:

```bash
# Make sure you have the Fastly CLI installed
# https://developer.fastly.com/learning/tools/cli

# Set your Fastly API token
export FASTLY_API_TOKEN=your_api_token

# Deploy the Compute application
npm run fastly:deploy

# Upload your static files to Fastly's KV Store
npm run fastly:publish
```

## Configuration

The application uses the following configuration:

- `KV_STORE_NAME`: The name of the KV Store containing static site content (default: "site_content")
- `DEFAULT_COLLECTION_NAME`: The default collection to serve (default: "live")

You can modify these values in `src/index.js` if needed.
