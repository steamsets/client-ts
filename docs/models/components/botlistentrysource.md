# BotListEntrySource

push: the bot reports its own stock. scrape: we count it from the bot's inventory.

## Example Usage

```typescript
import { BotListEntrySource } from "@steamsets/client-ts/models/components";

let value: BotListEntrySource = "scrape";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"push" | "scrape" | Unrecognized<string>
```