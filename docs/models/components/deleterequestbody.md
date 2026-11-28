# DeleteRequestBody

## Example Usage

```typescript
import { DeleteRequestBody } from "@steamsets/client-ts/models/components";

let value: DeleteRequestBody = {
  uid: "<id>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `reason`                               | *string*                               | :heavy_minus_sign:                     | Why, for the audit log                 |
| `uid`                                  | *string*                               | :heavy_check_mark:                     | A maintenance event or an announcement |