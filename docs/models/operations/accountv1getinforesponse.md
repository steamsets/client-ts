# AccountV1GetInfoResponse

## Example Usage

```typescript
import { AccountV1GetInfoResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetInfoResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountInfoResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountInfoResponseBody.json",
    accountId: 123456,
    animatedAvatar: "steamsets",
    appCost: 123456,
    appPrivacy: "public",
    apps: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
    avatarFrame: "steamsets",
    averagePlaytime: 123456,
    awardsGiven: 123456,
    awardsReceived: 123456,
    background: "steamsets",
    badges: 123456,
    bans: 363711,
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
        leaderboard: "normal_badges",
        ranks: "1,1,1,1,1",
      },
    ],
    currentRanks: [
      {
        leaderboard: "donations",
        ranks: "1,1,1,1,1",
      },
    ],
    donated: 123456,
    economyBan: "steam",
    foilBadgeCost: 123456,
    foilBadges: 123456,
    friendPrivacy: "public",
    friends: 123456,
    gameBans: 988374,
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
        rating: 208876,
        role: "staff",
      },
    ],
    shortlinkDomain: "steamsets.link",
    state: {
      id: 1,
      name: "Baden-Wurttemberg",
    },
    steamId: "76561198842603734",
    steamSetsScore: 653108,
    steamSetsVanity: "steamsets",
    steamVanity: "steamsets",
    theme: "steamsets",
    updatedAt: new Date("2023-01-01T00:00:00Z"),
    vacBans: 253291,
    xp: 123456,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `v1AccountInfoResponseBody`                                                                  | [components.V1AccountInfoResponseBody](../../models/components/v1accountinforesponsebody.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |