# AccountV1GetMetaResponse

## Example Usage

```typescript
import { AccountV1GetMetaResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetMetaResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountMetaResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountMetaResponseBody.json",
    description: "know gleefully ew ceramic",
    steamId: "<id>",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1AccountMetaResponseBody`                                                                  | [components.V1AccountMetaResponseBody](../../models/components/v1accountmetaresponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |