# AdminV1GetAccountResponse

## Example Usage

```typescript
import { AdminV1GetAccountResponse } from "@steamsets/client-ts/models/operations";

let value: AdminV1GetAccountResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AdminGetAccountResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AdminGetAccountResponseBody.json",
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
    city: "Bad Krozingen",
    connections: [
      {
        avatar:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
        connectionId: "123456",
        externalId: "123456",
        failed: true,
        hide: true,
        name: "steamsets",
        provider: "discord",
        verified: true,
      },
    ],
    country: "Germany",
    email: "steamsets@example.com",
    locationUpdates: [
      {
        city: "Bad Krozingen",
        countryCode: "DE",
        countryName: "Germany",
        region: "Europe",
        state: "Baden-Wurttemberg",
        updatedAt: new Date("2023-01-01T00:00:00Z"),
      },
    ],
    name: "steamsets",
    nameUpdates: [
      {
        name: "steamsets",
        updatedAt: new Date("2023-01-01T00:00:00Z"),
      },
    ],
    privacy: "public",
    region: "Europe",
    resources: [
      {
        resource: "account_refresh_rate",
        value: "1",
      },
    ],
    roles: [
      {
        rating: 739264,
        role: "user",
      },
    ],
    sessions: [
      {
        createdAt: new Date("2023-01-01T00:00:00Z"),
        expiresAt: new Date("2023-01-01T00:00:00Z"),
        ip: "127.0.0.1",
        lastSeen: new Date("2023-01-01T00:00:00Z"),
        sessionId: "123456",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    ],
    state: "Baden-Wurttemberg",
    vanity: "steamsets",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                   | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `v1AdminGetAccountResponseBody`                                                                      | [components.V1AdminGetAccountResponseBody](../../models/components/v1admingetaccountresponsebody.md) | :heavy_minus_sign:                                                                                   | OK                                                                                                   |