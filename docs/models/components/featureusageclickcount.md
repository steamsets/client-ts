# FeatureUsageClickCount

## Example Usage

```typescript
import { FeatureUsageClickCount } from "@steamsets/client-ts/models/components";

let value: FeatureUsageClickCount = {
  clicks: 111654,
  section: "handshake-graph",
  sessions: 394493,
  target: "button",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `clicks`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `section`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | The data-report-section the click landed in, or page outside any; empty in a total over sections | handshake-graph                                                                                  |
| `sessions`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `target`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | What was clicked: button, link, input, tab, menuitem or other; empty in a total over targets     | button                                                                                           |