# AdminBotBrandSaveBrand

## Example Usage

```typescript
import { AdminBotBrandSaveBrand } from "@steamsets/client-ts/models/components";

let value: AdminBotBrandSaveBrand = {
  id: "<id>",
  logoUrl: "https://acceptable-adaptation.name/",
  name: "<value>",
  sponsorRank: 609408,
  sponsoredUntil: new Date("2026-01-02T14:29:06.440Z"),
  websiteUrl: "https://moral-pocket-watch.com",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The brand's public id.                                                                        |
| `logoUrl`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sponsorRank`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sponsoredUntil`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `websiteUrl`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |