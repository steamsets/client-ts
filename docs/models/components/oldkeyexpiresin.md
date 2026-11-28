# OldKeyExpiresIn

How long the old key keeps working, so the bot can switch without failed pushes. now ends it at once. A key from before Unkey always ends at once.

## Example Usage

```typescript
import { OldKeyExpiresIn } from "@steamsets/client-ts/models/components";

let value: OldKeyExpiresIn = "7d";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"now" | "1h" | "24h" | "7d" | Unrecognized<string>
```