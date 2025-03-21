# V1AccountNameUpdate

## Example Usage

```typescript
import { V1AccountNameUpdate } from "@steamsets/client-ts/models/components";

let value: V1AccountNameUpdate = {
  name: {
    new: "steamsets",
    old: "steamsets",
  },
  updatedAt: new Date("2023-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | [components.HistoryValue](../../models/components/historyvalue.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the name was updated                                                                 | 2023-01-01T00:00:00Z                                                                          |