# DonateItems

## Example Usage

```typescript
import { DonateItems } from "@steamsets/client-ts/models/components";

let value: DonateItems = {
  tradeUrl:
    "https://steamcommunity.com/tradeoffer/new/?partner=123456789&token=aB3dE_-9",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `tradeUrl`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | The Steam trade URL for item donations. Empty when item donations are off.  | https://steamcommunity.com/tradeoffer/new/?partner=123456789&token=aB3dE_-9 |