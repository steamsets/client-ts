# Plan

monthly pays keysPerPeriod for every calendar month. grandfathered paid the one-time fee from before monthly billing and pays nothing more. free pays nothing: a bot nobody runs, or a claim staff accepted before monthly billing.

## Example Usage

```typescript
import { Plan } from "@steamsets/client-ts/models/components";

let value: Plan = "free";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"monthly" | "grandfathered" | "free" | Unrecognized<string>
```