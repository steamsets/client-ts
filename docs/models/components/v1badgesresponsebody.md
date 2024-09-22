# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
  badges: [
    {
      appId: 244425,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      completedAt: new Date("2022-06-24T05:32:09.341Z"),
      isFoil: false,
      level: 110375,
      name: "<value>",
      price: 656330,
      publicId: "<value>",
      scarcity: 138183,
      steamId: 196582,
      xp: 368725,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/V1BadgesResponseBody.json                    |
| `badges`                                                                       | [components.V1AccountAppBadge](../../models/components/v1accountappbadge.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |