# V1AdminRestrictAccountRequestBody

## Example Usage

```typescript
import { V1AdminRestrictAccountRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminRestrictAccountRequestBody = {
  reason: "Ban evasion, see report #412",
  restricted: true,
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | [components.IDSearch](../../models/components/idsearch.md)                                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `reason`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Staff-facing reason for the restriction. Required when restricted is true, ignored when it is false. | Ban evasion, see report #412                                                                         |
| `restricted`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | true hides the account site-wide and locks it out of login, false lifts both                         | true                                                                                                 |
| `vanity`                                                                                             | [components.VanitySearch](../../models/components/vanitysearch.md)                                   | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |