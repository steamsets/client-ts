# SteamReview

## Example Usage

```typescript
import { SteamReview } from "@steamsets/client-ts/models/components";

let value: SteamReview = {
  appId: 489830,
  comments: 0,
  playtimeForever: 5400,
  review: "[b]great[/b] game",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `appId`                                            | *number*                                           | :heavy_check_mark:                                 | The reviewed app                                   | 489830                                             |
| `comments`                                         | *number*                                           | :heavy_check_mark:                                 | Comments on the review                             | 0                                                  |
| `playtimeForever`                                  | *number*                                           | :heavy_check_mark:                                 | Minutes played, as the Review showcase prints them | 5400                                               |
| `review`                                           | *string*                                           | :heavy_check_mark:                                 | The review text in Steam's BBCode                  | [b]great[/b] game                                  |