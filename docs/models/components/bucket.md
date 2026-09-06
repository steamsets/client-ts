# Bucket

dead: no remaining craft can use it. surplus: owned exceeds remaining. keep: still needed

## Example Usage

```typescript
import { Bucket } from "@steamsets/client-ts/models/components";

let value: Bucket = "keep";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"dead" | "surplus" | "keep" | Unrecognized<string>
```