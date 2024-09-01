# AccountV1GetBadgesResponse

## Example Usage

```typescript
import { AccountV1GetBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1GetBadgesResponse = {
    httpMeta: {
        response: new Response('{"message": "hello world"}', {
            headers: { "Content-Type": "application/json" },
        }),
        request: new Request("https://example.com"),
    },
    v1BadgesResponseBody: {
        dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
        badges: [
            {
                appId: 548814,
                appImage: "<value>",
                appName: "<value>",
                appShortName: "<value>",
                badgeImage: "<value>",
                completedAt: new Date("2023-10-12T18:11:05.242Z"),
                isFoil: false,
                level: 715190,
                name: "<value>",
                price: 844266,
                publicId: "<value>",
                scarcity: 602763,
                steamId: 857946,
                xp: 544883,
            },
        ],
    },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `httpMeta`                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                 | :heavy_check_mark:                                                                 | N/A                                                                                |
| `v1BadgesResponseBody`                                                             | [components.V1BadgesResponseBody](../../models/components/v1badgesresponsebody.md) | :heavy_minus_sign:                                                                 | OK                                                                                 |