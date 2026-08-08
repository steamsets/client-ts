# Sort

Owner order. 'owned' (default) returns the most copies owned first. 'closest' reranks a wider slice of owners by friend path length, nearest first; it needs a logged-in caller and the first page (no offset, no cursor), and never returns a nextCursor.

## Example Usage

```typescript
import { Sort } from "@steamsets/client-ts/models/components";

let value: Sort = "owned";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"owned" | "closest" | Unrecognized<string>
```