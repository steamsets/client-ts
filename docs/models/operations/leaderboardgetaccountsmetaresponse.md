# LeaderboardGetAccountsMetaResponse

## Example Usage

```typescript
import { LeaderboardGetAccountsMetaResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardGetAccountsMetaResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardGetAccountsMetaResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardGetAccountsMetaResponseBody.json",
    description: "front archaeology anxiously eek wash hourly dreary aw",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `v1LeaderboardGetAccountsMetaResponseBody`                                                                                 | [components.V1LeaderboardGetAccountsMetaResponseBody](../../models/components/v1leaderboardgetaccountsmetaresponsebody.md) | :heavy_minus_sign:                                                                                                         | OK                                                                                                                         |