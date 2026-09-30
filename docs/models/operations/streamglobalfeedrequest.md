# StreamGlobalFeedRequest

## Example Usage

```typescript
import { StreamGlobalFeedRequest } from "@steamsets/client-ts/models/operations";

let value: StreamGlobalFeedRequest = {
  since: new Date("2026-09-30T07:13:00Z"),
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  | Example                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `since`                                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                | :heavy_minus_sign:                                                                                                                                                           | Send only warm-up events at or after this time (RFC 3339, inclusive). Pass the occurredAt of the newest event that the client already has. Omit to get the newest 30 events. | 2026-09-30T07:13:00Z                                                                                                                                                         |