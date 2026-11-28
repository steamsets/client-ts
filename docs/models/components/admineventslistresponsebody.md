# AdminEventsListResponseBody

## Example Usage

```typescript
import { AdminEventsListResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminEventsListResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminEventsListResponseBody.json",
  events: [],
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dollarSchema`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A URL to the JSON Schema for this object.                                | https://api.steamsets.com/schemas/AdminEventsListResponseBody.json       |
| `events`                                                                 | [components.AdminLiveEvent](../../models/components/adminliveevent.md)[] | :heavy_check_mark:                                                       | Newest first.                                                            |                                                                          |
| `nextCursor`                                                             | *string*                                                                 | :heavy_check_mark:                                                       | Pass as cursor for the next page. Null on the last page.                 |                                                                          |