# ItemGetRequestBody

## Example Usage

```typescript
import { ItemGetRequestBody } from "@steamsets/client-ts/models/components";

let value: ItemGetRequestBody = {
  appIds: [
    730,
  ],
  classIds: [
    667924416,
  ],
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `appIds`                                                                                                                                  | *number*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | Steam app ids. Returns every item of each app: cards, foils, booster packs, backgrounds and emoticons. Send classIds or appIds, not both. | [<br/>730<br/>]                                                                                                                           |
| `classIds`                                                                                                                                | *number*[]                                                                                                                                | :heavy_minus_sign:                                                                                                                        | Steam class ids, as in an inventory's classid. Send classIds or appIds, not both.                                                         | [<br/>667924416<br/>]                                                                                                                     |