# AccountListSpareCardsResponseBody

## Example Usage

```typescript
import { AccountListSpareCardsResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountListSpareCardsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountListSpareCardsResponseBody.json",
  cards: [
    {
      appId: 386257,
      appName: "<value>",
      badgeImage: "<value>",
      badgeLevel: 441769,
      classId: 478127,
      icon: "<value>",
      isFoil: false,
      name: "<value>",
      owned: 5754,
      spare: 882090,
      type: 832202,
      wanters: 794411,
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dollarSchema`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A URL to the JSON Schema for this object.                                | https://api.steamsets.com/schemas/AccountListSpareCardsResponseBody.json |
| `cards`                                                                  | [components.SpareCard](../../models/components/sparecard.md)[]           | :heavy_check_mark:                                                       | Spare cards that another account wants, most wanted first                |                                                                          |