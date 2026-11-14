# AdminBotBrandListResponseBody

## Example Usage

```typescript
import { AdminBotBrandListResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminBotBrandListResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminBotBrandListResponseBody.json",
  brands: [
    {
      id: "<id>",
      logo: {
        source: "website",
        url: "https://firm-airmail.com",
      },
      logoUrl: "https://everlasting-gymnast.org",
      name: "<value>",
      sponsorRank: 829216,
      sponsoredUntil: new Date("2026-07-17T11:26:59.698Z"),
      websiteUrl: "https://difficult-smoke.name/",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | A URL to the JSON Schema for this object.                                                | https://api.steamsets.com/schemas/AdminBotBrandListResponseBody.json                     |
| `brands`                                                                                 | [components.AdminBotBrandListEntry](../../models/components/adminbotbrandlistentry.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |