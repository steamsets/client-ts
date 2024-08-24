# AccountV1SettingsVerfyEmailResponse

## Example Usage

```typescript
import { AccountV1SettingsVerfyEmailResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsVerfyEmailResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1VerifyEmailResponseBody: {
        dollarSchema: "http://localhost:8080/schemas/V1VerifyEmailResponseBody.json",
    },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1VerifyEmailResponseBody`                                                                  | [components.V1VerifyEmailResponseBody](../../models/components/v1verifyemailresponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |