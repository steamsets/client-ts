# V1AdminCmsListResponseBody

## Example Usage

```typescript
import { V1AdminCmsListResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminCmsListResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminCmsListResponseBody.json",
  items: [],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `dollarSchema`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | A URL to the JSON Schema for this object.                            | https://api.steamsets.com/schemas/V1AdminCmsListResponseBody.json    |
| `items`                                                              | [components.AdminCmsItem](../../models/components/admincmsitem.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |