# V1CreateSessionBody

## Example Usage

```typescript
import { V1CreateSessionBody } from "@steamsets/client-ts/models/components";

let value: V1CreateSessionBody = {
    dollarSchema: "http://localhost:8080/schemas/V1CreateSessionBody.json",
    sessionId: "ABC123",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `dollarSchema`                                         | *string*                                               | :heavy_minus_sign:                                     | A URL to the JSON Schema for this object.              | http://localhost:8080/schemas/V1CreateSessionBody.json |
| `sessionId`                                            | *string*                                               | :heavy_check_mark:                                     | The session id                                         | ABC123                                                 |