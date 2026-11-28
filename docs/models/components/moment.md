# Moment

due_soon: the paid month ends soon. grace: it ended and the listing is public until graceUntil. lapsed: the grace ended and the listing is hidden until paid

## Example Usage

```typescript
import { Moment } from "@steamsets/client-ts/models/components";

let value: Moment = "grace";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"due_soon" | "grace" | "lapsed" | Unrecognized<string>
```