# V1App

## Example Usage

```typescript
import { V1App } from "@steamsets/client-ts/models/components";

let value: V1App = {
    id: 730,
    image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
    name: "Counter-Strike: Global Offensive",
    playtime: 123456,
    price: 1200,
    shortName: "csgo",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The Steam App ID                                                                                                  | 730                                                                                                               |
| `image`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The App's image URL                                                                                               | https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/730/a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg |
| `name`                                                                                                            | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The App's name                                                                                                    | Counter-Strike: Global Offensive                                                                                  |
| `playtime`                                                                                                        | *number*                                                                                                          | :heavy_check_mark:                                                                                                | The Account's playtime in the App                                                                                 | 123456                                                                                                            |
| `price`                                                                                                           | *number*                                                                                                          | :heavy_check_mark:                                                                                                | How much the app costs                                                                                            | 1200                                                                                                              |
| `shortName`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | The App's short name                                                                                              | csgo                                                                                                              |