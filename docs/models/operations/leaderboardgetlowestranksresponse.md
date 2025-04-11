# LeaderboardGetLowestRanksResponse

## Example Usage

```typescript
import { LeaderboardGetLowestRanksResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardGetLowestRanksResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `object`                                                           | Record<string, *number*>                                           | :heavy_minus_sign:                                                 | OK                                                                 |