# LeaderboardV1GetGroupLeaderboardMetaResponse

## Example Usage

```typescript
import { LeaderboardV1GetGroupLeaderboardMetaResponse } from "@steamsets/client-ts/models/operations";

let value: LeaderboardV1GetGroupLeaderboardMetaResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardGroupMetaResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardGroupMetaResponseBody.json",
    description: "trustworthy underplay hippodrome",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `v1LeaderboardGroupMetaResponseBody`                                                                           | [components.V1LeaderboardGroupMetaResponseBody](../../models/components/v1leaderboardgroupmetaresponsebody.md) | :heavy_minus_sign:                                                                                             | OK                                                                                                             |