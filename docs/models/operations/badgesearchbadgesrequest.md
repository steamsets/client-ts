# BadgeSearchBadgesRequest

## Example Usage

```typescript
import { BadgeSearchBadgesRequest } from "@steamsets/client-ts/models/operations";

let value: BadgeSearchBadgesRequest = {
  v1SearchRequest: {
    filter: "<value>",
    image: "base64_encoded_image",
    query: "<value>",
    sort: [
      "price:asc",
      "author:desc",
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `xForwardedFor`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `v1SearchRequest`                                                        | [components.V1SearchRequest](../../models/components/v1searchrequest.md) | :heavy_check_mark:                                                       | N/A                                                                      |