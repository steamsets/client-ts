# AccountV1SessionLoginResponse

## Example Usage

```typescript
import { AccountV1SessionLoginResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SessionLoginResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1LoginResponseBody: {
    dollarSchema: "https://api.steamsets.com/schemas/V1LoginResponseBody.json",
    avatar:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
    name: "SteamSets",
    refreshExpiresAt: new Date("2023-01-01T00:00:00Z"),
    refreshToken: "<value>",
    sessionExpiresAt: new Date("2023-01-01T00:00:00Z"),
    sessionToken: "auth_",
    steamId: "76561198842603734",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `httpMeta`                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)               | :heavy_check_mark:                                                               | N/A                                                                              |
| `v1LoginResponseBody`                                                            | [components.V1LoginResponseBody](../../models/components/v1loginresponsebody.md) | :heavy_minus_sign:                                                               | OK                                                                               |