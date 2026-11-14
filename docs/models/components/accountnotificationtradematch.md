# AccountNotificationTradeMatch

## Example Usage

```typescript
import { AccountNotificationTradeMatch } from "@steamsets/client-ts/models/components";

let value: AccountNotificationTradeMatch = {
  cards: [
    {
      accounts: 789010,
      appId: 534563,
      appName: "<value>",
      cardName: "<value>",
      classId: 959765,
      icon: "<value>",
      isFoil: true,
      missingInSet: 545604,
      people: [],
    },
  ],
  locked: true,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `cards`                                                                                                        | [components.AccountNotificationTradeMatchCard](../../models/components/accountnotificationtradematchcard.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `locked`                                                                                                       | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | True when the reader's role does not include the names: each card has its account count and no people          |