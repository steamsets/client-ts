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
      appId: 64147,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      baseLevel: 692472,
      baseXp: 566602,
      firstCompletion: new Date("2022-10-18T20:48:18.611Z"),
      highestLevel: 523248,
      isEvent: false,
      isFoil: false,
      isSale: false,
      lastCompletion: new Date("2022-04-13T23:00:40.302Z"),
      name: "<value>",
      price: 575947,
      publicId: "<id>",
      scarcity: 929297,
      steamId: 318569,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/V1BadgesResponseBody.json      |
| `badges`                                                         | [components.V1AppBadge](../../models/components/v1appbadge.md)[] | :heavy_check_mark:                                               | N/A                                                              |                                                                  |