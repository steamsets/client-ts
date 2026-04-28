# LeaderboardGetChangesResponseBody

## Example Usage

```typescript
import { LeaderboardGetChangesResponseBody } from "@steamsets/client-ts/models/components";

let value: LeaderboardGetChangesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/LeaderboardGetChangesResponseBody.json",
  changes: [
    {
      account: null,
      accountId: 45811,
      latestDate: new Date("2025-07-16T06:40:07.994Z"),
      newRank: 791467,
      newScore: 250335,
      oldRank: 303858,
      oldScore: 316519,
      rankDelta: 355391,
      scoreDelta: 884464,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/LeaderboardGetChangesResponseBody.json       |
| `changes`                                                                      | [components.LeaderboardChange](../../models/components/leaderboardchange.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |