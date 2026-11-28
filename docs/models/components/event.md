# Event

hidden and visible are the owner's toggle, opted_out the opt-out in force, restricted and lifted a staff restriction

## Example Usage

```typescript
import { Event } from "@steamsets/client-ts/models/components";

let value: Event = "hidden";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"hidden" | "visible" | "opted_out" | "restricted" | "lifted" | Unrecognized<string>
```