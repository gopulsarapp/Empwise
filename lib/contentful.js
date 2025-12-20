import { createClient } from "contentful";

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error("Missing CONTENTFUL_SPACE_ID");
}

if (!process.env.CONTENTFUL_DELIVERY_TOKEN) {
  throw new Error("Missing CONTENTFUL_DELIVERY_TOKEN");
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

export default client;
