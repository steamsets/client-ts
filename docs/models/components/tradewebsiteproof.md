# TradeWebsiteProof

## Example Usage

```typescript
import { TradeWebsiteProof } from "@steamsets/client-ts/models/components";

let value: TradeWebsiteProof = {
  method: "file",
  value: "steamsets-verify=0123abcd",
  where: "example.com",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `method`                                                                             | [components.Method](../../models/components/method.md)                               | :heavy_check_mark:                                                                   | dns: a TXT record on the host. file: a file on the host, served over https.          |                                                                                      |
| `value`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | For dns, the whole TXT value. For file, the file's whole content.                    | steamsets-verify=0123abcd                                                            |
| `where`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | For dns, the name the TXT record goes on. For file, the URL the file must answer at. | example.com                                                                          |