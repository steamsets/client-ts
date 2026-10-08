# V1AdminUserRestriction

## Example Usage

```typescript
import { V1AdminUserRestriction } from "@steamsets/client-ts/models/components";

let value: V1AdminUserRestriction = {
  kind: "staff",
  reason: "Ban evasion",
  restrictedAt: new Date("2026-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `kind`                                                                                         | [components.V1AdminUserRestrictionKind](../../models/components/v1adminuserrestrictionkind.md) | :heavy_check_mark:                                                                             | self for an opt-out, staff for a restriction staff applied                                     | staff                                                                                          |
| `reason`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | The stored restriction reason, staff-facing                                                    | Ban evasion                                                                                    |
| `restrictedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)  | :heavy_check_mark:                                                                             | When the restriction was first applied                                                         | 2026-10-01T12:00:00Z                                                                           |