# V1AdminOptOutFeedback

## Example Usage

```typescript
import { V1AdminOptOutFeedback } from "@steamsets/client-ts/models/components";

let value: V1AdminOptOutFeedback = {
  comment: "I don't want my inventory on a public site",
  reason: "privacy",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `comment`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | What the account wrote, if anything                                                              | I don't want my inventory on a public site                                                       |
| `reason`                                                                                         | [components.V1AdminOptOutFeedbackReason](../../models/components/v1adminoptoutfeedbackreason.md) | :heavy_check_mark:                                                                               | The preset reason the account picked, if any                                                     | privacy                                                                                          |