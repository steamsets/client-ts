# AdminBotListResponseBody

## Example Usage

```typescript
import { AdminBotListResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminBotListResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminBotListResponseBody.json",
  bots: [],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `dollarSchema`                                                  | *string*                                                        | :heavy_minus_sign:                                              | A URL to the JSON Schema for this object.                       | https://api.steamsets.com/schemas/AdminBotListResponseBody.json |
| `bots`                                                          | [components.TradeBot](../../models/components/tradebot.md)[]    | :heavy_check_mark:                                              | Oldest first, each with its review state in listing.            |                                                                 |