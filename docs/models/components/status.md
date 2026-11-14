# Status

late: no success within 2x the expected interval; stuck: none within 4x, or 3 failed runs in a row; idle: not expected to run right now; unknown: never recorded a run

## Example Usage

```typescript
import { Status } from "@steamsets/client-ts/models/components";

let value: Status = "idle";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ok" | "late" | "stuck" | "idle" | "unknown" | Unrecognized<string>
```