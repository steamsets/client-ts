# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
    dollarSchema: "https://api.steamsets.com/schemas/V1BadgesResponseBody.json",
    badges: [
        {
            appId: 791725,
            appImage: "<value>",
            appName: "<value>",
            appShortName: "<value>",
            badgeImage: "<value>",
            completedAt: new Date("2024-06-09T03:17:10.252Z"),
            isFoil: false,
            level: 528895,
            name: "<value>",
            price: 479977,
            publicId: "<value>",
            scarcity: 568045,
            steamId: 392785,
            xp: 925597,
        },
    ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `dollarSchema`                                              | *string*                                                    | :heavy_minus_sign:                                          | A URL to the JSON Schema for this object.                   | https://api.steamsets.com/schemas/V1BadgesResponseBody.json |
| `badges`                                                    | [components.V1Badge](../../models/components/v1badge.md)[]  | :heavy_check_mark:                                          | N/A                                                         |                                                             |