# AccountV1SessionCreateResponse

## Example Usage

```typescript
import { AccountV1SessionCreateResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SessionCreateResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1CreateSessionBody: {
        dollarSchema: "http://localhost:8080/schemas/V1CreateSessionBody.json",
        sessionId: "ABC123",
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `v1CreateSessionBody`                                                            | [components.V1CreateSessionBody](../../models/components/v1createsessionbody.md) | :heavy_minus_sign:                                                               | OK                                                                               |