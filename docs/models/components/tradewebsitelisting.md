# TradeWebsiteListing

## Example Usage

```typescript
import { TradeWebsiteListing } from "@steamsets/client-ts/models/components";

let value: TradeWebsiteListing = {
  billing: {
    graceUntil: new Date("2026-12-06T17:02:53.025Z"),
    keysPerPeriod: 827168,
    paidThrough: new Date("2026-06-03T19:14:14.767Z"),
    plan: "grandfathered",
    standing: "free",
  },
  createdAt: new Date("2024-09-05T05:05:15.944Z"),
  hiddenReason: "<value>",
  isHiddenByStaff: false,
  isListed: false,
  listingFeePaid: true,
  sponsoredUntil: new Date("2025-09-26T08:24:35.825Z"),
  status: "disabled",
  verification: {
    methods: [],
    verified: true,
    verifiedAt: new Date("2024-03-07T22:50:41.409Z"),
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `billing`                                                                                     | [components.TradeBotBilling](../../models/components/tradebotbilling.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `hiddenReason`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Why staff hid the website. Empty when they gave no reason or it is not hidden.                |
| `isHiddenByStaff`                                                                             | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Staff hid the website from everyone but its owner and staff, whatever isListed says.          |
| `isListed`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether everyone sees the website once it is approved. Set it with bot.setListed.             |
| `listingFeePaid`                                                                              | *boolean*                                                                                     | :heavy_check_mark:                                                                            | The first month arrived. A website goes live once this and its host proof are both in.        |
| `sponsoredUntil`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When staff's placement in the sponsored group ends. Null when there is none.                  |
| `status`                                                                                      | [components.TradeWebsiteListingStatus](../../models/components/tradewebsitelistingstatus.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `verification`                                                                                | [components.TradeWebsiteVerification](../../models/components/tradewebsiteverification.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |