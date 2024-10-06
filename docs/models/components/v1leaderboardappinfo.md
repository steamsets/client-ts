# V1LeaderboardAppInfo

## Example Usage

```typescript
import { V1LeaderboardAppInfo } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardAppInfo = {
  id: 730,
  image:
    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
  name: "Counter-Strike: Global Offensive",
  type: "game",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The id of the app                                                                                                 | 730                                                                                                               |
| `image`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The image of the app                                                                                              | https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The name of the app                                                                                               | Counter-Strike: Global Offensive                                                                                  |
| `type`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The type of the app                                                                                               | game                                                                                                              |