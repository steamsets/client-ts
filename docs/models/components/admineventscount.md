# AdminEventsCount

## Example Usage

```typescript
import { AdminEventsCount } from "@steamsets/client-ts/models/components";

let value: AdminEventsCount = {
  kind: "<value>",
  lastHour: 699658,
  lastMinute: 221949,
  severity: "problem",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `kind`                                                     | *string*                                                   | :heavy_check_mark:                                         | An event kind, as admin.events.list gives it.              |
| `lastHour`                                                 | *number*                                                   | :heavy_check_mark:                                         | Events of this kind and severity in the last hour.         |
| `lastMinute`                                               | *number*                                                   | :heavy_check_mark:                                         | Events of this kind and severity in the last minute.       |
| `severity`                                                 | [components.Severity](../../models/components/severity.md) | :heavy_check_mark:                                         | N/A                                                        |