# GroupGetGroupPrivacy

Who can join, as Steam reports it.

## Example Usage

```typescript
import { GroupGetGroupPrivacy } from "@steamsets/client-ts/models/components";

let value: GroupGetGroupPrivacy = "public";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"public" | "requestOnly" | "inviteOnly" | "hidden" | Unrecognized<string>
```