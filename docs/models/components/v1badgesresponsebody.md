# V1BadgesResponseBody

## Example Usage

```typescript
import { V1BadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1BadgesResponseBody = {
    dollarSchema: "http://localhost:8080/schemas/V1BadgesResponseBody.json",
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `dollarSchema`                                             | *string*                                                   | :heavy_minus_sign:                                         | A URL to the JSON Schema for this object.                  | http://localhost:8080/schemas/V1BadgesResponseBody.json    |
| `badges`                                                   | [components.V1Badge](../../models/components/v1badge.md)[] | :heavy_check_mark:                                         | N/A                                                        |                                                            |