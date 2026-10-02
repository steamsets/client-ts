# V1AccountListCraftedLevelsResponseBody

## Example Usage

```typescript
import { V1AccountListCraftedLevelsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListCraftedLevelsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListCraftedLevelsResponseBody.json",
  badgesUpdatedAt: new Date("2023-01-01T00:00:00Z"),
  foil: [
    730,
  ],
  normal: [],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A URL to the JSON Schema for this object.                                                            | https://api.steamsets.com/schemas/V1AccountListCraftedLevelsResponseBody.json                        |
| `badgesUpdatedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | The time the account's badges were last updated                                                      | 2023-01-01T00:00:00Z                                                                                 |
| `foil`                                                                                               | *number*[]                                                                                           | :heavy_check_mark:                                                                                   | App ids with a crafted foil badge                                                                    | [<br/>730<br/>]                                                                                      |
| `normal`                                                                                             | [components.V1AccountCraftedLevelsNormal](../../models/components/v1accountcraftedlevelsnormal.md)[] | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |