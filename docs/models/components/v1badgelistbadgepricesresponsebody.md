# V1BadgeListBadgePricesResponseBody

## Example Usage

```typescript
import { V1BadgeListBadgePricesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgeListBadgePricesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1BadgeListBadgePricesResponseBody.json",
  apps: {
    "key": {
      bgAvg: 802447,
      boosterPrice: 686707,
      emoteAvg: 73136,
      image: "https://picsum.photos/seed/IAyzeEJ9/2402/1030",
      name: "<value>",
    },
  },
  setCounts: {
    duplicate: {
      foil: 157710,
      normal: 538702,
      total: 573471,
    },
    total: {
      foil: 412969,
      normal: 862978,
      total: 336959,
    },
    unique: {
      foil: 433942,
      normal: 587953,
      total: 455747,
    },
  },
  sets: [],
  total: 915638,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/V1BadgeListBadgePricesResponseBody.json      |
| `apps`                                                                         | Record<string, [components.V1BadgeApp](../../models/components/v1badgeapp.md)> | :heavy_check_mark:                                                             | App information indexed by app ID                                              |                                                                                |
| `setCounts`                                                                    | [components.V1BadgeSetCounts](../../models/components/v1badgesetcounts.md)     | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |
| `sets`                                                                         | [components.V1BadgeSet](../../models/components/v1badgeset.md)[]               | :heavy_check_mark:                                                             | Badge sets with pricing information                                            |                                                                                |
| `total`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | Total number of badge sets                                                     |                                                                                |