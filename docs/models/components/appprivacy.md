# AppPrivacy

The privacy of the account

## Example Usage

```typescript
import { AppPrivacy } from "@steamsets/client-ts/models/components";

let value: AppPrivacy = "public";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private" | "public" | "friends_only" | Unrecognized<string>
```