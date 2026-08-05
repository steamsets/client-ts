# Kind

Which visibility changed: profile, apps and friends are Steam's three privacy settings, steamsets is the site-level hidden toggle

## Example Usage

```typescript
import { Kind } from "@steamsets/client-ts/models/components";

let value: Kind = "profile";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"profile" | "apps" | "friends" | "steamsets" | Unrecognized<string>
```