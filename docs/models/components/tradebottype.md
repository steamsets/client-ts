# TradeBotType

What the bot trades, in the categories other directories use. Staff set it; pushing bots are not asked for it, so read offers for what a bot does.

## Example Usage

```typescript
import { TradeBotType } from "@steamsets/client-ts/models/components";

let value: TradeBotType = "swap";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"levelup" | "foil" | "gem" | "crypto" | "holiday" | "swap" | "buying" | "game" | "other" | Unrecognized<string>
```