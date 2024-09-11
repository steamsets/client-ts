# V1AppDetail

## Example Usage

```typescript
import { V1AppDetail } from "@steamsets/client-ts/models/components";

let value: V1AppDetail = {
  appId: 730,
  image: "a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg",
  isEvent: true,
  isSale: true,
  name: "CS2",
  price: 1200,
  shortName: "csgo",
  type: "game",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `appId`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | The app id                                                               | 730                                                                      |
| `image`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The app image hash                                                       | a1a2f9f3f4c0c2b1f8d3a4e5f6d7e8f9.jpg                                     |
| `isEvent`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | Whether the app is an event                                              | true                                                                     |
| `isSale`                                                                 | *boolean*                                                                | :heavy_check_mark:                                                       | Whether the app is a sale                                                | true                                                                     |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | The app name                                                             | CS2                                                                      |
| `price`                                                                  | *number*                                                                 | :heavy_check_mark:                                                       | The app price                                                            | 1200                                                                     |
| `shortName`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | The app short name                                                       | csgo                                                                     |
| `type`                                                                   | [components.V1AppDetailType](../../models/components/v1appdetailtype.md) | :heavy_check_mark:                                                       | The app type                                                             | game                                                                     |