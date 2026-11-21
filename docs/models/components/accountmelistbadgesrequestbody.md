# AccountMeListBadgesRequestBody

## Example Usage

```typescript
import { AccountMeListBadgesRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountMeListBadgesRequestBody = {
  appIds: [
    730,
  ],
  cursor: "730_normal",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `appIds`                                                              | *number*[]                                                            | :heavy_minus_sign:                                                    | Only these apps. Leave it out for every app.                          | [<br/>730<br/>]                                                       |
| `cursor`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | The nextCursor of the previous page. Leave it out for the first page. | 730_normal                                                            |
| `limit`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Badges per page.                                                      | 5000                                                                  |