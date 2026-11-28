# AccountMeListAppIDsResponseBodyAppPrivacy

Who may see your game details on Steam. Steam lists owned games only when they are public, so anything else means appIds is empty or old.

## Example Usage

```typescript
import { AccountMeListAppIDsResponseBodyAppPrivacy } from "@steamsets/client-ts/models/components";

let value: AccountMeListAppIDsResponseBodyAppPrivacy = "friendsOnly";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"public" | "friendsOnly" | "private" | Unrecognized<string>
```