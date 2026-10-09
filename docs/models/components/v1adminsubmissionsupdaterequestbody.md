# V1AdminSubmissionsUpdateRequestBody

## Example Usage

```typescript
import { V1AdminSubmissionsUpdateRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminSubmissionsUpdateRequestBody = {
  id: "sub_2bM9x0aQ",
  status: "triaged",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Submission id                                                                                                                | sub_2bM9x0aQ                                                                                                                 |
| `reply`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The answer the reporter sees. Leave out to keep the current one, send an empty string to remove it                           |                                                                                                                              |
| `status`                                                                                                                     | [components.V1AdminSubmissionsUpdateRequestBodyStatus](../../models/components/v1adminsubmissionsupdaterequestbodystatus.md) | :heavy_check_mark:                                                                                                           | The new status                                                                                                               | triaged                                                                                                                      |