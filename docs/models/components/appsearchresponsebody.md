# AppSearchResponseBody

## Example Usage

```typescript
import { AppSearchResponseBody } from "@steamsets/client-ts/models/components";

let value: AppSearchResponseBody = {
  dollarSchema: "https://api.steamsets.com/schemas/AppSearchResponseBody.json",
  apps: [
    {
      hasBadges: true,
      id: 277937,
      image: "https://picsum.photos/seed/8SRPw/160/3174",
      isEvent: false,
      isSale: true,
      name: "<value>",
      type: "<value>",
    },
  ],
  results: 902817,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dollarSchema`                                               | *string*                                                     | :heavy_minus_sign:                                           | A URL to the JSON Schema for this object.                    | https://api.steamsets.com/schemas/AppSearchResponseBody.json |
| `apps`                                                       | [components.App](../../models/components/app.md)[]           | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `results`                                                    | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |                                                              |