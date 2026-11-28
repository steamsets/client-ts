# AdminAnnouncementListResponseBody

## Example Usage

```typescript
import { AdminAnnouncementListResponseBody } from "@steamsets/client-ts/models/components";

let value: AdminAnnouncementListResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminAnnouncementListResponseBody.json",
  items: [],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dollarSchema`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | A URL to the JSON Schema for this object.                                | https://api.steamsets.com/schemas/AdminAnnouncementListResponseBody.json |
| `items`                                                                  | [components.Announcement](../../models/components/announcement.md)[]     | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |