# FeatureUsageFlowLink

## Example Usage

```typescript
import { FeatureUsageFlowLink } from "@steamsets/client-ts/models/components";

let value: FeatureUsageFlowLink = {
  sessions: 354314,
  source: "0",
  target: "1:tools-handshake-start",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `sessions`                                | *number*                                  | :heavy_check_mark:                        | N/A                                       |                                           |
| `source`                                  | *string*                                  | :heavy_check_mark:                        | The id of the node the sessions came from | 0                                         |
| `target`                                  | *string*                                  | :heavy_check_mark:                        | The id of the node they went to           | 1:tools-handshake-start                   |