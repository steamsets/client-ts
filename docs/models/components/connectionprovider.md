# ConnectionProvider

The provider to connect with

## Example Usage

```typescript
import { ConnectionProvider } from "@steamsets/client-ts/models/components";

let value: ConnectionProvider = "discord";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"discord" | "patreon" | "kick" | "reddit" | "twitch" | "youtube" | "x" | "domain" | Unrecognized<string>
```