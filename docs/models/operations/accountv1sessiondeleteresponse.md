# AccountV1SessionDeleteResponse

## Example Usage

```typescript
import { AccountV1SessionDeleteResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SessionDeleteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1DeleteSessionResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1DeleteSessionResponseBody.json",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `v1DeleteSessionResponseBody`                                                                    | [components.V1DeleteSessionResponseBody](../../models/components/v1deletesessionresponsebody.md) | :heavy_minus_sign:                                                                               | OK                                                                                               |