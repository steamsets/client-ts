# AccountCompareBadgesResponse

## Example Usage

```typescript
import { AccountCompareBadgesResponse } from "@steamsets/client-ts/models/operations";

let value: AccountCompareBadgesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountCompareBadgesResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountCompareBadgesResponseBody.json",
    appBadges: [
      {
        appId: 950402,
        appImage: "<value>",
        appName: "<value>",
        badgeImage: "<value>",
        badgeName: "<value>",
        foilScarcity: 436121,
        hasFoil: false,
        isEvent: false,
        isSale: false,
        normalScarcity: 182437,
        steamId: 332813,
      },
    ],
    pages: 1,
    totalHits: 1,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                     | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `v1AccountCompareBadgesResponseBody`                                                                           | [components.V1AccountCompareBadgesResponseBody](../../models/components/v1accountcomparebadgesresponsebody.md) | :heavy_minus_sign:                                                                                             | OK                                                                                                             |