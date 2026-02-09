# DeveloperAppEnvironment

The environment of the developer app

## Example Usage

```typescript
import { DeveloperAppEnvironment } from "@steamsets/client-ts/models/components";

let value: DeveloperAppEnvironment = "production";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"production" | "development" | "staging" | Unrecognized<string>
```