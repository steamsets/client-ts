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
      latestDate: new Date("2024-02-20T05:01:23.268Z"),
      newRank: 513027,
      newScore: 791467,
      oldRank: 250335,
      oldScore: 303858,
      rankDelta: 316519,
      scoreDelta: 355391,
    },
  ],
  total: 884464,
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     | Example                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                                                                  | *string*                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                              | A URL to the JSON Schema for this object.                                                                                                                       | https://api.steamsets.com/schemas/LeaderboardGetChangesResponseBody.json                                                                                        |
| `changes`                                                                                                                                                       | [components.LeaderboardChange](../../models/components/leaderboardchange.md)[]                                                                                  | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |                                                                                                                                                                 |
| `total`                                                                                                                                                         | *number*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Total accounts in this slice, ignoring limit/offset — page until limit+offset reaches it. Reflects the topFilter, since each rank bucket is counted separately. |                                                                                                                                                                 |