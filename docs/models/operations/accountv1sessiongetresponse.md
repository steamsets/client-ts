# AccountV1SessionGetResponse

## Example Usage

```typescript
import { AccountV1SessionGetResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SessionGetResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1GetSessionBody: {
    dollarSchema: "https://api.steamsets.com/schemas/V1GetSessionBody.json",
    accountId: 123456,
    resources: [
      {
        resource: "background",
        value: "1",
      },
    ],
    roles: [
      {
        rating: 161309,
        role: "diamond",
      },
    ],
    sessionData: {
      createdAt: new Date("2023-01-01T00:00:00Z"),
      expiresAt: new Date("2023-01-01T00:00:00Z"),
      ip: "127.0.0.1",
      lastSeen: new Date("2023-01-01T00:00:00Z"),
      sessionId: "123456",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
    steamId: "76561198842603734",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `v1GetSessionBody`                                                         | [components.V1GetSessionBody](../../models/components/v1getsessionbody.md) | :heavy_minus_sign:                                                         | OK                                                                         |