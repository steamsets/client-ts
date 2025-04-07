# V1AccountCreateDeveloperAppRequestBody

## Example Usage

```typescript
import { V1AccountCreateDeveloperAppRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AccountCreateDeveloperAppRequestBody = {
  description: "Your App Description",
  environment: "production",
  generateKey: true,
  name: "Your App",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `description`                                                    | *string*                                                         | :heavy_check_mark:                                               | The description of the app                                       | Your App Description                                             |
| `environment`                                                    | [components.Environment](../../models/components/environment.md) | :heavy_check_mark:                                               | The environment to create the app for                            | production                                                       |
| `generateKey`                                                    | *boolean*                                                        | :heavy_check_mark:                                               | Whether to generate a key for the app                            | true                                                             |
| `name`                                                           | *string*                                                         | :heavy_check_mark:                                               | The name of the app                                              | Your App                                                         |