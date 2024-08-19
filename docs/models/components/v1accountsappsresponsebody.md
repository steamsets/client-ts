# V1AccountsAppsResponseBody

## Example Usage

```typescript
import { V1AccountsAppsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountsAppsResponseBody = {
    dollarSchema: "http://localhost:8080/schemas/V1AccountsAppsResponseBody.json",
    apps: [
        {
            id: 730,
            image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
            name: "Counter-Strike: Global Offensive",
            playtime: 123456,
            price: 1200,
            shortName: "csgo",
        },
    ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `dollarSchema`                                                | *string*                                                      | :heavy_minus_sign:                                            | A URL to the JSON Schema for this object.                     | http://localhost:8080/schemas/V1AccountsAppsResponseBody.json |
| `apps`                                                        | [components.V1App](../../models/components/v1app.md)[]        | :heavy_check_mark:                                            | N/A                                                           |                                                               |