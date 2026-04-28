# V1ActivityListAccountFeedResponseBody

## Example Usage

```typescript
import { V1ActivityListAccountFeedResponseBody } from "@steamsets/client-ts/models/components";

let value: V1ActivityListAccountFeedResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1ActivityListAccountFeedResponseBody.json",
  events: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | A URL to the JSON Schema for this object.                                                        | https://api.steamsets.com/schemas/V1ActivityListAccountFeedResponseBody.json                     |
| `events`                                                                                         | [components.V1ActivityAccountFeedEvent](../../models/components/v1activityaccountfeedevent.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |