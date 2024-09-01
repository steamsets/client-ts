# LivenessResponse

## Example Usage

```typescript
import { LivenessResponse } from "@steamsets/client-ts/models/operations";

let value: LivenessResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1LivenessResponseBody: {
        dollarSchema: "https://api.steamsets.com/schemas/V1LivenessResponseBody.json",
        message: "OK",
    },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `httpMeta`                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `v1LivenessResponseBody`                                                               | [components.V1LivenessResponseBody](../../models/components/v1livenessresponsebody.md) | :heavy_minus_sign:                                                                     | OK                                                                                     |