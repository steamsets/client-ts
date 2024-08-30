# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
    dollarSchema: "http://localhost:8080/schemas/V1BadgesResponseBody.json",
    badges: [
        {
            appId: 56713,
            appImage: "<value>",
            appName: "<value>",
            appShortName: "<value>",
            badgeImage: "<value>",
            completedAt: new Date("2024-11-22T04:11:07.245Z"),
            isFoil: false,
            level: 272656,
            name: "<value>",
            price: 383441,
            publicId: "<value>",
            scarcity: 477665,
            steamId: 791725,
            xp: 812169,
        },
    ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `dollarSchema`                                             | *string*                                                   | :heavy_minus_sign:                                         | A URL to the JSON Schema for this object.                  | http://localhost:8080/schemas/V1BadgesResponseBody.json    |
| `badges`                                                   | [components.V1Badge](../../models/components/v1badge.md)[] | :heavy_check_mark:                                         | N/A                                                        |                                                            |