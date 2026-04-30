# FindOwnersResponseBody

## Example Usage

```typescript
import { FindOwnersResponseBody } from "@steamsets/client-ts/models/components";

let value: FindOwnersResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/FindOwnersResponseBody.json",
  items: [
    {
      classId: 976286,
      owners: [],
      totalOwners: 239421,
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/FindOwnersResponseBody.json    |
| `items`                                                          | [components.ItemOwners](../../models/components/itemowners.md)[] | :heavy_check_mark:                                               | N/A                                                              |                                                                  |