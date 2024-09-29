# V1DeveloperAppCreateRequestBody

## Example Usage

```typescript
import { V1DeveloperAppCreateRequestBody } from "@steamsets/client-ts/models/components";

let value: V1DeveloperAppCreateRequestBody = {
  description: "Your App Description",
  environment: "production",
  generateKey: true,
  icon: "https://yoururl.com/icon.png",
  name: "Your App",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | The description of the app                                       | Your App Description                                             |
| `environment`                                                    | [components.Environment](../../models/components/environment.md) | :heavy_check_mark:                                               | The environment to create the app for                            | production                                                       |
| `generateKey`                                                    | *boolean*                                                        | :heavy_check_mark:                                               | Whether to generate a key for the app                            | true                                                             |
| `icon`                                                           | *string*                                                         | :heavy_check_mark:                                               | The icon of the app                                              | https://yoururl.com/icon.png                                     |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The name of the app                                              | Your App                                                         |