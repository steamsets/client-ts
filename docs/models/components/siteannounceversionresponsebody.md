# SiteAnnounceVersionResponseBody

## Example Usage

```typescript
import { SiteAnnounceVersionResponseBody } from "@steamsets/client-ts/models/components";

let value: SiteAnnounceVersionResponseBody = {
  dollarSchema:
    "https://api.steamsets.com/schemas/SiteAnnounceVersionResponseBody.json",
  published: true,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `dollarSchema`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | A URL to the JSON Schema for this object.                                    | https://api.steamsets.com/schemas/SiteAnnounceVersionResponseBody.json       |
| `published`                                                                  | *boolean*                                                                    | :heavy_check_mark:                                                           | False when this pod already announced this build of the app, or a later one. |                                                                              |