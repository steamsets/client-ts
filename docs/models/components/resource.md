# Resource

## Example Usage

```typescript
import { Resource } from "@steamsets/client-ts/models/components";

let value: Resource = {
    resource: "<value>",
    value: "1",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `resource`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `value`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | The value of the resource, this can be a string, number, boolean or even a cron expression | 1                                                                                          |