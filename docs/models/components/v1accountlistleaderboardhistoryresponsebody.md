# V1AccountListLeaderboardHistoryResponseBody

## Example Usage

```typescript
import { V1AccountListLeaderboardHistoryResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListLeaderboardHistoryResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListLeaderboardHistoryResponseBody.json",
  histories: [
    {
      date: new Date("2024-11-02T13:43:28.098Z"),
      leaderboard: "awards_given",
      rank: 348243,
      score: 445925,
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | A URL to the JSON Schema for this object.                                                      | https://api.steamsets.com/schemas/V1AccountListLeaderboardHistoryResponseBody.json             |
| `histories`                                                                                    | [components.AccountLeaderboardHistory](../../models/components/accountleaderboardhistory.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |