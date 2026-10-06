# V1AdminUpdateCosmeticsResponseBody

## Example Usage

```typescript
import { V1AdminUpdateCosmeticsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateCosmeticsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminUpdateCosmeticsResponseBody.json",
  nameEffect: "rainbow",
  themeColor: "#FF5733",
  vanity: "flo",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               | Example                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `dollarSchema`                                                            | *string*                                                                  | :heavy_minus_sign:                                                        | A URL to the JSON Schema for this object.                                 | https://api.steamsets.com/schemas/V1AdminUpdateCosmeticsResponseBody.json |
| `nameEffect`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | The stored name effect, none when the account has none                    | rainbow                                                                   |
| `themeColor`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | The stored theme color, or null when the account has none                 | #FF5733                                                                   |
| `vanity`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | The stored vanity, or null when the account has none                      | flo                                                                       |