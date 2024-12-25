# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
  badges: [
    {
      accountInfo: {
        completionTime: new Date("2023-01-01T00:00:00Z"),
        level: 123456,
        xp: 123456,
      },
      appId: 359978,
      appImage: "<value>",
      appName: "<value>",
      badgeImage: "<value>",
      baseLevel: 729991,
      baseXp: 171629,
      firstCompletion: new Date("2023-07-26T01:20:48.803Z"),
      highestLevel: 54338,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2022-08-08T04:42:30.927Z"),
      name: "<value>",
      price: 18521,
      publicId: "<id>",
      scarcity: 793698,
      steamId: 223924,
    },
  ],
  pages: 345352,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/V1BadgesResponseBody.json      |
| `badges`                                                         | [components.V1AppBadge](../../models/components/v1appbadge.md)[] | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `pages`                                                          | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |