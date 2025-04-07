# BadgeSuggestSearchResponse

## Example Usage

```typescript
import { BadgeSuggestSearchResponse } from "@steamsets/client-ts/models/operations";

let value: BadgeSuggestSearchResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1BadgeSuggestSearchBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1BadgeSuggestSearchBody.json",
    filter: "<value>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `v1BadgeSuggestSearchBody`                                                                 | [components.V1BadgeSuggestSearchBody](../../models/components/v1badgesuggestsearchbody.md) | :heavy_minus_sign:                                                                         | OK                                                                                         |