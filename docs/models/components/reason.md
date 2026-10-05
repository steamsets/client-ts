# Reason

Deprecated. A preset reason, kept for older clients. Defaults to other

## Example Usage

```typescript
import { Reason } from "@steamsets/client-ts/models/components";

let value: Reason = "other";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"privacy" | "not_useful" | "inaccurate_data" | "unwanted_attention" | "other" | Unrecognized<string>
```