# SearchEventChip

## Example Usage

```typescript
import { SearchEventChip } from "@steamsets/client-ts/models/components";

let value: SearchEventChip = {
  key: "type",
  value: "foil",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `key`                                                   | *string*                                                | :heavy_check_mark:                                      | The filter the query reader made from the query's words | type                                                    |
| `value`                                                 | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | foil                                                    |