# V1AccountFriendPrivacy

The privacy of the account

## Example Usage

```typescript
import { V1AccountFriendPrivacy } from "@steamsets/client-ts/models/components";

let value: V1AccountFriendPrivacy = "public";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"public" | "private" | "friends_only" | Unrecognized<string>
```