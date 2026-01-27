# Privacy

The privacy of the account

## Example Usage

```typescript
import { Privacy } from "@steamsets/client-ts/models/components";

let value: Privacy = "public";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private" | "public" | "friends_only" | Unrecognized<string>
```