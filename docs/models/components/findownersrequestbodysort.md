# FindOwnersRequestBodySort

Owner order. 'owned' (default) returns the most copies owned first. 'closest' reranks a wider slice of owners by friend path length, nearest first; it needs a logged-in caller, takes no offset, and pages through that slice with nextCursor.

## Example Usage

```typescript
import { FindOwnersRequestBodySort } from "@steamsets/client-ts/models/components";

let value: FindOwnersRequestBodySort = "owned";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"owned" | "closest" | Unrecognized<string>
```