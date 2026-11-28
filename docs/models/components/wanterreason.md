# WanterReason

Why the account wants the card: it needs it to finish a set, has it on its wishlist, or watches it

## Example Usage

```typescript
import { WanterReason } from "@steamsets/client-ts/models/components";

let value: WanterReason = "set";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"set" | "wishlist" | "watch" | Unrecognized<string>
```