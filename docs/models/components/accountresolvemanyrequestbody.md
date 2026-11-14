# AccountResolveManyRequestBody

## Example Usage

```typescript
import { AccountResolveManyRequestBody } from "@steamsets/client-ts/models/components";

let value: AccountResolveManyRequestBody = {
  inputs: [
    "76561199756787903",
    "gabelogannewell",
  ],
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `inputs`                                                                    | *string*[]                                                                  | :heavy_check_mark:                                                          | SteamID64s and Steam vanities (the name in steamcommunity.com/id/<vanity>). | [<br/>"76561199756787903",<br/>"gabelogannewell"<br/>]                      |