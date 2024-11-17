# VanityStruct

## Example Usage

```typescript
import { VanityStruct } from "@steamsets/client-ts/models/components";

let value: VanityStruct = {
  type: "steam",
  value: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `type`                                                                     | [components.VanityStructType](../../models/components/vanitystructtype.md) | :heavy_check_mark:                                                         | Which type of vanity to search for                                         |
| `value`                                                                    | *string*                                                                   | :heavy_check_mark:                                                         | Vanity to search for                                                       |