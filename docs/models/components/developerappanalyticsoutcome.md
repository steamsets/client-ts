# DeveloperAppAnalyticsOutcome

## Example Usage

```typescript
import { DeveloperAppAnalyticsOutcome } from "@steamsets/client-ts/models/components";

let value: DeveloperAppAnalyticsOutcome = {
  count: 9876,
  outcome: "VALID",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `count`                                                  | *number*                                                 | :heavy_check_mark:                                       | The number of verifications with this outcome            | 9876                                                     |
| `outcome`                                                | [components.Outcome](../../models/components/outcome.md) | :heavy_check_mark:                                       | The outcome of the verification                          | VALID                                                    |