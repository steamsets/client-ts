# AccountV1LeaderboardPreviewResponse

## Example Usage

```typescript
import { AccountV1LeaderboardPreviewResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1LeaderboardPreviewResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountLeaderboardPreviewResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountLeaderboardPreviewResponseBody.json",
    currentRank: 123456,
    wouldBeRank: 123456,
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `v1AccountLeaderboardPreviewResponseBody`                                                                                | [components.V1AccountLeaderboardPreviewResponseBody](../../models/components/v1accountleaderboardpreviewresponsebody.md) | :heavy_minus_sign:                                                                                                       | OK                                                                                                                       |