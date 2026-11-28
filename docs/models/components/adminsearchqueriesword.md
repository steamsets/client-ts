# AdminSearchQueriesWord

## Example Usage

```typescript
import { AdminSearchQueriesWord } from "@steamsets/client-ts/models/components";

let value: AdminSearchQueriesWord = {
  queries: 711160,
  searches: 15095,
  word: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `queries`                                    | *number*                                     | :heavy_check_mark:                           | Distinct queries that left it                |
| `searches`                                   | *number*                                     | :heavy_check_mark:                           | Settled queries that left this word unplaced |
| `word`                                       | *string*                                     | :heavy_check_mark:                           | N/A                                          |