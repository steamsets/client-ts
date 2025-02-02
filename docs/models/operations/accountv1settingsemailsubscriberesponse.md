# AccountV1SettingsEmailSubscribeResponse

## Example Usage

```typescript
import { AccountV1SettingsEmailSubscribeResponse } from "@steamsets/client-ts/models/operations";

let value: AccountV1SettingsEmailSubscribeResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  headers: {
    "key": [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |