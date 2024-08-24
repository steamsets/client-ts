# AccountV1ConnectionUpdateConnectionResponse

## Example Usage

```typescript
import { AccountV1ConnectionUpdateConnectionResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1ConnectionUpdateConnectionResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1UpdateConnectionResponseBody: {
        dollarSchema: "http://localhost:8080/schemas/V1UpdateConnectionResponseBody.json",
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `v1UpdateConnectionResponseBody`                                                                       | [components.V1UpdateConnectionResponseBody](../../models/components/v1updateconnectionresponsebody.md) | :heavy_minus_sign:                                                                                     | OK                                                                                                     |