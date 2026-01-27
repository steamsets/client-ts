# V1AccountGetSettingsBodyPrivacy

The privacy of the account

## Example Usage

```typescript
import { V1AccountGetSettingsBodyPrivacy } from "@steamsets/client-ts/models/components";

let value: V1AccountGetSettingsBodyPrivacy = "public";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"public" | "private" | "friends_only" | Unrecognized<string>
```