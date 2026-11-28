# AdminSecurityKeysCeremony

## Example Usage

```typescript
import { AdminSecurityKeysCeremony } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysCeremony = {
  dollarSchema:
    "https://api.steamsets.com/schemas/AdminSecurityKeysCeremony.json",
  challengeId: "<id>",
  expiresAt: new Date("2025-03-01T10:08:52.174Z"),
  optionsJson: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | A URL to the JSON Schema for this object.                                                     | https://api.steamsets.com/schemas/AdminSecurityKeysCeremony.json                              |
| `challengeId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | Send it back with the browser's answer                                                        |                                                                                               |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the challenge stops working                                                              |                                                                                               |
| `optionsJson`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The WebAuthn options for navigator.credentials, as JSON                                       |                                                                                               |