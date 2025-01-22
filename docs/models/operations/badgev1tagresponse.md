# BadgeV1TagResponse

## Example Usage

```typescript
import { BadgeV1TagResponse } from "@steamsets/client-ts/models/operations";

let value: BadgeV1TagResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgeTagResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1BadgeTagResponseBody.json",
    colorTags: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
    designTags: [
      {
        id: "<id>",
        name: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `httpMeta`                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `v1BadgeTagResponseBody`                                                               | [components.V1BadgeTagResponseBody](../../models/components/v1badgetagresponsebody.md) | :heavy_minus_sign:                                                                     | OK                                                                                     |