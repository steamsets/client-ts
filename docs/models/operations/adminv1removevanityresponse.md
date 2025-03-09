# AdminV1RemoveVanityResponse

## Example Usage

```typescript
import { AdminV1RemoveVanityResponse } from "@steamsets/client-ts/models/operations";

let value: AdminV1RemoveVanityResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AdminRemoveVanityResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AdminRemoveVanityResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `v1AdminRemoveVanityResponseBody`                                                                        | [components.V1AdminRemoveVanityResponseBody](../../models/components/v1adminremovevanityresponsebody.md) | :heavy_minus_sign:                                                                                       | OK                                                                                                       |