# BotGetSetProgress

## Example Usage

```typescript
import { BotGetSetProgress } from "@steamsets/client-ts/models/components";

let value: BotGetSetProgress = {
  foil: false,
  level: 272135,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `foil`                                               | *boolean*                                            | :heavy_check_mark:                                   | Whether the caller crafted the foil badge.           |
| `level`                                              | *number*                                             | :heavy_check_mark:                                   | The caller's normal badge level, 0 when not crafted. |