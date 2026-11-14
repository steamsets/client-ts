# BotTrackRequest

## Example Usage

```typescript
import { BotTrackRequest } from "@steamsets/client-ts/models/operations";

let value: BotTrackRequest = {
  botTrackRequestBody: {
    events: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `userAgent`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `xVisitorId`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `botTrackRequestBody`                                                            | [components.BotTrackRequestBody](../../models/components/bottrackrequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |