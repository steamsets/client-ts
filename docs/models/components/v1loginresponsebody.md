# V1LoginResponseBody

## Example Usage

```typescript
import { V1LoginResponseBody } from "@steamsets/client-ts/models/components";

let value: V1LoginResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1LoginResponseBody.json",
  avatar:
    "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
  name: "SteamSets",
  sessionToken: "123456",
  steamId: "76561198842603734",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A URL to the JSON Schema for this object.                                                                    | https://api.steamsets.com/schemas/V1LoginResponseBody.json                                                   |
| `avatar`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The avatar of the account                                                                                    | https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the account                                                                                      | SteamSets                                                                                                    |
| `sessionToken`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The session token                                                                                            | 123456                                                                                                       |
| `steamId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The steam id                                                                                                 | 76561198842603734                                                                                            |