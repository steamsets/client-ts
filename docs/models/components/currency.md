# Currency

Only bots that trade in this currency, in any market. Omit for every bot.

## Example Usage

```typescript
import { Currency } from "@steamsets/client-ts/models/components";

let value: Currency = "cs2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"tf2" | "cs2" | "hydra" | "tod" | "gems" | Unrecognized<string>
```