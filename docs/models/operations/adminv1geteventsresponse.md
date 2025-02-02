# AdminV1GetEventsResponse

## Example Usage

```typescript
import { AdminV1GetEventsResponse } from "@steamsets/client-ts/models/operations";

let value: AdminV1GetEventsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AdminGetEventsResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AdminGetEventsResponseBody.json",
    events: [
      {
        bodyImage: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
        downvotes: 123456,
        endsAt: new Date("2023-05-11T03:00:50.109Z"),
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
        startsAt: new Date("2023-12-15T12:13:46.383Z"),
        title: "Steam Summer Sale 2024",
        upvotes: 123456,
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `v1AdminGetEventsResponseBody`                                                                     | [components.V1AdminGetEventsResponseBody](../../models/components/v1admingeteventsresponsebody.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |