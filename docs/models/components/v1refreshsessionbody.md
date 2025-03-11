# V1RefreshSessionBody

## Example Usage

```typescript
import { V1RefreshSessionBody } from "@steamsets/client-ts/models/components";

let value: V1RefreshSessionBody = {
  dollarSchema: "https://api.steamsets.com/schemas/V1RefreshSessionBody.json",
  refreshExpiresAt: new Date("2023-01-01T00:00:00Z"),
  refreshToken: "<value>",
  sessionExpiresAt: new Date("2023-01-01T00:00:00Z"),
  sessionToken: "auth_",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/V1RefreshSessionBody.json                                   |
| `refreshExpiresAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The expiration time of the refresh token                                                      | 2023-01-01T00:00:00Z                                                                          |
| `refreshToken`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The refresh token                                                                             |                                                                                               |
| `sessionExpiresAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The expiration time of the session token                                                      | 2023-01-01T00:00:00Z                                                                          |
| `sessionToken`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The session token                                                                             | auth_                                                                                         |