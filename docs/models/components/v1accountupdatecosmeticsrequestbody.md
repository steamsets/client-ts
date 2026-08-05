# V1AccountUpdateCosmeticsRequestBody

## Example Usage

```typescript
import { V1AccountUpdateCosmeticsRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountUpdateCosmeticsRequestBody = {
  nameEffect: "rainbow",
  themeColor: "#FF5733",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `nameEffect`                                                                                                                         | [components.V1AccountUpdateCosmeticsRequestBodyNameEffect](../../models/components/v1accountupdatecosmeticsrequestbodynameeffect.md) | :heavy_minus_sign:                                                                                                                   | The name effect. none clears it, omit to leave unchanged                                                                             | rainbow                                                                                                                              |
| `themeColor`                                                                                                                         | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | The profile theme color as #RRGGBB (no alpha). Empty string clears it, omit to leave unchanged                                       | #FF5733                                                                                                                              |