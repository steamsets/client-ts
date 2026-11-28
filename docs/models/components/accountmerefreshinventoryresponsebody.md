# AccountMeRefreshInventoryResponseBody

## Example Usage

```typescript
import { AccountMeRefreshInventoryResponseBody } from "@steamsets/client-ts/models/components";

let value: AccountMeRefreshInventoryResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AccountMeRefreshInventoryResponseBody.json",
  nextRefreshAt: new Date("2024-01-29T22:20:27.463Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AccountMeRefreshInventoryResponseBody.json                  |
| `nextRefreshAt`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The earliest time of the next refresh.                                                        |                                                                                               |