# Reason

Why the account is leaving, from a preset list

## Example Usage

```typescript
import { Reason } from "@steamsets/client-ts/models/components";

let value: Reason = "privacy";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"privacy" | "not_useful" | "inaccurate_data" | "unwanted_attention" | "other" | Unrecognized<string>
```