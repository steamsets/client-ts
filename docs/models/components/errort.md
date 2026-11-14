# ErrorT

Why the input has no account: it is neither a SteamID64 nor a vanity, Steam has no such account, or Steam did not answer.

## Example Usage

```typescript
import { ErrorT } from "@steamsets/client-ts/models/components";

let value: ErrorT = "invalid";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invalid" | "notFound" | "unavailable" | Unrecognized<string>
```