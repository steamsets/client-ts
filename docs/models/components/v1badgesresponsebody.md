# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
    dollarSchema: "http://localhost:8080/schemas/V1BadgesResponseBody.json",
    badges: [
        {
            appId: 423655,
            appImage: "<value>",
            appName: "<value>",
            appShortName: "<value>",
            badgeImage: "<value>",
            completedAt: new Date("2023-11-15T10:13:10.092Z"),
            isFoil: false,
            level: 645894,
            name: "<value>",
            price: 384382,
            publicId: "<value>",
            scarcity: 437587,
            steamId: 297534,
            xp: 891773,
        },
    ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `dollarSchema`                                             | *string*                                                   | :heavy_minus_sign:                                         | A URL to the JSON Schema for this object.                  | http://localhost:8080/schemas/V1BadgesResponseBody.json    |
| `badges`                                                   | [components.V1Badge](../../models/components/v1badge.md)[] | :heavy_check_mark:                                         | N/A                                                        |                                                            |