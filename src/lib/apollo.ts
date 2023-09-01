import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.URI_APOLLO,
  cache: new InMemoryCache({}),
  headers: { "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_PUBLIC_API_KEY },
});
