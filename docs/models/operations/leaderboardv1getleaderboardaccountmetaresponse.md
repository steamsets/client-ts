# LeaderboardV1GetLeaderboardAccountMetaResponse

## Example Usage

```typescript
import { LeaderboardV1GetLeaderboardAccountMetaResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardV1GetLeaderboardAccountMetaResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardAccountMetaResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardAccountMetaResponseBody.json",
    description: "even as advanced afterwards coliseum overcooked what unless",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `v1LeaderboardAccountMetaResponseBody`                                                                             | [components.V1LeaderboardAccountMetaResponseBody](../../models/components/v1leaderboardaccountmetaresponsebody.md) | :heavy_minus_sign:                                                                                                 | OK                                                                                                                 |