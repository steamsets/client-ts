# Standing

free: nothing to pay. active: paid through now or later. grace: the paid months ended, and the bot stays public until graceUntil. lapsed: past graceUntil, so only you and staff see the bot until you pay again; it keeps its review status. unpaid: monthly and never paid, so it is not live yet.

## Example Usage

```typescript
import { Standing } from "@steamsets/client-ts/models/components";

let value: Standing = "unpaid";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"free" | "active" | "grace" | "lapsed" | "unpaid" | Unrecognized<string>
```