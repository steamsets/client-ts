# V1ActivityRankChange

## Example Usage

```typescript
import { V1ActivityRankChange } from "@steamsets/client-ts/models/components";

let value: V1ActivityRankChange = {
  bucket: "<value>",
  current: 468562,
  leaderboard: "<value>",
  location: {
    countryCode: "DE",
    countryName: "Germany",
    region: "Europe",
    type: "<value>",
  },
  previous: 641724,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `bucket`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | top_10 \| top_100 \| top_1000                                                  |
| `current`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | Rank after the change                                                          |
| `leaderboard`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | Leaderboard the rank was reached on                                            |
| `location`                                                                     | [components.V1ActivityLocation](../../models/components/v1activitylocation.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | *number*                                                                       | :heavy_check_mark:                                                             | Rank before the change (0 if previously unranked)                              |