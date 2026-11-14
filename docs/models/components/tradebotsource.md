# TradeBotSource

push: the bot reports its own data. scrape: we count its stock from its inventory.

## Example Usage

```typescript
import { TradeBotSource } from "@steamsets/client-ts/models/components";

let value: TradeBotSource = "scrape";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"push" | "scrape" | Unrecognized<string>
```