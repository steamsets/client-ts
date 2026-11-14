# Submission

## Example Usage

```typescript
import { Submission } from "@steamsets/client-ts/models/components";

let value: Submission = {
  dollarSchema: "https://api.steamsets.com/schemas/Submission.json",
  createdAt: new Date("2026-01-13T21:57:33.335Z"),
  id: "sub_2bM9x0aQ",
  kind: "bug",
  message: "<value>",
  pageUrl: "https://steamsets.com/profiles/flo",
  reason: "wrong_level",
  repliedAt: new Date("2026-02-21T01:50:34.854Z"),
  staffReply: null,
  status: "new",
  subject: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 219737,
    city: null,
    country: {
      code: "DE",
      name: "Germany",
    },
    createdAt: new Date("2023-01-01T00:00:00Z"),
    donated: 123456,
    economyBan: "steam",
    foilBadges: 123456,
    friends: 123456,
    gameBans: 181375,
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
        extras: {
          "key": "<value>",
          "key1": "<value>",
        },
        rating: 66480,
        role: "donator",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 225614,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
    },
    themeColor: "#FF5733",
    vacBans: 440330,
    xp: 123456,
  },
  updatedAt: new Date("2024-07-21T22:48:10.744Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/Submission.json                                             |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the report was sent                                                                      |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Submission id                                                                                 | sub_2bM9x0aQ                                                                                  |
| `kind`                                                                                        | [components.SubmissionKind](../../models/components/submissionkind.md)                        | :heavy_check_mark:                                                                            | What kind of submission this is                                                               | bug                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | What the reporter wrote                                                                       |                                                                                               |
| `pageUrl`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The page the report was sent from                                                             | https://steamsets.com/profiles/flo                                                            |
| `reason`                                                                                      | [components.SubmissionReason](../../models/components/submissionreason.md)                    | :heavy_check_mark:                                                                            | Preset reason of a broken_profile report. Null for other kinds                                |                                                                                               |
| `repliedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When staff replied. Null until staff reply                                                    |                                                                                               |
| `staffReply`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The answer staff gave. Null until staff reply                                                 |                                                                                               |
| `status`                                                                                      | [components.SubmissionStatus](../../models/components/submissionstatus.md)                    | :heavy_check_mark:                                                                            | Where staff are with it                                                                       | new                                                                                           |
| `subject`                                                                                     | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the report last changed                                                                  |                                                                                               |