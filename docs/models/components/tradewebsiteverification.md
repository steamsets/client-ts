# TradeWebsiteVerification

## Example Usage

```typescript
import { TradeWebsiteVerification } from "@steamsets/client-ts/models/components";

let value: TradeWebsiteVerification = {
  methods: [
    {
      method: "dns",
      value: "steamsets-verify=0123abcd",
      where: "example.com",
    },
  ],
  verified: true,
  verifiedAt: null,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `methods`                                                                                     | [components.TradeWebsiteProof](../../models/components/tradewebsiteproof.md)[]                | :heavy_check_mark:                                                                            | The ways to prove the host. Either one is enough; website.verify tries them in this order.    |
| `verified`                                                                                    | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `verifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When a check first found the token. Null until then.                                          |