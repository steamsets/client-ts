# Outcome

The outcome of the verification

## Example Usage

```typescript
import { Outcome } from "@steamsets/client-ts/models/components";

let value: Outcome = "VALID";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"VALID" | "RATE_LIMITED" | "INVALID" | "EXPIRED" | "DISABLED" | "INSUFFICIENT_PERMISSIONS" | "FORBIDDEN" | "USAGE_EXCEEDED" | Unrecognized<string>
```