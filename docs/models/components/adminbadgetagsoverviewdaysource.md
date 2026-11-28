# AdminBadgeTagsOverviewDaySource

log: counted from the review log. approximate: before the log, counted from the queue's reviewed_at, which a revision moves to its own day.

## Example Usage

```typescript
import { AdminBadgeTagsOverviewDaySource } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsOverviewDaySource = "log";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"log" | "approximate" | Unrecognized<string>
```