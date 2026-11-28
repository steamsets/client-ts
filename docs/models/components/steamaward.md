# SteamAward

## Example Usage

```typescript
import { SteamAward } from "@steamsets/client-ts/models/components";

let value: SteamAward = {
  given: 3,
  reactionId: 13,
  received: 128,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `given`                          | *number*                         | :heavy_check_mark:               | Times the account gave it        | 3                                |
| `reactionId`                     | *number*                         | :heavy_check_mark:               | Steam's reaction id of the award | 13                               |
| `received`                       | *number*                         | :heavy_check_mark:               | Times the account received it    | 128                              |