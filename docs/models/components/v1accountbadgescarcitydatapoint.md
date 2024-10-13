# V1AccountBadgeScarcityDataPoint

## Example Usage

```typescript
import { V1AccountBadgeScarcityDataPoint } from "@steamsets/client-ts/models/components";

let value: V1AccountBadgeScarcityDataPoint = {
  appId: 730,
  badgeCompletedAt: new Date("2023-01-01T00:00:00Z"),
  badgeId: "bdg_123",
  badgeImage: "someHash.idk",
  badgeIsFoil: true,
  badgeLevel: 15,
  badgeName: "Sommer Sale 2024 Foil 1+",
  badgeScarcity: 15,
  badgeSteamId: 123456,
  badgeXP: 123456,
  image: "someHash.idk",
  name: "CS2",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The app id                                                                                    | 730                                                                                           |
| `badgeCompletedAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The badge completed at                                                                        | 2023-01-01T00:00:00Z                                                                          |
| `badgeId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The badge id                                                                                  | bdg_123                                                                                       |
| `badgeImage`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The badge image                                                                               | someHash.idk                                                                                  |
| `badgeIsFoil`                                                                                 | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the badge is foil                                                                     | true                                                                                          |
| `badgeLevel`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | The badge level                                                                               | 15                                                                                            |
| `badgeName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The badge name                                                                                | Sommer Sale 2024 Foil 1+                                                                      |
| `badgeScarcity`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | The badge scarcity                                                                            | 15                                                                                            |
| `badgeSteamId`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The badge steam id                                                                            | 123456                                                                                        |
| `badgeXP`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The badge xp                                                                                  | 123456                                                                                        |
| `image`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The image of the app                                                                          | someHash.idk                                                                                  |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the app                                                                           | CS2                                                                                           |