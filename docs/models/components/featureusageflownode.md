# FeatureUsageFlowNode

## Example Usage

```typescript
import { FeatureUsageFlowNode } from "@steamsets/client-ts/models/components";

let value: FeatureUsageFlowNode = {
  event: "tools-handshake-start",
  folded: 930831,
  id: "1:tools-handshake-start",
  kind: "page",
  left: 327610,
  sessions: 617035,
  step: 248070,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         | Example                                                                                             |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `event`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The custom event of an event node; empty for page and other                                         | tools-handshake-start                                                                               |
| `folded`                                                                                            | *number*                                                                                            | :heavy_check_mark:                                                                                  | How many events an other node holds                                                                 |                                                                                                     |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | The node's id in this flow: 0 is the page view, then <step>:<event>, and <step>:* for other         | 1:tools-handshake-start                                                                             |
| `kind`                                                                                              | [components.FeatureUsageFlowNodeKind](../../models/components/featureusageflownodekind.md)          | :heavy_check_mark:                                                                                  | page is the sessions with a page view; other holds the events of a step outside its five most taken |                                                                                                     |
| `left`                                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | Sessions at this node that took no further step                                                     |                                                                                                     |
| `sessions`                                                                                          | *number*                                                                                            | :heavy_check_mark:                                                                                  | Sessions at this node                                                                               |                                                                                                     |
| `step`                                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | 0 is the page view, 1 to 3 the first three events                                                   |                                                                                                     |