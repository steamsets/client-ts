# V1AdminSubmission

## Example Usage

```typescript
import { V1AdminSubmission } from "@steamsets/client-ts/models/components";

let value: V1AdminSubmission = {
  context: {
    build: "59d6b1a9",
    locale: "en",
    ref: "3f9a1c22",
    section: "Choose a tier",
    viewport: "1440x900",
  },
  createdAt: new Date("2025-07-18T04:41:16.239Z"),
  id: "sub_2bM9x0aQ",
  ipHash: "<value>",
  kind: "bug",
  message: "<value>",
  pageUrl: "https://steamsets.com/profiles/flo",
  reason: "not_updating",
  repliedAt: null,
  repliedBy: 754072,
  replyFrom: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 914456,
    city: {
      name: "Bad Krozingen",
    },
    country: null,
    createdAt: new Date("2023-01-01T00:00:00Z"),
    donated: 123456,
    economyBan: "steam",
    foilBadges: 123456,
    friends: 123456,
    gameBans: 680209,
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
        rating: 138555,
        role: "sapphire",
      },
    ],
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 528660,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
    },
    themeColor: "#FF5733",
    vacBans: 543765,
    xp: 123456,
  },
  reporter: {
    animatedAvatar: "<value>",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "<value>",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "<value>",
    badges: 123456,
    bans: 191382,
    city: {
      name: "Bad Krozingen",
    },
    country: {
      code: "DE",
      name: "Germany",
    },
    createdAt: new Date("2023-01-01T00:00:00Z"),
    donated: 123456,
    economyBan: "steam",
    foilBadges: 123456,
    friends: 123456,
    gameBans: 927464,
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
    roles: null,
    state: {
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 782767,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    supporter: {
      active: true,
      months: 3,
    },
    themeColor: "#FF5733",
    vacBans: 83025,
    xp: 123456,
  },
  reporterAccountId: 1216167888,
  staffReply: "<value>",
  status: "new",
  subject: null,
  subjectAccountId: 1216167888,
  updatedAt: new Date("2026-07-01T18:38:27.591Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `context`                                                                                     | [components.SubmissionContext](../../models/components/submissioncontext.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the report was sent                                                                      |                                                                                               |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Submission id                                                                                 | sub_2bM9x0aQ                                                                                  |
| `ipHash`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Hash of the reporter's IP address, to tell anonymous reporters apart                          |                                                                                               |
| `kind`                                                                                        | [components.V1AdminSubmissionKind](../../models/components/v1adminsubmissionkind.md)          | :heavy_check_mark:                                                                            | What kind of submission this is                                                               | bug                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | What the reporter wrote                                                                       |                                                                                               |
| `pageUrl`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The page the report was sent from                                                             | https://steamsets.com/profiles/flo                                                            |
| `reason`                                                                                      | [components.V1AdminSubmissionReason](../../models/components/v1adminsubmissionreason.md)      | :heavy_check_mark:                                                                            | Preset reason of a broken_profile report. Null for other kinds                                |                                                                                               |
| `repliedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When staff replied. Null until staff reply                                                    |                                                                                               |
| `repliedBy`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | The staff account that replied. Null until staff reply                                        |                                                                                               |
| `replyFrom`                                                                                   | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reporter`                                                                                    | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `reporterAccountId`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | The account that sent the report. Null for an anonymous report                                | 1216167888                                                                                    |
| `staffReply`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | The answer staff gave. Null until staff reply                                                 |                                                                                               |
| `status`                                                                                      | [components.V1AdminSubmissionStatus](../../models/components/v1adminsubmissionstatus.md)      | :heavy_check_mark:                                                                            | Where staff are with it                                                                       | new                                                                                           |
| `subject`                                                                                     | [components.LeaderboardAccount](../../models/components/leaderboardaccount.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `subjectAccountId`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | The profile a broken_profile report is about. Null for other kinds                            | 1216167888                                                                                    |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the report last changed                                                                  |                                                                                               |