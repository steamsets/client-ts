# V1AccountDeveloperAppUpdateRequestBody

## Example Usage

```typescript
import { V1AccountDeveloperAppUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountDeveloperAppUpdateRequestBody = {
  description: "My App Description",
  developerAppId: "da_123456",
  name: "My App",
  regenerate: true,
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `description`                            | *string*                                 | :heavy_check_mark:                       | The new description of the developer app | My App Description                       |
| `developerAppId`                         | *string*                                 | :heavy_check_mark:                       | The public id of the developer app       | da_123456                                |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | The new name of the developer app        | My App                                   |
| `regenerate`                             | *boolean*                                | :heavy_check_mark:                       | Whether to re-generate the key           | true                                     |