# AppListCapsulesResponseBody

## Example Usage

```typescript
import { AppListCapsulesResponseBody } from "@steamsets/client-ts/models/components";

let value: AppListCapsulesResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AppListCapsulesResponseBody.json",
  capsules: [
    {
      appId: 730,
      capsuleHash: "942c04efaa5bc87afb6f2a97dbf17ac614c8a84d",
    },
  ],
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     | Example                                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                                  | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | A URL to the JSON Schema for this object.                                                                       | https://api.steamsets.com/schemas/AppListCapsulesResponseBody.json                                              |
| `capsules`                                                                                                      | [components.AppCapsule](../../models/components/appcapsule.md)[]                                                | :heavy_check_mark:                                                                                              | One entry per asked app whose Steam app info names a small capsule. An app left out has none SteamSets knows of |                                                                                                                 |