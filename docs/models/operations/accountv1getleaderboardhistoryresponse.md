# AccountV1GetLeaderboardHistoryResponse

## Example Usage

```typescript
import { AccountV1GetLeaderboardHistoryResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetLeaderboardHistoryResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountLeaderboardHistoryResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountLeaderboardHistoryResponseBody.json",
    histories: [
      {
        date: new Date("2024-05-26T01:50:18.849Z"),
        leaderboard: "bans",
        rank: 158969,
        score: 110375,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `v1AccountLeaderboardHistoryResponseBody`                                                                                | [components.V1AccountLeaderboardHistoryResponseBody](../../models/components/v1accountleaderboardhistoryresponsebody.md) | :heavy_minus_sign:                                                                                                       | OK                                                                                                                       |