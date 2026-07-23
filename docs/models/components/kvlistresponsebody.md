# KvListResponseBody

## Example Usage

```typescript
import { KvListResponseBody } from "@steamsets/client-ts/models/components";

let value: KvListResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/KvListResponseBody.json",
  entries: [
    {
      key: "<key>",
      namespace: "<value>",
      updatedAt: new Date("2026-08-25T10:08:47.228Z"),
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `dollarSchema`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | A URL to the JSON Schema for this object.                          | https://api.steamsets.com/schemas/KvListResponseBody.json          |
| `entries`                                                          | [components.KvListEntry](../../models/components/kvlistentry.md)[] | :heavy_check_mark:                                                 | The stored key/value entries                                       |                                                                    |