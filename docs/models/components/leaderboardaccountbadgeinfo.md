# LeaderboardAccountBadgeInfo

## Example Usage

```typescript
import { LeaderboardAccountBadgeInfo } from "@steamsets/client-ts/models/components";

let value: LeaderboardAccountBadgeInfo = {
  completionTime: new Date("2023-01-01T00:00:00Z"),
  level: 123456,
  xp: 123456,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `completionTime`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the badge was completed                                                              | 2023-01-01T00:00:00Z                                                                          |
| `level`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | The level of the badge                                                                        | 123456                                                                                        |
| `xp`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | The xp of the badge                                                                           | 123456                                                                                        |