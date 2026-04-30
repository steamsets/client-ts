# CreateRequestBody

## Example Usage

```typescript
import { CreateRequestBody } from "@steamsets/client-ts/models/components";

let value: CreateRequestBody = {
  enabled: true,
  message: "<value>",
  paths: null,
  title: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `enabled`                                                                                     | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the toggle is currently on                                                            |
| `endsAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Markdown body shown below the headline                                                        |
| `paths`                                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | Path prefixes; "*" alone means whole site                                                     |
| `startsAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Short headline                                                                                |