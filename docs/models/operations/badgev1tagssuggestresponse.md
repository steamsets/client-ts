# BadgeV1TagsSuggestResponse

## Example Usage

```typescript
import { BadgeV1TagsSuggestResponse } from "@steamsets/client-ts/models/operations";

let value: BadgeV1TagsSuggestResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  badgeSuggestTags: {
    dollarSchema: "https://api.steamsets.com/schemas/BadgeSuggestTags.json",
    colors: [
      "<value>",
    ],
    designs: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `badgeSuggestTags`                                                         | [components.BadgeSuggestTags](../../models/components/badgesuggesttags.md) | :heavy_minus_sign:                                                         | OK                                                                         |