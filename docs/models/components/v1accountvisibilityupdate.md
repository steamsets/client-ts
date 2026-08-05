# V1AccountVisibilityUpdate

## Example Usage

```typescript
import { V1AccountVisibilityUpdate } from "@steamsets/client-ts/models/components";

let value: V1AccountVisibilityUpdate = {
  kind: "profile",
  updatedAt: new Date("2023-01-01T00:00:00Z"),
  visibility: {
    new: "steamsets",
    old: "steamsets",
  },
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       | Example                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                            | [components.Kind](../../models/components/kind.md)                                                                                | :heavy_check_mark:                                                                                                                | Which visibility changed: profile, apps and friends are Steam's three privacy settings, steamsets is the site-level hidden toggle | profile                                                                                                                           |
| `updatedAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | The time the visibility was changed                                                                                               | 2023-01-01T00:00:00Z                                                                                                              |
| `visibility`                                                                                                                      | [components.HistoryValue](../../models/components/historyvalue.md)                                                                | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |                                                                                                                                   |