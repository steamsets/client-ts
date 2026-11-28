# SteamPageGroup

## Example Usage

```typescript
import { SteamPageGroup } from "@steamsets/client-ts/models/components";

let value: SteamPageGroup = {
  avatar: "73c981a19471f93e73f358770b1f5ff2c7363beb",
  members: 26,
  name: "developer",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `avatar`                                 | *string*                                 | :heavy_check_mark:                       | The hash of the group's avatar           | 73c981a19471f93e73f358770b1f5ff2c7363beb |
| `members`                                | *number*                                 | :heavy_check_mark:                       | The member count the block prints        | 26                                       |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | The group's name                         | developer                                |