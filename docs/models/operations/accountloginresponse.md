# AccountLoginResponse

## Example Usage

```typescript
import { AccountLoginResponse } from "@steamsets/client-ts/models/operations";

let value: AccountLoginResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountLoginResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountLoginResponseBody.json",
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `v1AccountLoginResponseBody`                                                                   | [components.V1AccountLoginResponseBody](../../models/components/v1accountloginresponsebody.md) | :heavy_minus_sign:                                                                             | OK                                                                                             |