# AccountListLeaderboardHistoryResponse

## Example Usage

```typescript
import { AccountListLeaderboardHistoryResponse } from "@steamsets/client-ts/models/operations";

let value: AccountListLeaderboardHistoryResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountListLeaderboardHistoryResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountListLeaderboardHistoryResponseBody.json",
    histories: [
      {
        date: new Date("2024-10-09T15:09:04.419Z"),
        leaderboard: "steam_sets",
        rank: 373332,
        score: 887444,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `v1AccountListLeaderboardHistoryResponseBody`                                                                                    | [components.V1AccountListLeaderboardHistoryResponseBody](../../models/components/v1accountlistleaderboardhistoryresponsebody.md) | :heavy_minus_sign:                                                                                                               | OK                                                                                                                               |