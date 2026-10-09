# SubmissionKind

What kind of submission this is

## Example Usage

```typescript
import { SubmissionKind } from "@steamsets/client-ts/models/components";

let value: SubmissionKind = "bug";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bug" | "broken_profile" | "feature" | "feedback" | Unrecognized<string>
```