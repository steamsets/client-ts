# LeaderboardV1GetAccountLeaderboardMetaResponse

## Example Usage

```typescript
import { LeaderboardV1GetAccountLeaderboardMetaResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardV1GetAccountLeaderboardMetaResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardAccountMetaResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardAccountMetaResponseBody.json",
    description: "whether seriously huzzah immediately geez justly pfft oh",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                 | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `v1LeaderboardAccountMetaResponseBody`                                                                             | [components.V1LeaderboardAccountMetaResponseBody](../../models/components/v1leaderboardaccountmetaresponsebody.md) | :heavy_minus_sign:                                                                                                 | OK                                                                                                                 |