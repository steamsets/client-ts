# TradeBotListing

## Example Usage

```typescript
import { TradeBotListing } from "@steamsets/client-ts/models/components";

let value: TradeBotListing = {
  createdAt: new Date("2025-10-25T14:11:50.818Z"),
  listingFeePaid: true,
  status: "rejected",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `listingFeePaid`                                                                              | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Staff confirmed the one-key listing fee. Scrape bots pay none.                                |
| `status`                                                                                      | [components.TradeBotListingStatus](../../models/components/tradebotlistingstatus.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |