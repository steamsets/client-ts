# BotListResponseBody

## Example Usage

```typescript
import { BotListResponseBody } from "@steamsets/client-ts/models/components";

let value: BotListResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/BotListResponseBody.json",
  bots: [],
  brands: [],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                 | *string*                                                                                       | :heavy_minus_sign:                                                                             | A URL to the JSON Schema for this object.                                                      | https://api.steamsets.com/schemas/BotListResponseBody.json                                     |
| `bots`                                                                                         | [components.BotListEntry](../../models/components/botlistentry.md)[]                           | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |
| `brands`                                                                                       | [components.BotListBrand](../../models/components/botlistbrand.md)[]                           | :heavy_check_mark:                                                                             | Brands with at least one listed bot: sponsored first, in display order, then the rest by name. |                                                                                                |