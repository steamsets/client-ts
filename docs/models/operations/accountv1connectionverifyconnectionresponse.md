# AccountV1ConnectionVerifyConnectionResponse

## Example Usage

```typescript
import { AccountV1ConnectionVerifyConnectionResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1ConnectionVerifyConnectionResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1VerifyConnectionResponseBody: {
        dollarSchema: "https://api.steamsets.com/schemas/V1VerifyConnectionResponseBody.json",
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `v1VerifyConnectionResponseBody`                                                                       | [components.V1VerifyConnectionResponseBody](../../models/components/v1verifyconnectionresponsebody.md) | :heavy_minus_sign:                                                                                     | OK                                                                                                     |