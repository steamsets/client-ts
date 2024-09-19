# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
  badges: [
    {
      appId: 720633,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      completedAt: new Date("2023-12-03T08:28:56.752Z"),
      isFoil: false,
      level: 582020,
      name: "<value>",
      price: 143353,
      publicId: "<value>",
      scarcity: 537373,
      steamId: 944669,
      xp: 758616,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/V1BadgesResponseBody.json                    |
| `badges`                                                                       | [components.V1AccountAppBadge](../../models/components/v1accountappbadge.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |