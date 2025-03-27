# V1AccountMetaResponseBody

## Example Usage

```typescript
import { V1AccountMetaResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountMetaResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountMetaResponseBody.json",
  steamAvatarHashOfTheAccount: "<value>",
  description: "nearly creaking impish exalted late quickly oof",
  steamId: "<id>",
  title: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `dollarSchema`                                                   | *string*                                                         | :heavy_minus_sign:                                               | A URL to the JSON Schema for this object.                        | https://api.steamsets.com/schemas/V1AccountMetaResponseBody.json |
| `steamAvatarHashOfTheAccount`                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |
| `steamId`                                                        | *string*                                                         | :heavy_check_mark:                                               | Use this + cdn.steamsets.com/og/account/steamId.png as url       |                                                                  |
| `title`                                                          | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |                                                                  |