# Tier

The tier to set (tier_1, tier_2, tier_3, tier_mythic). Empty to remove override.

## Example Usage

```typescript
import { Tier } from "@steamsets/client-ts/models/components";

let value: Tier = "tier_2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"tier_1" | "tier_2" | "tier_3" | "tier_mythic" | "" | Unrecognized<string>
```