# PostV1AccountListLeaderboardHistoryResponse

## Example Usage

```typescript
import { PostV1AccountListLeaderboardHistoryResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountListLeaderboardHistoryResponse = {
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
        date: new Date("2023-12-07T16:56:23.141Z"),
        leaderboard: "foil_badges",
        rank: 451356,
        score: 768454,
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