# V1LeaderboardListBadgesResponseBody

## Example Usage

```typescript
import { V1LeaderboardListBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardListBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1LeaderboardListBadgesResponseBody.json",
  badges: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dollarSchema`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | A URL to the JSON Schema for this object.                                        | https://api.steamsets.com/schemas/V1LeaderboardListBadgesResponseBody.json       |
| `badges`                                                                         | [components.V1LeaderboardBadge](../../models/components/v1leaderboardbadge.md)[] | :heavy_check_mark:                                                               | The badges                                                                       |                                                                                  |