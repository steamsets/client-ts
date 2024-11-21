# V1AccountLeaderboardHistoryResponseBody

## Example Usage

```typescript
import { V1AccountLeaderboardHistoryResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountLeaderboardHistoryResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountLeaderboardHistoryResponseBody.json",
  histories: [
    {
      date: new Date("2022-06-28T02:12:50.953Z"),
      leaderboard: "badges",
      rank: 123820,
      score: 848009,
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | A URL to the JSON Schema for this object.                                                      | https://api.steamsets.com/schemas/V1AccountLeaderboardHistoryResponseBody.json                 |
| `histories`                                                                                    | [components.AccountLeaderboardHistory](../../models/components/accountleaderboardhistory.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |