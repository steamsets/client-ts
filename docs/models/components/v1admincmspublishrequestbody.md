# V1AdminCmsPublishRequestBody

## Example Usage

```typescript
import { V1AdminCmsPublishRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminCmsPublishRequestBody = {
  documentUid: "<id>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `documentUid`                                         | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `versionUid`                                          | *string*                                              | :heavy_minus_sign:                                    | Version to publish. Omit to publish the latest draft. |