# Method

dns: a TXT record on the host. file: a file on the host, served over https.

## Example Usage

```typescript
import { Method } from "@steamsets/client-ts/models/components";

let value: Method = "dns";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"dns" | "file" | Unrecognized<string>
```