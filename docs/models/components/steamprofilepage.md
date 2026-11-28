# SteamProfilePage

## Example Usage

```typescript
import { SteamProfilePage } from "@steamsets/client-ts/models/components";

let value: SteamProfilePage = {
  groups: {
    shown: [
      {
        avatar: "73c981a19471f93e73f358770b1f5ff2c7363beb",
        members: 26,
        name: "developer",
      },
    ],
    total: 28,
  },
  readAt: new Date("2026-11-21T12:00:00Z"),
  recentBadges: [],
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `groups`                                                                                                                                   | [components.SteamPageGroups](../../models/components/steampagegroups.md)                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `readAt`                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                              | :heavy_check_mark:                                                                                                                         | The time a refresh read the page                                                                                                           | 2026-11-21T12:00:00Z                                                                                                                       |
| `recentBadges`                                                                                                                             | [components.SteamPageBadge](../../models/components/steampagebadge.md)[]                                                                   | :heavy_check_mark:                                                                                                                         | The badges the right column shows, in Steam's order. Steam picks the newest, and breaks ties in completion time in an order no API returns |                                                                                                                                            |