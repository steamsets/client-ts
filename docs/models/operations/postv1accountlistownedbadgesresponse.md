# PostV1AccountListOwnedBadgesResponse

## Example Usage

```typescript
import { PostV1AccountListOwnedBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountListOwnedBadgesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountBadgeOwnedBadgesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountBadgeOwnedBadgesResponseBody.json",
    ownedBadges: [
      {
        appId: 730,
        badgeId: "bdg_123",
        isFoil: true,
        level: 123456,
        steamId: 13,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `v1AccountBadgeOwnedBadgesResponseBody`                                                                              | [components.V1AccountBadgeOwnedBadgesResponseBody](../../models/components/v1accountbadgeownedbadgesresponsebody.md) | :heavy_minus_sign:                                                                                                   | OK                                                                                                                   |