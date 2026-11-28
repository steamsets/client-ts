# PublicAccountVanity

## Example Usage

```typescript
import { PublicAccountVanity } from "@steamsets/client-ts/models/components";

let value: PublicAccountVanity = {
  steam: "<value>",
  steamSets: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `steam`                                                              | *string*                                                             | :heavy_check_mark:                                                   | The name in steamcommunity.com/id/<steam>, empty when there is none. |
| `steamSets`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The name in steamsets.com/<steamSets>, empty when there is none.     |