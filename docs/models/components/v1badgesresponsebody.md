# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
  badges: [
    {
      appId: 93940,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      completedAt: new Date("2023-09-24T05:41:47.829Z"),
      isEvent: false,
      isFoil: false,
      isSale: false,
      level: 929297,
      name: "<value>",
      price: 318569,
      publicId: "<id>",
      scarcity: 667411,
      steamId: 131797,
      xp: 716327,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/V1BadgesResponseBody.json                    |
| `badges`                                                                       | [components.V1AccountAppBadge](../../models/components/v1accountappbadge.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |