# AccountBadgeScarcityDataPoint

## Example Usage

```typescript
import { AccountBadgeScarcityDataPoint } from "@steamsets/client-ts/models/components";

let value: AccountBadgeScarcityDataPoint = {
  appId: 730,
  badgeId: "bdg_123",
  badgeImage: "someHash.idk",
  badgeIsFoil: true,
  badgeLevel: 15,
  badgeName: "Sommer Sale 2024 Foil 1+",
  badgeScarcity: 15,
  image: "someHash.idk",
  name: "CS2",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `appId`                   | *number*                  | :heavy_check_mark:        | The app id                | 730                       |
| `badgeId`                 | *string*                  | :heavy_check_mark:        | The badge id              | bdg_123                   |
| `badgeImage`              | *string*                  | :heavy_check_mark:        | The badge image           | someHash.idk              |
| `badgeIsFoil`             | *boolean*                 | :heavy_check_mark:        | Whether the badge is foil | true                      |
| `badgeLevel`              | *number*                  | :heavy_check_mark:        | The badge level           | 15                        |
| `badgeName`               | *string*                  | :heavy_check_mark:        | The badge name            | Sommer Sale 2024 Foil 1+  |
| `badgeScarcity`           | *number*                  | :heavy_check_mark:        | The badge scarcity        | 15                        |
| `image`                   | *string*                  | :heavy_check_mark:        | The image of the app      | someHash.idk              |
| `name`                    | *string*                  | :heavy_check_mark:        | The name of the app       | CS2                       |