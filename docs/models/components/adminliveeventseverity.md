# AdminLiveEventSeverity

attention waits on staff; problem is something that failed.

## Example Usage

```typescript
import { AdminLiveEventSeverity } from "@steamsets/client-ts/models/components";

let value: AdminLiveEventSeverity = "attention";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"info" | "attention" | "problem" | Unrecognized<string>
```