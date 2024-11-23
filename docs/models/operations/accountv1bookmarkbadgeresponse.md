# AccountV1BookmarkBadgeResponse

## Example Usage

```typescript
import { AccountV1BookmarkBadgeResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1BookmarkBadgeResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountBadgeBookmarkResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountBadgeBookmarkResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `v1AccountBadgeBookmarkResponseBody`                                                                           | [components.V1AccountBadgeBookmarkResponseBody](../../models/components/v1accountbadgebookmarkresponsebody.md) | :heavy_minus_sign:                                                                                             | OK                                                                                                             |