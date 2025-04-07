# PostV1LeaderboardGetAccountsMetaResponse

## Example Usage

```typescript
import { PostV1LeaderboardGetAccountsMetaResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1LeaderboardGetAccountsMetaResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardGetAccountsMetaResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardGetAccountsMetaResponseBody.json",
    description: "scent chunder wombat doubtfully",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `v1LeaderboardGetAccountsMetaResponseBody`                                                                                 | [components.V1LeaderboardGetAccountsMetaResponseBody](../../models/components/v1leaderboardgetaccountsmetaresponsebody.md) | :heavy_minus_sign:                                                                                                         | OK                                                                                                                         |