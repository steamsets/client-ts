# LeaderboardAccountPrivacy

The privacy of the account

## Example Usage

```typescript
import { LeaderboardAccountPrivacy } from "@steamsets/client-ts/models/components";

let value: LeaderboardAccountPrivacy = "public";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"public" | "private" | "friends_only" | Unrecognized<string>
```