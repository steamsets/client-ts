# TradeWebsiteListingFee

## Example Usage

```typescript
import { TradeWebsiteListingFee } from "@steamsets/client-ts/models/components";

let value: TradeWebsiteListingFee = {
  keys: 868025,
  tradeUrl: "https://woeful-event.info/",
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `keys`                                                                                                                                                          | *number*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | TF2 keys a website's listing costs per month, from the listing_fee_website_keys setting. The website goes live once the first month and the host proof are in.  |
| `tradeUrl`                                                                                                                                                      | *string*                                                                                                                                                        | :heavy_check_mark:                                                                                                                                              | Trade offer URL to send the keys to. Name the website's public id or host in the offer message to pay it before your other listings. Empty when not configured. |