# V1AdminOptOutReasonCount

## Example Usage

```typescript
import { V1AdminOptOutReasonCount } from "@steamsets/client-ts/models/components";

let value: V1AdminOptOutReasonCount = {
  count: 12,
  reason: "privacy",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `count`                                                                                                | *number*                                                                                               | :heavy_check_mark:                                                                                     | How many opt-outs in force gave it                                                                     | 12                                                                                                     |
| `reason`                                                                                               | [components.V1AdminOptOutReasonCountReason](../../models/components/v1adminoptoutreasoncountreason.md) | :heavy_check_mark:                                                                                     | The preset reason                                                                                      | privacy                                                                                                |