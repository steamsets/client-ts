# WebsitePushResponseStoredSets

## Example Usage

```typescript
import { WebsitePushResponseStoredSets } from "@steamsets/client-ts/models/components";

let value: WebsitePushResponseStoredSets = {
  apps: 893869,
  foil: 639914,
  normal: 839842,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `apps`                        | *number*                      | :heavy_check_mark:            | Distinct apps with set stock. |
| `foil`                        | *number*                      | :heavy_check_mark:            | Complete foil sets.           |
| `normal`                      | *number*                      | :heavy_check_mark:            | Complete normal sets.         |