# SearchParseQueryResponseBody

## Example Usage

```typescript
import { SearchParseQueryResponseBody } from "@steamsets/client-ts/models/components";

let value: SearchParseQueryResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/SearchParseQueryResponseBody.json",
  answer: "<value>",
  cached: true,
  model: "Durango",
  promptVersion: 139628,
  schemaHash: "<value>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `dollarSchema`                                                                                              | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | A URL to the JSON Schema for this object.                                                                   | https://api.steamsets.com/schemas/SearchParseQueryResponseBody.json                                         |
| `answer`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The model's JSON answer: filters and the text left over. The page checks it against its filter definitions. |                                                                                                             |
| `cached`                                                                                                    | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `model`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |                                                                                                             |
| `promptVersion`                                                                                             | *number*                                                                                                    | :heavy_check_mark:                                                                                          | The version of the prompt and answer format.                                                                |                                                                                                             |
| `schemaHash`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | sha256 of the schema as sent.                                                                               |                                                                                                             |