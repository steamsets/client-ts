# V1AdminUpdateRoleOverrideRequestBody

## Example Usage

```typescript
import { V1AdminUpdateRoleOverrideRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateRoleOverrideRequestBody = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | [components.IDSearch](../../models/components/idsearch.md)                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `reason`                                                                         | *string*                                                                         | :heavy_minus_sign:                                                               | Reason for the override (e.g. PayPal donation, crypto donation)                  |
| `tier`                                                                           | [components.Tier](../../models/components/tier.md)                               | :heavy_minus_sign:                                                               | The tier to set (tier_1, tier_2, tier_3, tier_mythic). Empty to remove override. |
| `vanity`                                                                         | [components.VanitySearch](../../models/components/vanitysearch.md)               | :heavy_minus_sign:                                                               | N/A                                                                              |