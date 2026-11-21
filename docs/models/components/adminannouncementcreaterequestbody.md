# AdminAnnouncementCreateRequestBody

## Example Usage

```typescript
import { AdminAnnouncementCreateRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminAnnouncementCreateRequestBody = {
  enabled: false,
  level: "warning",
  text: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the toggle is on                                                                      |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `level`                                                                                       | [components.Level](../../models/components/level.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `product`                                                                                     | [components.Product](../../models/components/product.md)                                      | :heavy_minus_sign:                                                                            | The product that shows it; steamsets when unset                                               |
| `reason`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Why, for the audit log                                                                        |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `text`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The banner text, at most 280 characters                                                       |