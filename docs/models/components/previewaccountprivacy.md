# PreviewAccountPrivacy

The privacy of the account

## Example Usage

```typescript
import { PreviewAccountPrivacy } from "@steamsets/client-ts/models/components";

let value: PreviewAccountPrivacy = "public";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"public" | "private" | "friends_only" | Unrecognized<string>
```