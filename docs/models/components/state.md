# State

open, or closed when the owner lets only friends or nobody comment: the signed-out page draws an empty comment area for both

## Example Usage

```typescript
import { State } from "@steamsets/client-ts/models/components";

let value: State = "open";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "closed" | Unrecognized<string>
```