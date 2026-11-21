# BotClaimRequestBody

## Example Usage

```typescript
import { BotClaimRequestBody } from "@steamsets/client-ts/models/components";

let value: BotClaimRequestBody = {
  openid: {
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

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                  | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Listing name for a bot the directory does not list yet, e.g. "lvlupbot.com - legendary". Required for one; a listed bot keeps its name. |
| `openid`                                                                                                                                | [components.LoginRequestBody](../../models/components/loginrequestbody.md)                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `type`                                                                                                                                  | [components.BotClaimRequestBodyType](../../models/components/botclaimrequestbodytype.md)                                                | :heavy_minus_sign:                                                                                                                      | What a bot the directory does not list yet trades. A listed bot keeps its type.                                                         |