# WebsitePushRequestSetsLevelRange

The account levels the website's set stock is meant for. null clears it.

## Example Usage

```typescript
import { WebsitePushRequestSetsLevelRange } from "@steamsets/client-ts/models/components";

let value: WebsitePushRequestSetsLevelRange = {
  max: 885800,
  min: 4492,
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `max`                                                                   | *number*                                                                | :heavy_check_mark:                                                      | The highest account level the bot is meant for. 0 means no upper limit. |
| `min`                                                                   | *number*                                                                | :heavy_check_mark:                                                      | The lowest account level the bot is meant for.                          |