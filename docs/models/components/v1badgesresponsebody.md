# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
  badges: [
    {
      appId: 870013,
      appImage: "<value>",
      appName: "<value>",
      appShortName: "<value>",
      badgeImage: "<value>",
      completedAt: new Date("2024-08-11T14:46:30.188Z"),
      isFoil: false,
      level: 978619,
      name: "<value>",
      price: 473608,
      publicId: "<value>",
      scarcity: 799159,
      steamId: 800911,
      xp: 461479,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/V1BadgesResponseBody.json                    |
| `badges`                                                                       | [components.V1AccountAppBadge](../../models/components/v1accountappbadge.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |