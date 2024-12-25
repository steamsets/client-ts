# AccountV1GetAppsResponse

## Example Usage

```typescript
import { AccountV1GetAppsResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetAppsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountsAppsResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountsAppsResponseBody.json",
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
    pages: 780529,
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `v1AccountsAppsResponseBody`                                                                   | [components.V1AccountsAppsResponseBody](../../models/components/v1accountsappsresponsebody.md) | :heavy_minus_sign:                                                                             | OK                                                                                             |