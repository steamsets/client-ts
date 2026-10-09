# SubmissionContext

## Example Usage

```typescript
import { SubmissionContext } from "@steamsets/client-ts/models/components";

let value: SubmissionContext = {
  build: "59d6b1a9",
  locale: "en",
  ref: "3f9a1c22",
  viewport: "1440x900",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `build`                                                        | *string*                                                       | :heavy_minus_sign:                                             | Frontend build id                                              | 59d6b1a9                                                       |
| `locale`                                                       | *string*                                                       | :heavy_minus_sign:                                             | Locale of the page                                             | en                                                             |
| `ref`                                                          | *string*                                                       | :heavy_minus_sign:                                             | Short request reference shown on the page the report came from | 3f9a1c22                                                       |
| `userAgent`                                                    | *string*                                                       | :heavy_minus_sign:                                             | Browser user agent                                             |                                                                |
| `viewport`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Viewport size as WIDTHxHEIGHT                                  | 1440x900                                                       |