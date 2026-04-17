# VanityVerifyRequest

## Example Usage

```typescript
import { VanityVerifyRequest } from "@steamsets/client-ts/models/operations";

let value: VanityVerifyRequest = {
  requestBody: {
    vanity: "abc",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `xForwardedFor`                                                  | *string*                                                         | :heavy_minus_sign:                                               | N/A                                                              |
| `requestBody`                                                    | [components.RequestBody](../../models/components/requestbody.md) | :heavy_check_mark:                                               | N/A                                                              |