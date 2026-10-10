# AccountMarkNotificationsReadRequestBody

## Example Usage

```typescript
import { AccountMarkNotificationsReadRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountMarkNotificationsReadRequestBody = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `ids`                                                                           | *number*[]                                                                      | :heavy_minus_sign:                                                              | The notifications to change. Leave it out to mark every inbox notification read |
| `read`                                                                          | *boolean*                                                                       | :heavy_minus_sign:                                                              | false marks the given notifications unread                                      |