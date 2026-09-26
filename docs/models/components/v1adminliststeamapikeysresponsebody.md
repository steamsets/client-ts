# V1AdminListSteamApiKeysResponseBody

## Example Usage

```typescript
import { V1AdminListSteamApiKeysResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminListSteamApiKeysResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminListSteamApiKeysResponseBody.json",
  keys: [
    {
      createdAt: new Date("2026-04-25T13:30:11.735Z"),
      keyId: "<id>",
      last4: "<value>",
      type: "publisher",
      updatedAt: new Date("2026-03-19T05:04:49.407Z"),
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `dollarSchema`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | A URL to the JSON Schema for this object.                                        | https://api.steamsets.com/schemas/V1AdminListSteamApiKeysResponseBody.json       |
| `keys`                                                                           | [components.V1AdminSteamApiKey](../../models/components/v1adminsteamapikey.md)[] | :heavy_check_mark:                                                               | All stored keys, newest first                                                    |                                                                                  |