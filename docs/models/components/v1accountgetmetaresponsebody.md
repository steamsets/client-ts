# V1AccountGetMetaResponseBody

## Example Usage

```typescript
import { V1AccountGetMetaResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountGetMetaResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountGetMetaResponseBody.json",
  steamAvatarHashOfTheAccount: "<value>",
  description: "upon frightened indeed tremendously whereas community",
  steamId: "<id>",
  title: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `dollarSchema`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | A URL to the JSON Schema for this object.                           | https://api.steamsets.com/schemas/V1AccountGetMetaResponseBody.json |
| `steamAvatarHashOfTheAccount`                                       | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `description`                                                       | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |
| `steamId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Use this + cdn.steamsets.com/og/account/steamId.png as url          |                                                                     |
| `title`                                                             | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |