# PostV1LeaderboardGetGroupsMetaResponse

## Example Usage

```typescript
import { PostV1LeaderboardGetGroupsMetaResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1LeaderboardGetGroupsMetaResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LeaderboardGetGroupsMetaResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1LeaderboardGetGroupsMetaResponseBody.json",
    description: "around gee about",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `v1LeaderboardGetGroupsMetaResponseBody`                                                                               | [components.V1LeaderboardGetGroupsMetaResponseBody](../../models/components/v1leaderboardgetgroupsmetaresponsebody.md) | :heavy_minus_sign:                                                                                                     | OK                                                                                                                     |