# Scope

What the key pushes for. account: a full key, for every bot and website you own. bots: a bot key, for the bots in allBots and botSteamIds. website: a website key, for the websites in listingIds

## Example Usage

```typescript
import { Scope } from "@steamsets/client-ts/models/components";

let value: Scope = "bots";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"account" | "bots" | "website" | Unrecognized<string>
```