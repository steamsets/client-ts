# V1AdminBanPlayerRequestBody

## Example Usage

```typescript
import { V1AdminBanPlayerRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminBanPlayerRequestBody = {
  cheatDescription: "<value>",
  durationSeconds: 258646,
  steamId64: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `cheatDescription`                   | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `durationSeconds`                    | *number*                             | :heavy_check_mark:                   | Ban length in seconds; 0 = permanent |
| `reporterSteamId64`                  | *string*                             | :heavy_minus_sign:                   | Optional reporter SteamID64          |
| `steamId64`                          | *string*                             | :heavy_check_mark:                   | Target player SteamID64              |