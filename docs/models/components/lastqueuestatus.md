# LastQueueStatus

## Example Usage

```typescript
import { LastQueueStatus } from "@steamsets/client-ts/models/components";

let value: LastQueueStatus = "undefined";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"undefined" | "pending" | "in_progress" | "completed" | Unrecognized<string>
```