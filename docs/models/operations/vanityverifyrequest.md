# VanityVerifyRequest

## Example Usage

```typescript
import { VanityVerifyRequest } from "@steamsets/client-ts/models/operations";

let value: VanityVerifyRequest = {
  v1VanityVerifyRequestBody: {
    vanity: "abc",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `xForwardedFor`                                                                              | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `v1VanityVerifyRequestBody`                                                                  | [components.V1VanityVerifyRequestBody](../../models/components/v1vanityverifyrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |