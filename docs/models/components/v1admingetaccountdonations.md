# V1AdminGetAccountDonations

## Example Usage

```typescript
import { V1AdminGetAccountDonations } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountDonations = {
  custom: 2500,
  patreon: 1000,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `custom`                                     | *number*                                     | :heavy_check_mark:                           | The staff-granted donation total in cents    | 2500                                         |
| `patreon`                                    | *number*                                     | :heavy_check_mark:                           | The Patreon-reported donation total in cents | 1000                                         |