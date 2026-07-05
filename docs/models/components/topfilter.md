# TopFilter

Restrict to accounts within the top-N of the leaderboard at either endpoint of the window. 'all' = no restriction (default).

## Example Usage

```typescript
import { TopFilter } from "@steamsets/client-ts/models/components";

let value: TopFilter = "1000";
```

## Values

```typescript
"10" | "50" | "100" | "500" | "1000" | "all"
```