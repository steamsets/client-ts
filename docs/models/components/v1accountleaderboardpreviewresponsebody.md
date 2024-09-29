# V1AccountLeaderboardPreviewResponseBody

## Example Usage

```typescript
import { V1AccountLeaderboardPreviewResponseBody } from "@steamsets/client-ts/models/components";

let value: V1AccountLeaderboardPreviewResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/V1AccountLeaderboardPreviewResponseBody.json",
  currentRank: 123456,
  wouldBeRank: 123456,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `dollarSchema`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | A URL to the JSON Schema for this object.                                      | https://api.steamsets.com/schemas/V1AccountLeaderboardPreviewResponseBody.json |
| `currentRank`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | The current rank of the account                                                | 123456                                                                         |
| `wouldBeRank`                                                                  | *number*                                                                       | :heavy_check_mark:                                                             | The rank the account would be                                                  | 123456                                                                         |