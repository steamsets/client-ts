# V1AdminExportSteamApiKeysResponseBody

## Example Usage

```typescript
import { V1AdminExportSteamApiKeysResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminExportSteamApiKeysResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminExportSteamApiKeysResponseBody.json",
  broken: 577273,
  keys: [
    {
      createdAt: new Date("2024-07-31T22:38:14.857Z"),
      key: "<key>",
      keyId: "<id>",
      type: "publisher",
      updatedAt: new Date("2026-07-19T20:22:56.543Z"),
    },
  ],
  matched: 63334,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `dollarSchema`                                                                                   | *string*                                                                                         | :heavy_minus_sign:                                                                               | A URL to the JSON Schema for this object.                                                        | https://api.steamsets.com/schemas/V1AdminExportSteamApiKeysResponseBody.json                     |
| `broken`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | Number of keys that failed the Steam test and were dropped. Always 0 when onlyWorking is false.  |                                                                                                  |
| `keys`                                                                                           | [components.V1AdminExportedSteamApiKey](../../models/components/v1adminexportedsteamapikey.md)[] | :heavy_check_mark:                                                                               | The exported keys, in the requested order                                                        |                                                                                                  |
| `matched`                                                                                        | *number*                                                                                         | :heavy_check_mark:                                                                               | Number of keys that matched the filters, before the limit and the Steam test                     |                                                                                                  |