# LocationSearchLocationsRequestBody

## Example Usage

```typescript
import { LocationSearchLocationsRequestBody } from "@steamsets/client-ts/models/components";

let value: LocationSearchLocationsRequestBody = {
  query: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Page size; capped at 50.                                                                                               |
| `query`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Typeahead query (typo-tolerant, diacritic-insensitive).                                                                |
| `type`                                                                                                                 | [components.LocationSearchLocationsRequestBodyType](../../models/components/locationsearchlocationsrequestbodytype.md) | :heavy_minus_sign:                                                                                                     | Restrict to one type.                                                                                                  |