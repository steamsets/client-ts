# ResendWebhookResponse

## Example Usage

```typescript
import { ResendWebhookResponse } from "@steamsets/client-ts/models/operations";

let value: ResendWebhookResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  errorModel: {
    dollarSchema: "https://api.steamsets.com/schemas/ErrorModel.json",
    detail: "Property foo is required but is missing.",
    instance: "https://example.com/error-log/abc123",
    status: 400,
    title: "Bad Request",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `errorModel`                                                       | [components.ErrorModel](../../models/components/errormodel.md)     | :heavy_minus_sign:                                                 | Error                                                              |