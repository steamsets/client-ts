# GroupGetGroup

## Example Usage

```typescript
import { GroupGetGroup } from "@steamsets/client-ts/models/components";

let value: GroupGetGroup = {
  avatar: "https://loremflickr.com/3695/737?lock=4650701737261015",
  groupId: 541446,
  headline: "<value>",
  isRemoved: true,
  memberCount: 252690,
  name: "<value>",
  privacy: "public",
  tag: "<value>",
  vanity: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `avatar`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `foundedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `groupId`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `headline`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isRemoved`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Valve took the group's page down. Steam still answers for the group.                          |
| `memberCount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `privacy`                                                                                     | [components.GroupGetGroupPrivacy](../../models/components/groupgetgroupprivacy.md)            | :heavy_check_mark:                                                                            | Who can join, as Steam reports it.                                                            |
| `tag`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vanity`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | The name in steamcommunity.com/groups/<vanity>.                                               |