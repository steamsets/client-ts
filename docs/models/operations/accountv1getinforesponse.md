# AccountV1GetInfoResponse

## Example Usage

```typescript
import { AccountV1GetInfoResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetInfoResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    accountInfoBody: {
        dollarSchema: "https://api.steamsets.com/schemas/AccountInfoBody.json",
        accountId: 123456,
        animatedAvatar: "steamsets",
        appCost: 123456,
        appPrivacy: "public",
        apps: 123456,
        appsUpdatedAt: new Date("2023-01-01T00:00:00Z"),
        avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9",
        avatarFrame: "steamsets",
        averagePlaytime: 123456,
        awardsGiven: 123456,
        awardsReceived: 123456,
        background: "steamsets",
        badges: 123456,
        badgesUpdatedAt: new Date("2023-01-01T00:00:00Z"),
        bans: 423655,
        city: {
            code: "DE",
            id: 1,
            name: "Germany",
        },
        connections: [
            {
                avatar: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/f1/f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
                externalId: "123456",
                hide: true,
                name: "steamsets",
                provider: "discord",
                publicId: "123456",
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
                leaderboard: "normal_badges",
                ranks: "1,1,1,1,1",
            },
        ],
        economyBan: "steam",
        foilBadgeCost: 123456,
        foilBadges: 123456,
        friendPrivacy: "public",
        friends: 123456,
        friendsUpdatedAt: new Date("2023-01-01T00:00:00Z"),
        gameBans: 384382,
        hidden: true,
        images: [
            {
                active: true,
                fileName: "avatar.png",
                imageId: "img_wasd123",
                imageType: "avatar",
            },
        ],
        level: 123456,
        limitedApps: 123456,
        miniBackground: "steamsets",
        name: "steamsets",
        normalBadgeCost: 123456,
        normalBadges: 123456,
        playtime: 123456,
        pointsGiven: 123456,
        pointsReceived: 123456,
        privacy: "public",
        region: {
            code: "DE",
            id: 1,
            name: "Germany",
        },
        roles: [
            {
                colorr: "#ff0000",
                icon: "tier_1.svg",
                name: "Tier 1",
                role: "<value>",
            },
        ],
        state: {
            code: "DE",
            id: 1,
            name: "Germany",
        },
        steamId: "76561198842603734",
        steamSetsScore: 437587,
        steamSetsVanity: "steamsets",
        steamVanity: "steamsets",
        theme: "steamsets",
        updatedAt: new Date("2023-01-01T00:00:00Z"),
        vacBans: 297534,
        xp: 123456,
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `httpMeta`                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)       | :heavy_check_mark:                                                       | N/A                                                                      |
| `accountInfoBody`                                                        | [components.AccountInfoBody](../../models/components/accountinfobody.md) | :heavy_minus_sign:                                                       | OK                                                                       |