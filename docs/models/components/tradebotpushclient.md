# TradeBotPushClient

## Example Usage

```typescript
import { TradeBotPushClient } from "@steamsets/client-ts/models/components";

let value: TradeBotPushClient = {
  firstSeenAt: new Date("2024-05-06T23:01:55.587Z"),
  lastSeenAt: new Date("2025-01-17T13:43:13.256Z"),
  name: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `firstSeenAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The first push from this version.                                                             |
| `lastSeenAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Empty when the push named no client and sent no User-Agent.                                   |
| `version`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |