# V1AccountBadgeMostXpDataPoint

## Example Usage

```typescript
import { V1AccountBadgeMostXpDataPoint } from "@steamsets/client-ts/models/components";

let value: V1AccountBadgeMostXpDataPoint = {
  appId: 123456,
  badgeCompletedAt: new Date("2023-01-01T00:00:00Z"),
  badgeId: "123456",
  badgeImage: "steamsets",
  badgeIsFoil: true,
  badgeLevel: 123456,
  badgeName: "steamsets",
  badgeScarcity: 123456,
  badgeSteamID: 123456,
  badgeXP: 123456,
  image: "steamsets",
  name: "steamsets",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The app id                                                                                    | 123456                                                                                        |
| `badgeCompletedAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The badge completed at                                                                        | 2023-01-01T00:00:00Z                                                                          |
| `badgeId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The badge id                                                                                  | 123456                                                                                        |
| `badgeImage`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The badge image                                                                               | steamsets                                                                                     |
| `badgeIsFoil`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the badge is foil                                                                     | true                                                                                          |
| `badgeLevel`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | The badge level                                                                               | 123456                                                                                        |
| `badgeName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The badge name                                                                                | steamsets                                                                                     |
| `badgeScarcity`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The badge scarcity                                                                            | 123456                                                                                        |
| `badgeSteamID`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The badge steam id                                                                            | 123456                                                                                        |
| `badgeXP`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The badge xp                                                                                  | 123456                                                                                        |
| `image`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The image of the app                                                                          | steamsets                                                                                     |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the app                                                                           | steamsets                                                                                     |