# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
  badges: [
    {
      appId: 716327,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      completedAt: new Date("2022-11-14T04:32:16.328Z"),
      isFoil: false,
      level: 183191,
      name: "<value>",
      price: 586513,
      publicId: "<id>",
      scarcity: 20107,
      steamId: 828940,
      xp: 4695,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/V1BadgesResponseBody.json                    |
| `badges`                                                                       | [components.V1AccountAppBadge](../../models/components/v1accountappbadge.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |