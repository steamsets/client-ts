# AdminLiveEvent

## Example Usage

```typescript
import { AdminLiveEvent } from "@steamsets/client-ts/models/components";

let value: AdminLiveEvent = {
  actor: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 641917,
    city: {
      name: "Bad Krozingen",
    },
    country: null,
    createdAt: new Date("2023-01-01T00:00:00Z"),
    donated: 123456,
    economyBan: "steam",
    foilBadges: 123456,
    friends: 123456,
    gameBans: 350137,
    isHidden: true,
    level: 123456,
    miniBackground: "<value>",
    name: "steamsets",
    nameEffect: "rainbow",
    normalBadges: 123456,
    playtime: 123456,
    pointsGiven: 123456,
    pointsReceived: 123456,
    privacy: "public",
    region: {
      name: "Europe",
    },
    roles: [
      {
        extras: {},
        rating: 418270,
        role: "donator",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 959936,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
      streak: 0,
    },
    themeColor: "#FF5733",
    vacBans: 856267,
    xp: 123456,
  },
  at: new Date("2025-10-19T04:33:17.110Z"),
  facts: {},
  id: "<id>",
  kind: "order_paid",
  person: null,
  product: "steamsets",
  refs: [],
  severity: "info",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actor`                                                                                       | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `facts`                                                                                       | [components.AdminEventFacts](../../models/components/admineventfacts.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The event's id. The list and the stream give an event the same id.                            |                                                                                               |
| `kind`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | What happened, such as sign_in, crawl_run, order_paid or bot_offline. New kinds can appear.   | order_paid                                                                                    |
| `person`                                                                                      | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `product`                                                                                     | [components.AdminLiveEventProduct](../../models/components/adminliveeventproduct.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `refs`                                                                                        | [components.AdminEventRef](../../models/components/admineventref.md)[]                        | :heavy_check_mark:                                                                            | The entities the event links to.                                                              |                                                                                               |
| `severity`                                                                                    | [components.AdminLiveEventSeverity](../../models/components/adminliveeventseverity.md)        | :heavy_check_mark:                                                                            | attention waits on staff; problem is something that failed.                                   |                                                                                               |