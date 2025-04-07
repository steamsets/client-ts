# AccountDeleteDeveloperAppResponse

## Example Usage

```typescript
import { AccountDeleteDeveloperAppResponse } from "@steamsets/client-ts/models/operations";

let value: AccountDeleteDeveloperAppResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountDeleteDeveloperAppResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountDeleteDeveloperAppResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `v1AccountDeleteDeveloperAppResponseBody`                                                                                | [components.V1AccountDeleteDeveloperAppResponseBody](../../models/components/v1accountdeletedeveloperappresponsebody.md) | :heavy_minus_sign:                                                                                                       | OK                                                                                                                       |