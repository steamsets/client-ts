# V1SubmissionsCreateRequestBody

## Example Usage

```typescript
import { V1SubmissionsCreateRequestBody } from "@steamsets/client-ts/models/components";

let value: V1SubmissionsCreateRequestBody = {
  context: {
    build: "59d6b1a9",
    locale: "en",
    ref: "3f9a1c22",
    viewport: "1440x900",
  },
  kind: "bug",
  message: "The badge page shows 0 badges for my profile.",
  pageUrl: "https://steamsets.com/profiles/flo",
  reason: "not_updating",
  subjectAccountId: 1216167888,
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `context`                                                                                                          | [components.SubmissionContext](../../models/components/submissioncontext.md)                                       | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |                                                                                                                    |
| `kind`                                                                                                             | [components.V1SubmissionsCreateRequestBodyKind](../../models/components/v1submissionscreaterequestbodykind.md)     | :heavy_check_mark:                                                                                                 | What kind of submission this is. feature and feedback need a signed-in account                                     | bug                                                                                                                |
| `message`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | What went wrong, or what the reporter wants                                                                        | The badge page shows 0 badges for my profile.                                                                      |
| `pageUrl`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The page the report is sent from                                                                                   | https://steamsets.com/profiles/flo                                                                                 |
| `reason`                                                                                                           | [components.V1SubmissionsCreateRequestBodyReason](../../models/components/v1submissionscreaterequestbodyreason.md) | :heavy_minus_sign:                                                                                                 | Preset reason. Required for broken_profile, ignored otherwise                                                      | not_updating                                                                                                       |
| `subjectAccountId`                                                                                                 | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The profile a broken_profile report is about. Required for broken_profile, ignored otherwise                       | 1216167888                                                                                                         |