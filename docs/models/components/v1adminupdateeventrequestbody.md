# V1AdminUpdateEventRequestBody

## Example Usage

```typescript
import { V1AdminUpdateEventRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminUpdateEventRequestBody = {
  eventId: "evt_123456",
  mappings: [
    {
      appId: 730,
      steamId: 4,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `eventId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The event id                                                                   | evt_123456                                                                     |
| `mappings`                                                                     | [components.V1AppEventMapping](../../models/components/v1appeventmapping.md)[] | :heavy_check_mark:                                                             | The mappings to add                                                            | [<br/>{<br/>"appId": 730,<br/>"steamId": 4<br/>}<br/>]                         |