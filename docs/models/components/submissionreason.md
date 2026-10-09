# SubmissionReason

Preset reason of a broken_profile report. Null for other kinds

## Example Usage

```typescript
import { SubmissionReason } from "@steamsets/client-ts/models/components";

let value: SubmissionReason = "wrong_badges";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"not_updating" | "wrong_badges" | "wrong_level" | "wrong_games" | "missing_data" | "other" | Unrecognized<string>
```