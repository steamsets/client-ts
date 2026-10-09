# V1SubmissionsCreateRequestBodyKind

What kind of submission this is. feature and feedback need a signed-in account

## Example Usage

```typescript
import { V1SubmissionsCreateRequestBodyKind } from "@steamsets/client-ts/models/components";

let value: V1SubmissionsCreateRequestBodyKind = "bug";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bug" | "broken_profile" | "feature" | "feedback" | Unrecognized<string>
```