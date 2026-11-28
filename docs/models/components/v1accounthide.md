# V1AccountHide

## Example Usage

```typescript
import { V1AccountHide } from "@steamsets/client-ts/models/components";

let value: V1AccountHide = {
  at: new Date("2026-10-01T12:00:00Z"),
  reason: "People keep messaging me about my badges",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `at`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the account was hidden. Null when the hide is older than the history                     | 2026-10-01T12:00:00Z                                                                          |
| `reason`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | What the owner wrote when it hid the account. Null when it wrote nothing                      | People keep messaging me about my badges                                                      |