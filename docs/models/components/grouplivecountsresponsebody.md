# GroupLiveCountsResponseBody

## Example Usage

```typescript
import { GroupLiveCountsResponseBody } from "@steamsets/client-ts/models/components";

let value: GroupLiveCountsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/GroupLiveCountsResponseBody.json",
  groups: [],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/GroupLiveCountsResponseBody.json         |
| `groups`                                                                   | [components.GroupLiveCounts](../../models/components/grouplivecounts.md)[] | :heavy_check_mark:                                                         | The requested groups SteamSets knows, in request order.                    |                                                                            |