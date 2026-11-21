# DonateUpdatePrepaidRequestBody

## Example Usage

```typescript
import { DonateUpdatePrepaidRequestBody } from "@steamsets/client-ts/models/components";

let value: DonateUpdatePrepaidRequestBody = {
  tier: "tier_2",
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   | Example                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tier`                                                                                                                                                                        | [components.DonateUpdatePrepaidRequestBodyTier](../../models/components/donateupdateprepaidrequestbodytier.md)                                                                | :heavy_check_mark:                                                                                                                                                            | The tier the balance pays for. A higher tier than the one paid this month is charged the difference now when the balance covers it; anything else starts with the next month. | tier_2                                                                                                                                                                        |