# V1AccountBadgeOwnedBadgesResponseBody

## Example Usage

```typescript
import { V1AccountBadgeOwnedBadgesResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountBadgeOwnedBadgesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountBadgeOwnedBadgesResponseBody.json",
  ownedBadges: [
    {
      appId: 730,
      badgeId: "bdg_123",
      level: 123456,
      steamId: 13,
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | A URL to the JSON Schema for this object.                                                    | https://api.steamsets.com/schemas/V1AccountBadgeOwnedBadgesResponseBody.json                 |
| `ownedBadges`                                                                                | [components.V1AccountBadgeOwnedBadge](../../models/components/v1accountbadgeownedbadge.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |