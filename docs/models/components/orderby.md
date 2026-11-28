# OrderBy

The column the page is ordered by. hidden orders every kind by its own time (hiddenAt), hiddenBy by kind (owner, self, staff), privacy public first and bans by the ban count. A missing value sorts last both ways

## Example Usage

```typescript
import { OrderBy } from "@steamsets/client-ts/models/components";

let value: OrderBy = "hidden";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"hidden" | "name" | "hiddenBy" | "level" | "games" | "badges" | "privacy" | "bans" | "restricted" | Unrecognized<string>
```