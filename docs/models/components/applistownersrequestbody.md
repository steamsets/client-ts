# AppListOwnersRequestBody

## Example Usage

```typescript
import { AppListOwnersRequestBody } from "@steamsets/client-ts/models/components";

let value: AppListOwnersRequestBody = {
  appId: 89246,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | App id                                                                                                                 |
| `cursor`                                                                                                               | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Opaque pagination cursor from the previous page's nextCursor. Omit for the first page.                                 |
| `limit`                                                                                                                | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | Page size (capped by donator tier)                                                                                     |
| `page`                                                                                                                 | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | 1-based page to jump to. Use this or cursor, not both. Reaches at most 100000 owners deep; walk with cursor past that. |