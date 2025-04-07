# AccountUpdateDeveloperAppResponse

## Example Usage

```typescript
import { AccountUpdateDeveloperAppResponse } from "@steamsets/client-ts/models/operations";

let value: AccountUpdateDeveloperAppResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountDeveloperAppUpdateResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountDeveloperAppUpdateResponseBody.json",
    apiKey: "api_123",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `v1AccountDeveloperAppUpdateResponseBody`                                                                                | [components.V1AccountDeveloperAppUpdateResponseBody](../../models/components/v1accountdeveloperappupdateresponsebody.md) | :heavy_minus_sign:                                                                                                       | OK                                                                                                                       |