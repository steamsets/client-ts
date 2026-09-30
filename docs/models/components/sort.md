# Sort

Sort key. Equal keys keep the friendsSince order (newest first, then account id)

## Example Usage

```typescript
import { Sort } from "@steamsets/client-ts/models/components";

let value: Sort = "badges";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"friendsSince" | "level" | "badges" | "apps" | "playtime" | "name" | Unrecognized<string>
```