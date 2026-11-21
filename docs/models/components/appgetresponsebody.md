# AppGetResponseBody

## Example Usage

```typescript
import { AppGetResponseBody } from "@steamsets/client-ts/models/components";

let value: AppGetResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/AppGetResponseBody.json",
  apps: [],
  missing: [],
  snapshotAt: new Date("2024-03-15T22:28:37.474Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AppGetResponseBody.json                                     |
| `apps`                                                                                        | [components.AppGetApp](../../models/components/appgetapp.md)[]                                | :heavy_check_mark:                                                                            | The requested apps that have a badge, in request order.                                       |                                                                                               |
| `missing`                                                                                     | *number*[]                                                                                    | :heavy_check_mark:                                                                            | The requested apps that SteamSets does not know or that have no badge.                        |                                                                                               |
| `snapshotAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the prices were copied for the API. They are up to an hour behind steamsets.com.         |                                                                                               |