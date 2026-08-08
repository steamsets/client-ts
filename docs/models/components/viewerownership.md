# ViewerOwnership

Compare against the authenticated caller: 'owned' keeps badges the caller also has, 'missing' keeps badges only the listed account has. Level-agnostic — the caller owns a badge if they hold it at any level. Requires authentication

## Example Usage

```typescript
import { ViewerOwnership } from "@steamsets/client-ts/models/components";

let value: ViewerOwnership = "missing";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"owned" | "missing" | Unrecognized<string>
```