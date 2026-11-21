# AppGetLevel

## Example Usage

```typescript
import { AppGetLevel } from "@steamsets/client-ts/models/components";

let value: AppGetLevel = {
  badgeId: "bdg_123",
  highestLevel: 632650,
  image: "https://picsum.photos/seed/L1k0wP/3086/2031",
  level: 408183,
  name: "<value>",
  scarcity: 547776,
  steamBadgeId: 315838,
  trackedHolders: 723790,
  xp: 997100,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `badgeId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The SteamSets id of this badge level.                                                         | bdg_123                                                                                       |
| `firstCompletedAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The first craft of this level that SteamSets knows. Missing when it knows none.               |                                                                                               |
| `highestLevel`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | The highest level anyone SteamSets knows has crafted of this badge.                           |                                                                                               |
| `image`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The badge image of this level.                                                                |                                                                                               |
| `lastCompletedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The latest craft of this level that SteamSets knows. Missing when it knows none.              |                                                                                               |
| `level`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `scarcity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | Holders of this level, as Steam counts them.                                                  |                                                                                               |
| `steamBadgeId`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Steam's id of the badge, 0 for a sale or event tier.                                          |                                                                                               |
| `trackedHolders`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | Holders of this level that SteamSets has indexed.                                             |                                                                                               |
| `xp`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |