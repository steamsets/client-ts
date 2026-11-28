# DeveloperAppAccessKind

full: an account key for every route. push: a bot or website push key, managed from your bots or websites

## Example Usage

```typescript
import { DeveloperAppAccessKind } from "@steamsets/client-ts/models/components";

let value: DeveloperAppAccessKind = "push";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"full" | "push" | Unrecognized<string>
```