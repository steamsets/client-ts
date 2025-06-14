# State

## Example Usage

```typescript
import { State } from "@steamsets/client-ts/models/components";

let value: State = {
  cities: [],
  code: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `cities`                                             | [components.City](../../models/components/city.md)[] | :heavy_check_mark:                                   | The cities of the state                              |
| `code`                                               | *string*                                             | :heavy_check_mark:                                   | The code of the state                                |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | The name of the state                                |