# AdminGetBotClientVersion

## Example Usage

```typescript
import { AdminGetBotClientVersion } from "@steamsets/client-ts/models/components";

let value: AdminGetBotClientVersion = {
  firstSeenAt: new Date("2025-07-24T17:34:20.598Z"),
  lastSeenAt: new Date("2024-01-07T18:38:28.610Z"),
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