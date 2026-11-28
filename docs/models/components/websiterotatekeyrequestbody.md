# WebsiteRotateKeyRequestBody

## Example Usage

```typescript
import { WebsiteRotateKeyRequestBody } from "@steamsets/client-ts/models/components";

let value: WebsiteRotateKeyRequestBody = {
  listingId: "web_3cVFAKxh8Q2ZqkTq",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `listingId`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The website's public id.                                                                                                       | web_3cVFAKxh8Q2ZqkTq                                                                                                           |
| `oldKeyExpiresIn`                                                                                                              | [components.WebsiteRotateKeyRequestBodyOldKeyExpiresIn](../../models/components/websiterotatekeyrequestbodyoldkeyexpiresin.md) | :heavy_minus_sign:                                                                                                             | How long the old key keeps working, so the website can switch without failed pushes. now ends it at once.                      |                                                                                                                                |