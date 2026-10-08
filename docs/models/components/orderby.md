# OrderBy

The column the page is ordered by. Defaults to signedUp for new and lastSeen for active

## Example Usage

```typescript
import { OrderBy } from "@steamsets/client-ts/models/components";

let value: OrderBy = "level";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"signedUp" | "lastSeen" | "level" | "games" | "badges" | Unrecognized<string>
```