# V1AccountUpdateCosmeticsBody

## Example Usage

```typescript
import { V1AccountUpdateCosmeticsBody } from "@steamsets/client-ts/models/components";

let value: V1AccountUpdateCosmeticsBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountUpdateCosmeticsBody.json",
  nameEffect: "rainbow",
  themeColor: "#FF5733",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                         | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | A URL to the JSON Schema for this object.                                                                              | https://api.steamsets.com/schemas/V1AccountUpdateCosmeticsBody.json                                                    |
| `nameEffect`                                                                                                           | [components.V1AccountUpdateCosmeticsBodyNameEffect](../../models/components/v1accountupdatecosmeticsbodynameeffect.md) | :heavy_check_mark:                                                                                                     | The stored name effect after the update                                                                                | rainbow                                                                                                                |
| `themeColor`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The stored theme color after the update, null when unset                                                               | #FF5733                                                                                                                |