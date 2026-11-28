# AccountMeBadge

## Example Usage

```typescript
import { AccountMeBadge } from "@steamsets/client-ts/models/components";

let value: AccountMeBadge = {
  appId: 164843,
  badgeIds: [
    "bdg_123",
  ],
  completedAt: new Date("2025-12-05T22:00:00.214Z"),
  isFoil: true,
  level: 700997,
  xp: 386199,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                             | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `badgeIds`                                                                                                          | *string*[]                                                                                                          | :heavy_check_mark:                                                                                                  | The SteamSets ids of every crafted level of this badge. An event or sale app can have more than one badge per type. | [<br/>"bdg_123"<br/>]                                                                                               |
| `completedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | When the highest level was crafted.                                                                                 |                                                                                                                     |
| `isFoil`                                                                                                            | *boolean*                                                                                                           | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |                                                                                                                     |
| `level`                                                                                                             | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | The highest level crafted.                                                                                          |                                                                                                                     |
| `xp`                                                                                                                | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | The XP of the highest level crafted.                                                                                |                                                                                                                     |