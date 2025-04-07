# PostV1AccountCreateSessionResponse

## Example Usage

```typescript
import { PostV1AccountCreateSessionResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountCreateSessionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountCreateSessionBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountCreateSessionBody.json",
    sessionToken: "ABC123",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `v1AccountCreateSessionBody`                                                                   | [components.V1AccountCreateSessionBody](../../models/components/v1accountcreatesessionbody.md) | :heavy_minus_sign:                                                                             | OK                                                                                             |