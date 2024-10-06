# V1LeaderboardBadgeInfo

## Example Usage

```typescript
import { V1LeaderboardBadgeInfo } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardBadgeInfo = {
  appId: 730,
  appImage:
    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
  appName: "Counter-Strike: Global Offensive",
  image:
    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
  isFoil: true,
  level: 15,
  name: "Counter-Strike: Global Offensive",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                           | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The id of the app                                                                                                 | 730                                                                                                               |
| `appImage`                                                                                                        | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The image of the app                                                                                              | https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg |
| `appName`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The name of the app                                                                                               | Counter-Strike: Global Offensive                                                                                  |
| `image`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The image of the badge                                                                                            | https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg |
| `isFoil`                                                                                                          | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | Whether the badge is foil or not                                                                                  | true                                                                                                              |
| `level`                                                                                                           | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The level of the badge                                                                                            | 15                                                                                                                |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The name of the badge                                                                                             | Counter-Strike: Global Offensive                                                                                  |