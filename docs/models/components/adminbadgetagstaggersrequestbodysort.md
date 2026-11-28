# AdminBadgeTagsTaggersRequestBodySort

What the list sorts by. name is the scout's Steam name, pace the median time one review took.

## Example Usage

```typescript
import { AdminBadgeTagsTaggersRequestBodySort } from "@steamsets/client-ts/models/components";

let value: AdminBadgeTagsTaggersRequestBodySort = "skips";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"reviews" | "tagsAdded" | "overturned" | "lastActive" | "claims" | "name" | "skips" | "removed" | "pace" | Unrecognized<string>
```