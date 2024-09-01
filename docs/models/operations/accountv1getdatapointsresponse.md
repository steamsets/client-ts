# AccountV1GetDataPointsResponse

## Example Usage

```typescript
import { AccountV1GetDataPointsResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetDataPointsResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1AccountDataPointsResponseBody: {
        dollarSchema: "https://api.steamsets.com/schemas/V1AccountDataPointsResponseBody.json",
        mostXp: [
            {
                appId: 123456,
                badgeCompletedAt: new Date("2023-01-01T00:00:00Z"),
                badgeId: "123456",
                badgeImage: "steamsets",
                badgeIsFoil: true,
                badgeLevel: 123456,
                badgeName: "steamsets",
                badgeScarcity: 123456,
                badgeSteamID: 123456,
                badgeXP: 123456,
                image: "steamsets",
                name: "steamsets",
            },
        ],
        playtime: [
            {
                appId: 730,
                image: "someHash.idk",
                name: "CS2",
                playtime: 15,
            },
        ],
        scarcity: [
            {
                appId: 730,
                badgeId: "bdg_123",
                badgeImage: "someHash.idk",
                badgeIsFoil: true,
                badgeLevel: 15,
                badgeName: "Sommer Sale 2024 Foil 1+",
                badgeScarcity: 15,
                image: "someHash.idk",
                name: "CS2",
            },
        ],
        xp: {
            key: {
                key: 847252,
            },
        },
    },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                       | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `v1AccountDataPointsResponseBody`                                                                        | [components.V1AccountDataPointsResponseBody](../../models/components/v1accountdatapointsresponsebody.md) | :heavy_minus_sign:                                                                                       | OK                                                                                                       |