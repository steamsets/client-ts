# AccountOptOutRequestBody

## Example Usage

```typescript
import { AccountOptOutRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountOptOutRequestBody = {
  comment: "I don't want people looking up my profile",
  reason: "other",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `comment`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Why the account is leaving, in its own words. At least 10 characters, in words | I don't want people looking up my profile                                      |
| `reason`                                                                       | [components.Reason](../../models/components/reason.md)                         | :heavy_minus_sign:                                                             | Deprecated. A preset reason, kept for older clients. Defaults to other         | other                                                                          |