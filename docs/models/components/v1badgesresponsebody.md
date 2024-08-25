# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
    dollarSchema: "http://localhost:8080/schemas/V1BadgesResponseBody.json",
    badges: [
        {
            appId: 623564,
            appImage: "<value>",
            appName: "<value>",
            appShortName: "<value>",
            badgeImage: "<value>",
            completedAt: new Date("2023-12-09T21:35:55.692Z"),
            isFoil: false,
            level: 384382,
            name: "<value>",
            price: 437587,
            publicId: "<value>",
            scarcity: 297534,
            steamId: 891773,
            xp: 56713,
        },
    ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `dollarSchema`                                             | *string*                                                   | :heavy_minus_sign:                                         | A URL to the JSON Schema for this object.                  | http://localhost:8080/schemas/V1BadgesResponseBody.json    |
| `badges`                                                   | [components.V1Badge](../../models/components/v1badge.md)[] | :heavy_check_mark:                                         | N/A                                                        |                                                            |