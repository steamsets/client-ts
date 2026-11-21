# GroupGetResponseBody

## Example Usage

```typescript
import { GroupGetResponseBody } from "@steamsets/client-ts/models/components";

let value: GroupGetResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/GroupGetResponseBody.json",
  groups: [],
  missing: [
    392318,
    725245,
    301636,
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `dollarSchema`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | A URL to the JSON Schema for this object.                              | https://api.steamsets.com/schemas/GroupGetResponseBody.json            |
| `groups`                                                               | [components.GroupGetGroup](../../models/components/groupgetgroup.md)[] | :heavy_check_mark:                                                     | The requested groups SteamSets knows, in request order.                |                                                                        |
| `missing`                                                              | *number*[]                                                             | :heavy_check_mark:                                                     | The requested ids SteamSets does not know.                             |                                                                        |