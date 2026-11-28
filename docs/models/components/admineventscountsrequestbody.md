# AdminEventsCountsRequestBody

## Example Usage

```typescript
import { AdminEventsCountsRequestBody } from "@steamsets/client-ts/models/components";

let value: AdminEventsCountsRequestBody = {
  product: "steamsets",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `excludeCrawlers`                                                                                                | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | Leave out the crawl runs of these crawlers, such as group or market.                                             |
| `excludeKinds`                                                                                                   | *string*[]                                                                                                       | :heavy_minus_sign:                                                                                               | Leave these kinds out of today's count. The per-kind counts list every kind; a client skips the ones it hides.   |
| `excludePeople`                                                                                                  | *number*[]                                                                                                       | :heavy_minus_sign:                                                                                               | Leave out events about or by these accounts, as account ids.                                                     |
| `product`                                                                                                        | [components.AdminEventsCountsRequestBodyProduct](../../models/components/admineventscountsrequestbodyproduct.md) | :heavy_check_mark:                                                                                               | The product whose events to count.                                                                               |