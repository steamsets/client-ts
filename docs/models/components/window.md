# Window

Lookback window for trending compute. 24h is high-volatility (small samples); 7d is the default surface.

## Example Usage

```typescript
import { Window } from "@steamsets/client-ts/models/components";

let value: Window = "30d";
```

## Values

```typescript
"24h" | "7d" | "30d"
```