# V1AccountLocationUpdate

## Example Usage

```typescript
import { V1AccountLocationUpdate } from "@steamsets/client-ts/models/components";

let value: V1AccountLocationUpdate = {
  city: {
    new: "steamsets",
    old: "steamsets",
  },
  countryCode: {
    new: "steamsets",
    old: "steamsets",
  },
  countryName: {
    new: "steamsets",
    old: "steamsets",
  },
  region: {
    new: "steamsets",
    old: "steamsets",
  },
  state: {
    new: "steamsets",
    old: "steamsets",
  },
  updatedAt: new Date("2023-01-01T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `city`                                                                                        | [components.HistoryValue](../../models/components/historyvalue.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `countryCode`                                                                                 | [components.HistoryValue](../../models/components/historyvalue.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `countryName`                                                                                 | [components.HistoryValue](../../models/components/historyvalue.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `region`                                                                                      | [components.HistoryValue](../../models/components/historyvalue.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `state`                                                                                       | [components.HistoryValue](../../models/components/historyvalue.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the location was updated                                                             | 2023-01-01T00:00:00Z                                                                          |