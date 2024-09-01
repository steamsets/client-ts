# AccountV1ConnectionDeleteConnectionResponse

## Example Usage

```typescript
import { AccountV1ConnectionDeleteConnectionResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1ConnectionDeleteConnectionResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1DeleteConnectionResponseBody: {
        dollarSchema: "https://api.steamsets.com/schemas/V1DeleteConnectionResponseBody.json",
    },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `v1DeleteConnectionResponseBody`                                                                       | [components.V1DeleteConnectionResponseBody](../../models/components/v1deleteconnectionresponsebody.md) | :heavy_minus_sign:                                                                                     | OK                                                                                                     |