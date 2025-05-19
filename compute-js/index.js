/// <reference types="@fastly/js-compute" />

import { getContent, getServerConfig } from "@fastly/compute-js-static-publish/server";

// The name of the KV Store containing our static site content
const KV_STORE_NAME = "site_content";

// The default collection we want to serve
const DEFAULT_COLLECTION_NAME = "live";

// Entry point for your application
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const request = event.request;
  const url = new URL(request.url);
  
  // Get the server configuration from the KV Store
  const serverConfig = await getServerConfig(
    KV_STORE_NAME,
    DEFAULT_COLLECTION_NAME
  );

  if (!serverConfig) {
    return new Response("No content has been published yet.", {
      status: 404,
    });
  }

  // Get the requested content
  const result = await getContent(
    request,
    KV_STORE_NAME,
    DEFAULT_COLLECTION_NAME
  );

  if (result.content) {
    // Content was found; return it
    return result.response;
  }

  // Content was not found
  return new Response("Not found", { status: 404 });
}
