# WebsiteVerifyAttempt

## Example Usage

```typescript
import { WebsiteVerifyAttempt } from "@steamsets/client-ts/models/components";

let value: WebsiteVerifyAttempt = {
  found: false,
  method: "dns",
  problem: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `found`                                                                                        | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `method`                                                                                       | [components.WebsiteVerifyAttemptMethod](../../models/components/websiteverifyattemptmethod.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `problem`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | Why the method did not find the token, in English. Empty when it found it.                     |