# V1AdminCmsVersionsResponseBody

## Example Usage

```typescript
import { V1AdminCmsVersionsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminCmsVersionsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminCmsVersionsResponseBody.json",
  versions: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dollarSchema`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A URL to the JSON Schema for this object.                                | https://api.steamsets.com/schemas/V1AdminCmsVersionsResponseBody.json    |
| `versions`                                                               | [components.CmsVersionItem](../../models/components/cmsversionitem.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |