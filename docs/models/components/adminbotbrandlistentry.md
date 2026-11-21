# AdminBotBrandListEntry

## Example Usage

```typescript
import { AdminBotBrandListEntry } from "@steamsets/client-ts/models/components";

let value: AdminBotBrandListEntry = {
  id: "<id>",
  logo: {
    source: "website",
    url: "https://firm-airmail.com",
  },
  logoUrl: "https://terrible-premium.name",
  name: "<value>",
  sponsorRank: 493873,
  sponsoredUntil: null,
  websiteUrl: "https://well-lit-markup.org",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The brand's public id.                                                                        |
| `logo`                                                                                        | [components.AdminBotBrandListLogo](../../models/components/adminbotbrandlistlogo.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `logoUrl`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The stored logo, which the brand dialog edits. Empty when none is stored.                     |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sponsorRank`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sponsoredUntil`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `websiteUrl`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |