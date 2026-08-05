# Environment

The environment to create the app for

## Example Usage

```typescript
import { Environment } from "@steamsets/client-ts/models/components";

let value: Environment = "production";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"production" | "development" | "staging" | Unrecognized<string>
```