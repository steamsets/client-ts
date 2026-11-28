# V1AdminListUsersRequestBodyOrderBy

The column the page is ordered by. Defaults to signedUp for new and lastSeen for active. bans orders by the ban count, status by restricted, opted out, hidden, none

## Example Usage

```typescript
import { V1AdminListUsersRequestBodyOrderBy } from "@steamsets/client-ts/models/components";

let value: V1AdminListUsersRequestBodyOrderBy = "level";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"signedUp" | "lastSeen" | "level" | "games" | "badges" | "name" | "bans" | "status" | Unrecognized<string>
```