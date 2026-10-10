# AccountArchiveNotificationsRequestBody

## Example Usage

```typescript
import { AccountArchiveNotificationsRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountArchiveNotificationsRequestBody = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `archived`                                                                    | *boolean*                                                                     | :heavy_minus_sign:                                                            | false moves the given notifications back to the inbox                         |
| `ids`                                                                         | *number*[]                                                                    | :heavy_minus_sign:                                                            | The notifications to change. Leave it out to archive every inbox notification |