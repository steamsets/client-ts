# V1AccountVanityUpdate

## Example Usage

```typescript
import { V1AccountVanityUpdate } from "@steamsets/client-ts/models/components";

let value: V1AccountVanityUpdate = {
  updatedAt: new Date("2023-01-01T00:00:00Z"),
  vanity: {
    new: "steamsets",
    old: "steamsets",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the vanity was updated                                                               | 2023-01-01T00:00:00Z                                                                          |
| `vanity`                                                                                      | [components.HistoryValue](../../models/components/historyvalue.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |