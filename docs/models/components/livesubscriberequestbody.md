# LiveSubscribeRequestBody

## Example Usage

```typescript
import { LiveSubscribeRequestBody } from "@steamsets/client-ts/models/components";

let value: LiveSubscribeRequestBody = {
  topics: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `topics`                                                                                                                        | *string*[]                                                                                                                      | :heavy_check_mark:                                                                                                              | Topics to follow, for example stats, bots.mine, levels.orders or account.views:1234. A keyed topic takes its key after a colon. |