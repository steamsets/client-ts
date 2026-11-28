# AdminGetBotCurrentClient

## Example Usage

```typescript
import { AdminGetBotCurrentClient } from "@steamsets/client-ts/models/components";

let value: AdminGetBotCurrentClient = {
  firstSeenAt: new Date("2024-04-05T17:54:13.039Z"),
  lastSeenAt: new Date("2025-11-30T07:40:07.083Z"),
  name: "<value>",
  version: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `firstSeenAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastSeenAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Empty when the push named no client and sent no User-Agent.                                   |
| `version`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |