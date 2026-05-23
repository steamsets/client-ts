# TradingItemSearchItemsRequest

## Example Usage

```typescript
import { TradingItemSearchItemsRequest } from "@steamsets/client-ts/models/operations";

let value: TradingItemSearchItemsRequest = {
  tradingItemSearchItemsRequestBody: {
    query: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `xForwardedFor`                                                                                              | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `userAgent`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `xVisitorId`                                                                                                 | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `tradingItemSearchItemsRequestBody`                                                                          | [components.TradingItemSearchItemsRequestBody](../../models/components/tradingitemsearchitemsrequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |