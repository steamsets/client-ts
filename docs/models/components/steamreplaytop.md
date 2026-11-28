# SteamReplayTop

## Example Usage

```typescript
import { SteamReplayTop } from "@steamsets/client-ts/models/components";

let value: SteamReplayTop = {
  appId: 1903340,
  percent: 8.78,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `appId`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | The game                                                                                         | 1903340                                                                                          |
| `percent`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | The game's share of the year's playtime in percent, two decimals; the showcase prints it rounded | 8.78                                                                                             |