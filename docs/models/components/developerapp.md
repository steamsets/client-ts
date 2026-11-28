# DeveloperApp

## Example Usage

```typescript
import { DeveloperApp } from "@steamsets/client-ts/models/components";

let value: DeveloperApp = {
  access: {
    allBots: false,
    botSteamIds: [
      "76561199756787903",
    ],
    kind: "push",
    listingIds: [
      "web_3cVFAKxh8Q2ZqkTq",
    ],
    scope: "bots",
  },
  analytics: {
    last24Hours: {
      failedRequests: 358,
      outcomeBreakdown: [],
      successRate: 96.5,
      successfulRequests: 9876,
      totalRequests: 10234,
    },
    timeSeries: {
      daily: [],
      hourly: [
        {
          count: 423,
          outcome: "VALID",
          time: new Date("2024-01-15T00:00:00.000Z"),
        },
      ],
    },
  },
  apiKey: "null",
  createdAt: new Date("2023-01-01T00:00:00Z"),
  description: "My App Description",
  environment: "production",
  id: "key_123456",
  keyId: "key_123456",
  lastUsedAt: new Date("2024-01-15T13:00:00Z"),
  name: "My App",
  start: "ssbot_7Hq2",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `access`                                                                                                                                                                 | [components.DeveloperAppAccess](../../models/components/developerappaccess.md)                                                                                           | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| `analytics`                                                                                                                                                              | [components.DeveloperAppAnalytics](../../models/components/developerappanalytics.md)                                                                                     | :heavy_minus_sign:                                                                                                                                                       | N/A                                                                                                                                                                      |                                                                                                                                                                          |
| ~~`apiKey`~~                                                                                                                                                             | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The api key (deprecated, always null for security) | null                                                                                                                                                                     |
| `createdAt`                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_check_mark:                                                                                                                                                       | When the app was created                                                                                                                                                 | 2023-01-01T00:00:00Z                                                                                                                                                     |
| `description`                                                                                                                                                            | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The description of the developer app                                                                                                                                     | My App Description                                                                                                                                                       |
| `environment`                                                                                                                                                            | [components.DeveloperAppEnvironment](../../models/components/developerappenvironment.md)                                                                                 | :heavy_check_mark:                                                                                                                                                       | The environment of the developer app                                                                                                                                     | production                                                                                                                                                               |
| `id`                                                                                                                                                                     | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The id of the developer app (same as keyId for backwards compatibility)                                                                                                  | key_123456                                                                                                                                                               |
| `keyId`                                                                                                                                                                  | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The Unkey key ID                                                                                                                                                         | key_123456                                                                                                                                                               |
| `lastUsedAt`                                                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                            | :heavy_check_mark:                                                                                                                                                       | When the key was last used. Null when it never was, or when that is not known yet                                                                                        | 2024-01-15T13:00:00Z                                                                                                                                                     |
| `name`                                                                                                                                                                   | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The name of the developer app                                                                                                                                            | My App                                                                                                                                                                   |
| `start`                                                                                                                                                                  | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | The first characters of the key as Unkey stores them                                                                                                                     | ssbot_7Hq2                                                                                                                                                               |