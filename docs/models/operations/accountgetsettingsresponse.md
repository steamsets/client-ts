# AccountGetSettingsResponse

## Example Usage

```typescript
import { AccountGetSettingsResponse } from "@steamsets/client-ts/models/operations";

let value: AccountGetSettingsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountGetSettingsBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountGetSettingsBody.json",
    chosenRole: {
      role: "amber",
      tier: "tier_1",
    },
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
    developerApps: [
      {
        apiKey: "api_123",
        description: "My App Description",
        environment: "production",
        id: "da_123456",
        name: "My App",
      },
    ],
    email: "steamsets@example.com",
    emailVerifiedAt: new Date("2023-01-01T00:00:00Z"),
    hidden: true,
    images: [
      {
        active: true,
        fileName: "avatar.png",
        imageId: "img_wasd123",
        imageType: "avatar",
      },
    ],
    language: "en",
    privacy: "public",
    sessions: [
      {
        createdAt: new Date("2023-01-01T00:00:00Z"),
        expiresAt: new Date("2023-01-01T00:00:00Z"),
        ip: "127.0.0.1",
        lastSeen: new Date("2023-01-01T00:00:00Z"),
        level: 1,
        sessionId: "123456",
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    ],
    subscribed: false,
    vanity: "flo",
    vanityAnalytics: {
      clicks: 474067,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `v1AccountGetSettingsBody`                                                                 | [components.V1AccountGetSettingsBody](../../models/components/v1accountgetsettingsbody.md) | :heavy_minus_sign:                                                                         | OK                                                                                         |