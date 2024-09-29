# V1AccountDeveloperAppUpdateRequestBody

## Example Usage

```typescript
import { V1AccountDeveloperAppUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountDeveloperAppUpdateRequestBody = {
  description: "My App Description",
  icon: "https://yoururl.com/icon.png",
  name: "My App",
  publicId: "da_123456",
  regenerate: true,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `description`                            | *string*                                 | :heavy_check_mark:                       | The new description of the developer app | My App Description                       |
| `icon`                                   | *string*                                 | :heavy_check_mark:                       | The new icon of the developer app        | https://yoururl.com/icon.png             |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | The new name of the developer app        | My App                                   |
| `publicId`                               | *string*                                 | :heavy_check_mark:                       | The public id of the developer app       | da_123456                                |
| `regenerate`                             | *boolean*                                | :heavy_check_mark:                       | Whether to re-generate the key           | true                                     |