# BotTrackEventKind

list: the bot's row was on screen in the directory. page: its page was opened. click: a click through to its Steam profile or trade link.

## Example Usage

```typescript
import { BotTrackEventKind } from "@steamsets/client-ts/models/components";

let value: BotTrackEventKind = "page";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"list" | "page" | "click" | Unrecognized<string>
```