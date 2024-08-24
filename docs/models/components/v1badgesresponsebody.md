# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
    dollarSchema: "http://localhost:8080/schemas/V1BadgesResponseBody.json",
    badges: [
        {
            appId: 592845,
            appImage: "<value>",
            appName: "<value>",
            appShortName: "<value>",
            badgeImage: "<value>",
            completedAt: new Date("2024-02-23T20:20:27.803Z"),
            isFoil: false,
            level: 844266,
            name: "<value>",
            price: 602763,
            publicId: "<value>",
            scarcity: 857946,
            steamId: 544883,
            xp: 847252,
        },
    ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `dollarSchema`                                             | *string*                                                   | :heavy_minus_sign:                                         | A URL to the JSON Schema for this object.                  | http://localhost:8080/schemas/V1BadgesResponseBody.json    |
| `badges`                                                   | [components.V1Badge](../../models/components/v1badge.md)[] | :heavy_check_mark:                                         | N/A                                                        |                                                            |