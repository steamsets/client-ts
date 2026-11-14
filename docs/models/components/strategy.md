# Strategy

cheapest spends the least, however many bots that takes. fewestTrades buys the same sets from as few bots as it can, for at most 5% (or one unit) more than the cheapest plan. When stock or the budget runs out before the target, both give the cheapest plan.

## Example Usage

```typescript
import { Strategy } from "@steamsets/client-ts/models/components";

let value: Strategy = "fewestTrades";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"cheapest" | "fewestTrades" | Unrecognized<string>
```