# V1AccountVisibilityUpdateKind

Which visibility changed: profile, apps and friends are Steam's three privacy settings, steamsets is the site-level hidden toggle

## Example Usage

```typescript
import { V1AccountVisibilityUpdateKind } from "@steamsets/client-ts/models/components";

let value: V1AccountVisibilityUpdateKind = "profile";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"profile" | "apps" | "friends" | "steamsets" | Unrecognized<string>
```