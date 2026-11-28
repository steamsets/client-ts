# AdminBotBrandSaveResponseBody

## Example Usage

```typescript
import { AdminBotBrandSaveResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminBotBrandSaveResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminBotBrandSaveResponseBody.json",
  brand: {
    id: "<id>",
    logoUrl: "https://curly-flat.com",
    name: "<value>",
    sponsorRank: 739547,
    sponsoredUntil: new Date("2024-01-26T14:06:43.077Z"),
    websiteUrl: "https://teeming-blowgun.org",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                         | *string*                                                                               | :heavy_minus_sign:                                                                     | A URL to the JSON Schema for this object.                                              | https://api.steamsets.com/schemas/AdminBotBrandSaveResponseBody.json                   |
| `brand`                                                                                | [components.AdminBotBrandSaveBrand](../../models/components/adminbotbrandsavebrand.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |