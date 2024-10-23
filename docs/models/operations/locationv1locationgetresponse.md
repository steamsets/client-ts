# LocationV1LocationGetResponse

## Example Usage

```typescript
import { LocationV1LocationGetResponse } from "@steamsets/client-ts/models/operations";

let value: LocationV1LocationGetResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  regions: [
    {
      countries: [
        {
          code: "<value>",
          name: "<value>",
          states: [
            {
              cities: [
                {
                  name: "<value>",
                },
              ],
              code: "<value>",
              name: "<value>",
            },
          ],
        },
      ],
      name: "Europe",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `regions`                                                          | [components.Region](../../models/components/region.md)[]           | :heavy_minus_sign:                                                 | OK                                                                 |