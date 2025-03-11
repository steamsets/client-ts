# AccountV1SessionRefreshResponse

## Example Usage

```typescript
import { AccountV1SessionRefreshResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SessionRefreshResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1RefreshSessionBody: {
    dollarSchema: "https://api.steamsets.com/schemas/V1RefreshSessionBody.json",
    refreshExpiresAt: new Date("2023-01-01T00:00:00Z"),
    refreshToken: "<value>",
    sessionExpiresAt: new Date("2023-01-01T00:00:00Z"),
    sessionToken: "auth_",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `v1RefreshSessionBody`                                                             | [components.V1RefreshSessionBody](../../models/components/v1refreshsessionbody.md) | :heavy_minus_sign:                                                                 | OK                                                                                 |