# V1AdminGetEventsResponseBody

## Example Usage

```typescript
import { V1AdminGetEventsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AdminGetEventsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AdminGetEventsResponseBody.json",
  events: [
    {
      bodyImage: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
      downvotes: 123456,
      endsAt: new Date("2025-10-15T18:20:20.936Z"),
      eventId: "<id>",
      gid: "123456",
      headerImage: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
      mappings: [
        {
          appId: 730,
          steamId: 76561198842603730,
        },
      ],
      name: "Steam Summer Sale 2024",
      postedAt: new Date("2023-01-01T00:00:00Z"),
      startsAt: new Date("2025-01-04T05:29:05.430Z"),
      title: "Steam Summer Sale 2024",
      upvotes: 123456,
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `dollarSchema`                                                      | *string*                                                            | :heavy_minus_sign:                                                  | A URL to the JSON Schema for this object.                           | https://api.steamsets.com/schemas/V1AdminGetEventsResponseBody.json |
| `events`                                                            | [components.V1Event](../../models/components/v1event.md)[]          | :heavy_check_mark:                                                  | N/A                                                                 |                                                                     |