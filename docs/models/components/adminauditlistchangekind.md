# AdminAuditListChangeKind

How to read before and after: cents is US cents, list is comma-separated, account is an account id, time is RFC 3339.

## Example Usage

```typescript
import { AdminAuditListChangeKind } from "@steamsets/client-ts/models/components";

let value: AdminAuditListChangeKind = "text";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"text" | "cents" | "bool" | "number" | "list" | "account" | "time" | Unrecognized<string>
```