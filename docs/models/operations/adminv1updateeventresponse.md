# AdminV1UpdateEventResponse

## Example Usage

```typescript
import { AdminV1UpdateEventResponse } from "@steamsets/client-ts/models/operations";

let value: AdminV1UpdateEventResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  v1AdminUpdateEventResponseBody: {
    dollarSchema:
      "https://api.steamsets.com/schemas/V1AdminUpdateEventResponseBody.json",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                             | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `v1AdminUpdateEventResponseBody`                                                                       | [components.V1AdminUpdateEventResponseBody](../../models/components/v1adminupdateeventresponsebody.md) | :heavy_minus_sign:                                                                                     | OK                                                                                                     |