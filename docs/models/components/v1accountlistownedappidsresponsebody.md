# V1AccountListOwnedAppIdsResponseBody

## Example Usage

```typescript
import { V1AccountListOwnedAppIdsResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountListOwnedAppIdsResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountListOwnedAppIdsResponseBody.json",
  appIds: [
    730,
    440,
  ],
  appPrivacy: "public",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                                         | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | A URL to the JSON Schema for this object.                                                                                              | https://api.steamsets.com/schemas/V1AccountListOwnedAppIdsResponseBody.json                                                            |
| `appIds`                                                                                                                               | *number*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | App ids the account owns                                                                                                               | [<br/>730,<br/>440<br/>]                                                                                                               |
| `appPrivacy`                                                                                                                           | [components.V1AccountListOwnedAppIdsResponseBodyAppPrivacy](../../models/components/v1accountlistownedappidsresponsebodyappprivacy.md) | :heavy_check_mark:                                                                                                                     | Privacy of the account's game details on Steam                                                                                         | public                                                                                                                                 |