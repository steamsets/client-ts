# AccountOptOutRequestBody

## Example Usage

```typescript
import { AccountOptOutRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountOptOutRequestBody = {
  comment: "I don't want people looking up my profile",
  reason: "privacy",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `comment`                                                                   | *string*                                                                    | :heavy_minus_sign:                                                          | Why the account is leaving, in its own words. Required when reason is other | I don't want people looking up my profile                                   |
| `reason`                                                                    | [components.Reason](../../models/components/reason.md)                      | :heavy_check_mark:                                                          | Why the account is leaving, from a preset list                              | privacy                                                                     |