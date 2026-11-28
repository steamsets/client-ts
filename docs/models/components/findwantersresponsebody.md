# FindWantersResponseBody

## Example Usage

```typescript
import { FindWantersResponseBody } from "@steamsets/client-ts/models/components";

let value: FindWantersResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/FindWantersResponseBody.json",
  items: [],
  locked: true,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                               | *string*                                                                                     | :heavy_minus_sign:                                                                           | A URL to the JSON Schema for this object.                                                    | https://api.steamsets.com/schemas/FindWantersResponseBody.json                               |
| `items`                                                                                      | [components.ItemWanters](../../models/components/itemwanters.md)[]                           | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `locked`                                                                                     | *boolean*                                                                                    | :heavy_check_mark:                                                                           | True when the caller's role does not include the wanter list. The totals are still returned. |                                                                                              |