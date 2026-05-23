# GroupSearchRequest

## Example Usage

```typescript
import { GroupSearchRequest } from "@steamsets/client-ts/models/operations";

let value: GroupSearchRequest = {
  groupSearchRequestBody: {
    query: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `xForwardedFor`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `userAgent`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `xVisitorId`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `groupSearchRequestBody`                                                               | [components.GroupSearchRequestBody](../../models/components/groupsearchrequestbody.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |