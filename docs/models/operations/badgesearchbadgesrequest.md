# BadgeSearchBadgesRequest

## Example Usage

```typescript
import { BadgeSearchBadgesRequest } from "@steamsets/client-ts/models/operations";

let value: BadgeSearchBadgesRequest = {
  v1BadgeSearchBadgesRequestBody: {
    query: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `xForwardedFor`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `userAgent`                                                                                            | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `xVisitorId`                                                                                           | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `v1BadgeSearchBadgesRequestBody`                                                                       | [components.V1BadgeSearchBadgesRequestBody](../../models/components/v1badgesearchbadgesrequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |