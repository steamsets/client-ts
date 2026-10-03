# ReviewStatus

Status of the badge's tag review queue row. Absent when the badge has no queue row.

## Example Usage

```typescript
import { ReviewStatus } from "@steamsets/client-ts/models/components";

let value: ReviewStatus = "skipped";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "done" | "skipped" | "auto" | Unrecognized<string>
```