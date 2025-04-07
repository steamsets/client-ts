# V1AccountListAppsResponseBody

## Example Usage

```typescript
import { V1AccountListAppsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListAppsResponseBody = {
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
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `dollarSchema`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | A URL to the JSON Schema for this object.                            | https://api.steamsets.com/schemas/V1AccountListAppsResponseBody.json |
| `apps`                                                               | [components.V1AccountApp](../../models/components/v1accountapp.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `pages`                                                              | *number*                                                             | :heavy_check_mark:                                                   | The number of pages                                                  | 1                                                                    |
| `totalHits`                                                          | *number*                                                             | :heavy_check_mark:                                                   | The total number of hits for all pages                               | 1                                                                    |