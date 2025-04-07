# PostV1AccountSubscribeEmailRequest

## Example Usage

```typescript
import { PostV1AccountSubscribeEmailRequest } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountSubscribeEmailRequest = {
  v1AccountSubscribeEmailRequestBody: {
    email: "steamsets@example.com",
    subscribed: true,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `xForwardedFor`                                                                                                | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `v1AccountSubscribeEmailRequestBody`                                                                           | [components.V1AccountSubscribeEmailRequestBody](../../models/components/v1accountsubscribeemailrequestbody.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |