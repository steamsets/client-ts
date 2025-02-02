# AccountV1SettingsEmailSubscribeRequest

## Example Usage

```typescript
import { AccountV1SettingsEmailSubscribeRequest } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsEmailSubscribeRequest = {
  v1EmailSubscriptionRequestBody: {
    email: "steamsets@example.com",
    subscribed: true,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `xForwardedFor`                                                                                        | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `v1EmailSubscriptionRequestBody`                                                                       | [components.V1EmailSubscriptionRequestBody](../../models/components/v1emailsubscriptionrequestbody.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |