# AccountListOwnedBadgesRequest

## Example Usage

```typescript
import { AccountListOwnedBadgesRequest } from "@steamsets/client-ts/models/operations";

let value: AccountListOwnedBadgesRequest = {
  appId: 730,
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `appId`                                                   | *number*                                                  | :heavy_minus_sign:                                        | Only return badges of this app. Omit for all owned badges | 730                                                       |