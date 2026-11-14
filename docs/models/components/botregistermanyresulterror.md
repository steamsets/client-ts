# BotRegisterManyResultError

Why the entry was not listed: the steamId is not an individual account's SteamID64, it appears earlier in this request, or the account is already listed.

## Example Usage

```typescript
import { BotRegisterManyResultError } from "@steamsets/client-ts/models/components";

let value: BotRegisterManyResultError = "alreadyListed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invalidSteamId" | "repeated" | "alreadyListed" | Unrecognized<string>
```