# Country

## Example Usage

```typescript
import { Country } from "@steamsets/client-ts/models/components";

let value: Country = {
  code: "<value>",
  name: "<value>",
  states: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `code`                                                 | *string*                                               | :heavy_check_mark:                                     | The code of the country                                |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | The name of the country                                |
| `states`                                               | [components.State](../../models/components/state.md)[] | :heavy_check_mark:                                     | The states of the country                              |