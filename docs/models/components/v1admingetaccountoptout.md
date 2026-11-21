# V1AdminGetAccountOptOut

## Example Usage

```typescript
import { V1AdminGetAccountOptOut } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountOptOut = {
  comment: "I don't want people looking up my profile",
  reason: "other",
  requestedAt: new Date("2026-10-01T12:00:00Z"),
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | What the account wrote, if anything                                                                                          | I don't want people looking up my profile                                                                                    |
| `reason`                                                                                                                     | [components.V1AdminGetAccountOptOutReason](../../models/components/v1admingetaccountoptoutreason.md)                         | :heavy_check_mark:                                                                                                           | The preset reason, if any                                                                                                    | other                                                                                                                        |
| `requestedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_check_mark:                                                                                                           | When the account sent its newest opt-out request. A repeated request while one is pending moves this, not the effective date | 2026-10-01T12:00:00Z                                                                                                         |