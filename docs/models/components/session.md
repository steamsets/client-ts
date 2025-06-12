# Session

## Example Usage

```typescript
import { Session } from "@steamsets/client-ts/models/components";

let value: Session = {
  createdAt: new Date("2023-01-01T00:00:00Z"),
  expiresAt: new Date("2023-01-01T00:00:00Z"),
  ip: "127.0.0.1",
  lastSeen: new Date("2023-01-01T00:00:00Z"),
  sessionId: "123456",
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | The time the session was created                                                                                    | 2023-01-01T00:00:00Z                                                                                                |
| `expiresAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | The time the session expires                                                                                        | 2023-01-01T00:00:00Z                                                                                                |
| `ip`                                                                                                                | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The ip of the session                                                                                               | 127.0.0.1                                                                                                           |
| `lastSeen`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | The time the session was last seen                                                                                  | 2023-01-01T00:00:00Z                                                                                                |
| `sessionId`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The session id                                                                                                      | 123456                                                                                                              |
| `userAgent`                                                                                                         | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | The user agent of the session                                                                                       | Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 |