# LoginRequestBody

## Example Usage

```typescript
import { LoginRequestBody } from "@steamsets/client-ts/models/components";

let value: LoginRequestBody = {
    openidAssocHandle: "123456",
    openidClaimedId: "76561198842603734",
    openidIdentity: "https://steamsets.com/api/v1/openid/login",
    openidMode: "checkid_setup",
    openidNs: "http://specs.openid.net/auth/2.0",
    openidOpEndpoint: "https://steamsets.com/api/v1/openid/login",
    openidResponseNonce: "123456",
    openidReturnTo: "https://steamsets.com/api/v1/openid/login",
    openidSig: "123456",
    openidSigned: "123456",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `openidAssocHandle`                       | *string*                                  | :heavy_check_mark:                        | The assoc handle of the login             | 123456                                    |
| `openidClaimedId`                         | *string*                                  | :heavy_check_mark:                        | The claimed id of the login               | 76561198842603734                         |
| `openidIdentity`                          | *string*                                  | :heavy_check_mark:                        | The identity of the login                 | https://steamsets.com/api/v1/openid/login |
| `openidMode`                              | *string*                                  | :heavy_check_mark:                        | The mode of the login                     | checkid_setup                             |
| `openidNs`                                | *string*                                  | :heavy_check_mark:                        | The namespace of the login                | http://specs.openid.net/auth/2.0          |
| `openidOpEndpoint`                        | *string*                                  | :heavy_check_mark:                        | The endpoint of the login                 | https://steamsets.com/api/v1/openid/login |
| `openidResponseNonce`                     | *string*                                  | :heavy_check_mark:                        | The response nonce of the login           | 123456                                    |
| `openidReturnTo`                          | *string*                                  | :heavy_check_mark:                        | The return to of the login                | https://steamsets.com/api/v1/openid/login |
| `openidSig`                               | *string*                                  | :heavy_check_mark:                        | The sig of the login                      | 123456                                    |
| `openidSigned`                            | *string*                                  | :heavy_check_mark:                        | The signed of the login                   | 123456                                    |