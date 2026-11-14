# AdminBotBrandSaveRequestBody

## Example Usage

```typescript
import { AdminBotBrandSaveRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminBotBrandSaveRequestBody = {
  name: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Public id of the brand to edit. Omit to create one.                                           |
| `logoUrl`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sponsorRank`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Order among sponsored brands, lower first.                                                    |
| `sponsoredUntil`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | End of the paid placement. Omit for none.                                                     |
| `websiteUrl`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |