# V1AccountUpdateProgressResponseBody

## Example Usage

```typescript
import { V1AccountUpdateProgressResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountUpdateProgressResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountUpdateProgressResponseBody.json",
  progress: {
    accountId: 851954,
    currentStep: "<value>",
    error: {
      category: "rate_limited",
      retryable: false,
    },
    percent: 804123,
    runId: "<id>",
    status: "in_progress",
    steps: null,
    updatedAt: new Date("2024-03-15T09:36:42.063Z"),
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `dollarSchema`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | A URL to the JSON Schema for this object.                                  | https://api.steamsets.com/schemas/V1AccountUpdateProgressResponseBody.json |
| `progress`                                                                 | [components.UpdateProgress](../../models/components/updateprogress.md)     | :heavy_minus_sign:                                                         | N/A                                                                        |                                                                            |