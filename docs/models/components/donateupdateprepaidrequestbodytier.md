# DonateUpdatePrepaidRequestBodyTier

The tier the balance pays for. A higher tier than the one paid this month is charged the difference now when the balance covers it; anything else starts with the next month.

## Example Usage

```typescript
import { DonateUpdatePrepaidRequestBodyTier } from "@steamsets/client-ts/models/components";

let value: DonateUpdatePrepaidRequestBodyTier = "tier_2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"tier_1" | "tier_2" | "tier_3" | "tier_mythic" | Unrecognized<string>
```