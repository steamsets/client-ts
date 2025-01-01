# V1Event

## Example Usage

```typescript
import { V1Event } from "@steamsets/client-ts/models/components";

let value: V1Event = {
  bodyImage: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
  downvotes: 123456,
  endsAt: new Date("2023-04-02T10:20:37.470Z"),
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
  publicId: "<id>",
  startsAt: new Date("2024-08-28T04:52:14.624Z"),
  title: "Steam Summer Sale 2024",
  upvotes: 123456,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bodyImage`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The body image of the event                                                                   | a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg                                                          |
| `downvotes`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of downvotes the event has                                                         | 123456                                                                                        |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The end time of the event                                                                     |                                                                                               |
| `gid`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The gid of the event                                                                          | 123456                                                                                        |
| `headerImage`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The header image of the event                                                                 | a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg                                                          |
| `mappings`                                                                                    | [components.V1AppEventMapping](../../models/components/v1appeventmapping.md)[]                | :heavy_check_mark:                                                                            | The mappings of the event                                                                     |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the event                                                                         | Steam Summer Sale 2024                                                                        |
| `postedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the event was posted                                                                 | 2023-01-01T00:00:00Z                                                                          |
| `publicId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Use this ID to make any changes to the event                                                  |                                                                                               |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The start time of the event                                                                   |                                                                                               |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The title of the event                                                                        | Steam Summer Sale 2024                                                                        |
| `upvotes`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of upvotes the event has                                                           | 123456                                                                                        |