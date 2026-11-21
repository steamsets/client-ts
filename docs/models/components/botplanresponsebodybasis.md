# BotPlanResponseBodyBasis

account plans against your badges and XP. estimate plans without a session: from fromLevel with no badges crafted, so it can buy sets of badges you already have.

## Example Usage

```typescript
import { BotPlanResponseBodyBasis } from "@steamsets/client-ts/models/components";

let value: BotPlanResponseBodyBasis = "estimate";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"account" | "estimate" | Unrecognized<string>
```