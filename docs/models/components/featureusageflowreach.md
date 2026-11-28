# FeatureUsageFlowReach

## Example Usage

```typescript
import { FeatureUsageFlowReach } from "@steamsets/client-ts/models/components";

let value: FeatureUsageFlowReach = {
  event: "tools-path-result",
  sessions: 582613,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `event`                                          | *string*                                         | :heavy_check_mark:                               | N/A                                              | tools-path-result                                |
| `sessions`                                       | *number*                                         | :heavy_check_mark:                               | Viewing sessions that sent the event at any step |                                                  |