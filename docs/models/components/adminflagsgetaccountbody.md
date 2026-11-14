# AdminFlagsGetAccountBody

## Example Usage

```typescript
import { AdminFlagsGetAccountBody } from "@steamsets/client-ts/models/components";

let value: AdminFlagsGetAccountBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminFlagsGetAccountBody.json",
  flags: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AdminFlagsGetAccountBody.json                               |
| `flags`                                                                                       | [components.AdminFlagsGetAccountFlag](../../models/components/adminflagsgetaccountflag.md)[]  | :heavy_check_mark:                                                                            | Every flag the backend checks or that has a row, evaluated for the account and sorted by slug |                                                                                               |