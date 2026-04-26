# V1ActivityListAccountFeedRequestBody

## Example Usage

```typescript
import { V1ActivityListAccountFeedRequestBody } from "@steamsets/client-ts/models/components";

let value: V1ActivityListAccountFeedRequestBody = {
  accountId: 864484,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountId`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | Steam account id (uint32).                                                                    |
| `cursor`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Occurred-at of the last event from the previous page. Omit for the most recent page.          |
| `eventTypes`                                                                                  | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Filter to these event_type values. Empty = all.                                               |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Max events returned.                                                                          |