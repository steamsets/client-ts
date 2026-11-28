# V1AdminGetAccountCountry

## Example Usage

```typescript
import { V1AdminGetAccountCountry } from "@steamsets/client-ts/models/components";

let value: V1AdminGetAccountCountry = {
  nextChangeAt: new Date("2024-12-07T05:15:07.322Z"),
  override: {
    code: "DE",
    name: "Germany",
  },
  steam: {
    code: "DE",
    name: "Germany",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `nextChangeAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | When the account owner may change the override again, or null when they may change it now. Staff are not limited |
| `override`                                                                                                       | [components.AdminCountry](../../models/components/admincountry.md)                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `steam`                                                                                                          | [components.AdminCountry](../../models/components/admincountry.md)                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |