# V1AccountPlaytimeDataPoint

## Example Usage

```typescript
import { V1AccountPlaytimeDataPoint } from "@steamsets/client-ts/models/components";

let value: V1AccountPlaytimeDataPoint = {
  appId: 730,
  image: "someHash.idk",
  name: "CS2",
  playtime: 15,
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `appId`                 | *number*                | :heavy_check_mark:      | The app id              | 730                     |
| `image`                 | *string*                | :heavy_check_mark:      | The image of the app    | someHash.idk            |
| `name`                  | *string*                | :heavy_check_mark:      | The name of the app     | CS2                     |
| `playtime`              | *number*                | :heavy_check_mark:      | The playtime of the app | 15                      |