# DonateKeys

## Example Usage

```typescript
import { DonateKeys } from "@steamsets/client-ts/models/components";

let value: DonateKeys = {
  keyCents: 160,
  tradeUrl:
    "https://steamcommunity.com/tradeoffer/new/?partner=123456789&token=aB3dE_-9",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `keyCents`                                                                  | *number*                                                                    | :heavy_check_mark:                                                          | What one key credits, in US cents                                           | 160                                                                         |
| `tradeUrl`                                                                  | *string*                                                                    | :heavy_check_mark:                                                          | The donation bot's Steam trade URL. Empty when key donations are off.       | https://steamcommunity.com/tradeoffer/new/?partner=123456789&token=aB3dE_-9 |