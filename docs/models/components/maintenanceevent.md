# MaintenanceEvent

## Example Usage

```typescript
import { MaintenanceEvent } from "@steamsets/client-ts/models/components";

let value: MaintenanceEvent = {
  dollarSchema: "https://api.steamsets.com/schemas/MaintenanceEvent.json",
  createdAt: new Date("2025-02-18T08:12:53.834Z"),
  enabled: false,
  message: "<value>",
  paths: [
    "<value 1>",
    "<value 2>",
  ],
  title: "<value>",
  uid: "<id>",
  updatedAt: new Date("2026-07-09T00:23:07.912Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/MaintenanceEvent.json                                       |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `createdBy`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the toggle itself is on                                                               |                                                                                               |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Optional scheduled end                                                                        |                                                                                               |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Markdown body shown below the headline                                                        |                                                                                               |
| `paths`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Path prefixes this event covers; "*" means whole site                                         |                                                                                               |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Optional scheduled start                                                                      |                                                                                               |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Short headline shown to users                                                                 |                                                                                               |
| `uid`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Public maintenance event ID                                                                   |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |