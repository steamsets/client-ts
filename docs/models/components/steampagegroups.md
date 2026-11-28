# SteamPageGroups

## Example Usage

```typescript
import { SteamPageGroups } from "@steamsets/client-ts/models/components";

let value: SteamPageGroups = {
  shown: [
    {
      avatar: "73c981a19471f93e73f358770b1f5ff2c7363beb",
      members: 26,
      name: "developer",
    },
  ],
  total: 28,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `shown`                                                                  | [components.SteamPageGroup](../../models/components/steampagegroup.md)[] | :heavy_check_mark:                                                       | The groups the block lists, in Steam's order, the primary group first    |                                                                          |
| `total`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | The number next to Groups                                                | 28                                                                       |