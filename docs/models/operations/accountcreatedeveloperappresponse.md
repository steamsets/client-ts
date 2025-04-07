# AccountCreateDeveloperAppResponse

## Example Usage

```typescript
import { AccountCreateDeveloperAppResponse } from "@steamsets/client-ts/models/operations";

let value: AccountCreateDeveloperAppResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountCreateDeveloperAppResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountCreateDeveloperAppResponseBody.json",
    apiKey: "api_123",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `v1AccountCreateDeveloperAppResponseBody`                                                                                | [components.V1AccountCreateDeveloperAppResponseBody](../../models/components/v1accountcreatedeveloperappresponsebody.md) | :heavy_minus_sign:                                                                                                       | OK                                                                                                                       |