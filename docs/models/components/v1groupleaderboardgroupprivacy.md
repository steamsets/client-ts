# V1GroupLeaderboardGroupPrivacy

The privacy of the group

## Example Usage

```typescript
import { V1GroupLeaderboardGroupPrivacy } from "@steamsets/client-ts/models/components";

let value: V1GroupLeaderboardGroupPrivacy = "public";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"public" | "request_only" | "invite_only" | "hidden" | Unrecognized<string>
```