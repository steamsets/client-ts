# LiveSubscribeAccountProgress

## Example Usage

```typescript
import { LiveSubscribeAccountProgress } from "@steamsets/client-ts/models/components";

let value: LiveSubscribeAccountProgress = {
  key: "<key>",
  value: {
    accountId: 45286,
    currentStep: "<value>",
    percent: 581349,
    runId: "<id>",
    status: "<value>",
    steps: null,
    updatedAt: new Date("2026-03-30T13:09:50.514Z"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `key`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `value`                                                                              | [components.AccountUpdateProgress](../../models/components/accountupdateprogress.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |