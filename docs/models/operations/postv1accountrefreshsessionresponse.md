# PostV1AccountRefreshSessionResponse

## Example Usage

```typescript
import { PostV1AccountRefreshSessionResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountRefreshSessionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountRefreshSessionBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountRefreshSessionBody.json",
    refreshExpiresAt: new Date("2023-01-01T00:00:00Z"),
    refreshToken: "<value>",
    sessionExpiresAt: new Date("2023-01-01T00:00:00Z"),
    sessionToken: "auth_",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `v1AccountRefreshSessionBody`                                                                    | [components.V1AccountRefreshSessionBody](../../models/components/v1accountrefreshsessionbody.md) | :heavy_minus_sign:                                                                               | OK                                                                                               |