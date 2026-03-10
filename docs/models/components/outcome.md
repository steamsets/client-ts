# Outcome

The outcome of the verification

## Example Usage

```typescript
import { Outcome } from "@steamsets/client-ts/models/components";

let value: Outcome = "VALID";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"VALID" | "RATE_LIMITED" | "INVALID" | "EXPIRED" | "DISABLED" | "INSUFFICIENT_PERMISSIONS" | "FORBIDDEN" | "USAGE_EXCEEDED" | Unrecognized<string>
```