# ItemGetResponseBody

## Example Usage

```typescript
import { ItemGetResponseBody } from "@steamsets/client-ts/models/components";

let value: ItemGetResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/ItemGetResponseBody.json",
  items: [],
  missing: {
    appIds: [],
    classIds: [
      250886,
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `dollarSchema`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | A URL to the JSON Schema for this object.                              | https://api.steamsets.com/schemas/ItemGetResponseBody.json             |
| `items`                                                                | [components.ItemGetItem](../../models/components/itemgetitem.md)[]     | :heavy_check_mark:                                                     | In request order for classIds, by app for appIds.                      |                                                                        |
| `missing`                                                              | [components.ItemGetMissing](../../models/components/itemgetmissing.md) | :heavy_check_mark:                                                     | N/A                                                                    |                                                                        |