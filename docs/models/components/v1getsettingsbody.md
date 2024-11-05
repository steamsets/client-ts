# V1GetSettingsBody

## Example Usage

```typescript
import { V1GetSettingsBody } from "@steamsets/client-ts/models/components";

let value: V1GetSettingsBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1GetSettingsBody.json",
  chosenRole: {
    role: "contributor",
    tier: "tier_1",
  },
  color: "#7652c9",
  colors: "#7652c9",
  connections: [
    {
      avatar:
        "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
      externalId: "123456",
      hide: true,
      name: "steamsets",
      provider: "discord",
      publicId: "123456",
      verified: true,
    },
  ],
  developerApps: [
    {
      apiKey: "api_123",
      description: "My App Description",
      environment: "production",
      icon: "https://yoururl.com/icon.png",
      id: "da_123456",
      name: "My App",
    },
  ],
  email: "steamsets@example.com",
  emailNotifications: [
    {
      enabled: true,
      type: "login",
    },
  ],
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
  theme: "dark",
  vanity: "flo",
  vanityAnalytics: {
    clicks: 866383,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/V1GetSettingsBody.json                                      |
| `chosenRole`                                                                                  | [components.ChosenRole](../../models/components/chosenrole.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `color`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The color the account is using                                                                | #7652c9                                                                                       |
| `colors`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The colors the account is using                                                               | #7652c9                                                                                       |
| `connections`                                                                                 | [components.Connection](../../models/components/connection.md)[]                              | :heavy_check_mark:                                                                            | The connections the account has                                                               |                                                                                               |
| `developerApps`                                                                               | [components.DeveloperApp](../../models/components/developerapp.md)[]                          | :heavy_check_mark:                                                                            | The developer apps the account has                                                            |                                                                                               |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The email the account is using                                                                | steamsets@example.com                                                                         |
| `emailNotifications`                                                                          | [components.EmailNotification](../../models/components/emailnotification.md)[]                | :heavy_check_mark:                                                                            | The email notifications the account has                                                       |                                                                                               |
| `emailVerifiedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the email was verified                                                               | 2023-01-01T00:00:00Z                                                                          |
| `hidden`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the account is hidden in the leaderboards                                             | true                                                                                          |
| `images`                                                                                      | [components.Image](../../models/components/image.md)[]                                        | :heavy_check_mark:                                                                            | The images the account has                                                                    |                                                                                               |
| `language`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The language the account is using                                                             | en                                                                                            |
| `sessions`                                                                                    | [components.Session](../../models/components/session.md)[]                                    | :heavy_check_mark:                                                                            | The sessions the account has                                                                  |                                                                                               |
| `theme`                                                                                       | [components.Theme](../../models/components/theme.md)                                          | :heavy_check_mark:                                                                            | The theme the account is using                                                                | dark                                                                                          |
| `vanity`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The vanity the account is using                                                               | flo                                                                                           |
| `vanityAnalytics`                                                                             | [components.V1VanityAnalytics](../../models/components/v1vanityanalytics.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |