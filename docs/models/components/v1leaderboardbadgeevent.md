# V1LeaderboardBadgeEvent

## Example Usage

```typescript
import { V1LeaderboardBadgeEvent } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardBadgeEvent = {
  bodyImage: "8659ea8bf04142fb4634342b24fd3288008a3b4b.jpg",
  downvotes: 123456,
  endsAt: new Date("2023-01-01T00:00:00Z"),
  gid: "123456",
  headerImage: "9d6874c4a700cee137b22c60604eb4443f41ce54.jpg",
  name: "Counter-Strike: Global Offensive",
  postedAt: new Date("2023-01-01T00:00:00Z"),
  startsAt: new Date("2023-01-01T00:00:00Z"),
  title: "Counter-Strike: Global Offensive",
  upvotes: 123456,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `bodyImage`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The body image of the event                                                                   | 8659ea8bf04142fb4634342b24fd3288008a3b4b.jpg                                                  |
| `downvotes`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of downvotes the event has                                                         | 123456                                                                                        |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the event ends                                                                       | 2023-01-01T00:00:00Z                                                                          |
| `gid`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | The gid of the event                                                                          | 123456                                                                                        |
| `headerImage`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The header image of the event                                                                 | 9d6874c4a700cee137b22c60604eb4443f41ce54.jpg                                                  |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The name of the event                                                                         | Counter-Strike: Global Offensive                                                              |
| `postedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the event was posted                                                                 | 2023-01-01T00:00:00Z                                                                          |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the event starts                                                                     | 2023-01-01T00:00:00Z                                                                          |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | The title of the event                                                                        | Counter-Strike: Global Offensive                                                              |
| `upvotes`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The number of upvotes the event has                                                           | 123456                                                                                        |