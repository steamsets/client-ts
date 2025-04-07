# PostV1AccountListAppsResponse

## Example Usage

```typescript
import { PostV1AccountListAppsResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountListAppsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountListAppsResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountListAppsResponseBody.json",
    apps: [
      {
        id: 730,
        image:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
        name: "Counter-Strike: Global Offensive",
        playtime: 123456,
        price: 1200,
      },
    ],
    pages: 1,
    totalHits: 1,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `v1AccountListAppsResponseBody`                                                                      | [components.V1AccountListAppsResponseBody](../../models/components/v1accountlistappsresponsebody.md) | :heavy_minus_sign:                                                                                   | OK                                                                                                   |