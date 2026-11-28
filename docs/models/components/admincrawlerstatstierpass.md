# AdminCrawlerStatsTierPass

## Example Usage

```typescript
import { AdminCrawlerStatsTierPass } from "@steamsets/client-ts/models/components";

let value: AdminCrawlerStatsTierPass = {
  due: 145232,
  enqueued: 984816,
  seen: 686938,
  tier: "10k+",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `due`                                        | *number*                                     | :heavy_check_mark:                           | How many of them were due a refresh          |                                              |
| `enqueued`                                   | *number*                                     | :heavy_check_mark:                           | How many of them the pass enqueued           |                                              |
| `seen`                                       | *number*                                     | :heavy_check_mark:                           | Entities of this tier the pass has looked at |                                              |
| `tier`                                       | *string*                                     | :heavy_check_mark:                           | N/A                                          | 10k+                                         |