# AdminBadgeTagsOverviewAcceptanceSource

log: the counts ApplyReview recorded at review time, exact. approximate: reviews before the log, comparing the stored suggestions with the badge's tags now, so later edits count as the scout's choice.

## Example Usage

```typescript
import { AdminBadgeTagsOverviewAcceptanceSource } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsOverviewAcceptanceSource = "log";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"log" | "approximate" | Unrecognized<string>
```