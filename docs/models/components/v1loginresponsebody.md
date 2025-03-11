# V1LoginResponseBody

## Example Usage

```typescript
import { V1LoginResponseBody } from "@steamsets/client-ts/models/components";

let value: V1LoginResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1LoginResponseBody.json",
  avatar:
    "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
  name: "SteamSets",
  refreshExpiresAt: new Date("2023-01-01T00:00:00Z"),
  refreshToken: "<value>",
  sessionExpiresAt: new Date("2023-01-01T00:00:00Z"),
  sessionToken: "auth_",
  steamId: "76561198842603734",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                               | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | A URL to the JSON Schema for this object.                                                                    | https://api.steamsets.com/schemas/V1LoginResponseBody.json                                                   |
| `avatar`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The avatar of the account                                                                                    | https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The name of the account                                                                                      | SteamSets                                                                                                    |
| `refreshExpiresAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | The expiration time of the refresh token                                                                     | 2023-01-01T00:00:00Z                                                                                         |
| `refreshToken`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The refresh token                                                                                            |                                                                                                              |
| `sessionExpiresAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | The expiration time of the session token                                                                     | 2023-01-01T00:00:00Z                                                                                         |
| `sessionToken`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The session token                                                                                            | auth_                                                                                                        |
| `steamId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The steam id                                                                                                 | 76561198842603734                                                                                            |