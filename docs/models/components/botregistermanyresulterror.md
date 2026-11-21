# BotRegisterManyResultError

Why the entry was not listed: the steamId is not an individual account's SteamID64 or is your own account, it appears earlier in this request, or the account is already yours or another owner's.

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