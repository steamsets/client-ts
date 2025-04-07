# AccountGetSessionResponse

## Example Usage

```typescript
import { AccountGetSessionResponse } from "@steamsets/client-ts/models/operations";

let value: AccountGetSessionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AccountGetSessionBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AccountGetSessionBody.json",
    accountId: 123456,
    avatar: "f1a1d2c3d0c9d1e1f2f3f4f5f6f7f8f9.jpg",
    email: "flo@example.com",
    isNew: true,
    level: 1,
    name: "flo",
    resources: [
      {
        resource: "social_links",
        value: "1",
      },
    ],
    roles: [
      {
        rating: 198277,
        role: "beta",
      },
    ],
    sessionData: {
      createdAt: new Date("2023-01-01T00:00:00Z"),
      expiresAt: new Date("2023-01-01T00:00:00Z"),
      ip: "127.0.0.1",
      lastSeen: new Date("2023-01-01T00:00:00Z"),
      level: 1,
      sessionId: "123456",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    },
    steamId: "76561198842603734",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `httpMeta`                                                                               | [components.HTTPMetadata](../../models/components/httpmetadata.md)                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `v1AccountGetSessionBody`                                                                | [components.V1AccountGetSessionBody](../../models/components/v1accountgetsessionbody.md) | :heavy_minus_sign:                                                                       | OK                                                                                       |