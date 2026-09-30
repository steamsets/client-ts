# EventAccountUpdateProgressData

## Example Usage

```typescript
import { EventAccountUpdateProgressData } from "@steamsets/client-ts/models/components";

let value: EventAccountUpdateProgressData = {
  progress: {
    accountId: 150321,
    currentStep: "<value>",
    percent: 350558,
    runId: "<id>",
    status: "<value>",
    steps: null,
    updatedAt: new Date("2025-06-04T21:02:17.433Z"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `progress`                                                                           | [components.AccountUpdateProgress](../../models/components/accountupdateprogress.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |