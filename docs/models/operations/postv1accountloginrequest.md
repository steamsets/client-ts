# PostV1AccountLoginRequest

## Example Usage

```typescript
import { PostV1AccountLoginRequest } from "@steamsets/client-ts/models/operations";

let value: PostV1AccountLoginRequest = {
  loginRequestBody: {
    openidAssocHandle: "123456",
    openidClaimedId: "76561198842603734",
    openidIdentity: "https://steamsets.com/api/v1/openid/login",
    openidMode: "checkid_setup",
    openidNs: "http://specs.openid.net/auth/2.0",
    openidOpEndpoint: "https://steamsets.com/api/v1/openid/login",
    openidResponseNonce: "123456",
    openidReturnTo: "https://example.com",
    openidSig: "123456",
    openidSigned: "123456",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `userAgent`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `xForwardedFor`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `loginRequestBody`                                                         | [components.LoginRequestBody](../../models/components/loginrequestbody.md) | :heavy_check_mark:                                                         | N/A                                                                        |