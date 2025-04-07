# AccountGetInfoResponse

## Example Usage

```typescript
import { AccountGetInfoResponse } from "@steamsets/client-ts/models/operations";

let value: AccountGetInfoResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountGetInfoResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountGetInfoResponseBody.json",
    accountId: 123456,
    animatedAvatar: "steamsets",
    appCost: 123456,
    appPrivacy: "public",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "steamsets",
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "steamsets",
    badges: 123456,
    bans: 196121,
    city: {
      id: 1,
      name: "Bad Krozingen",
    },
    communityBan: false,
    connections: [
      {
        avatar:
          "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
        connectionId: "123456",
        externalId: "123456",
        failed: true,
        hide: true,
        name: "steamsets",
        provider: "discord",
        verified: true,
      },
    ],
    country: {
      code: "DE",
      id: 1,
      name: "Germany",
    },
    createdAt: new Date("2023-01-01T00:00:00Z"),
    currentBestRanks: [
      {
        leaderboard: "badges",
        ranks: "1,1,1,1,1",
      },
    ],
    currentRanks: [
      {
        leaderboard: "xp",
        ranks: "1,1,1,1,1",
      },
    ],
    donated: 123456,
    economyBan: "steam",
    foilBadgeCost: 123456,
    foilBadges: 123456,
    friendPrivacy: "public",
    friends: 123456,
    gameBans: 550015,
    images: [
      {
        active: true,
        fileName: "avatar.png",
        imageId: "img_wasd123",
        imageType: "avatar",
      },
    ],
    lastBanDate: new Date("2024-03-07 07:31:46"),
    lastQueueStatus: "undefined",
    level: 123456,
    miniBackground: "steamsets",
    name: "steamsets",
    nextAllowedTime: new Date("2024-07-28T08:09:24.236Z"),
    normalBadgeCost: 123456,
    normalBadges: 123456,
    playtime: 123456,
    pointsGiven: 123456,
    pointsReceived: 123456,
    privacy: "public",
    region: {
      id: 1,
      name: "Europe",
    },
    roles: [
      {
        rating: 652148,
        role: "amber",
      },
    ],
    shortlinkDomain: "steamsets.link",
    state: {
      id: 1,
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 98600,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    theme: "steamsets",
    updatedAt: new Date("2023-01-01T00:00:00Z"),
    vacBans: 244914,
    xp: 123456,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `v1AccountGetInfoResponseBody`                                                                     | [components.V1AccountGetInfoResponseBody](../../models/components/v1accountgetinforesponsebody.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |