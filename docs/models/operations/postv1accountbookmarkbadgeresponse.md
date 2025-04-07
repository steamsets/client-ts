# PostV1AccountBookmarkBadgeResponse

## Example Usage

```typescript
import { PostV1AccountBookmarkBadgeResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountBookmarkBadgeResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountBookmarkBadgeResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountBookmarkBadgeResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `v1AccountBookmarkBadgeResponseBody`                                                                           | [components.V1AccountBookmarkBadgeResponseBody](../../models/components/v1accountbookmarkbadgeresponsebody.md) | :heavy_minus_sign:                                                                                             | OK                                                                                                             |