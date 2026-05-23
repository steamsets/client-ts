# GroupSearchResponseBody

## Example Usage

```typescript
import { GroupSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: GroupSearchResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/GroupSearchResponseBody.json",
  groups: [],
  results: 273960,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `dollarSchema`                                                 | *string*                                                       | :heavy_minus_sign:                                             | A URL to the JSON Schema for this object.                      | https://api.steamsets.com/schemas/GroupSearchResponseBody.json |
| `groups`                                                       | [components.Group](../../models/components/group.md)[]         | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `results`                                                      | *number*                                                       | :heavy_check_mark:                                             | N/A                                                            |                                                                |