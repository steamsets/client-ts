# SiteAnnounceVersionRequestBody

## Example Usage

```typescript
import { SiteAnnounceVersionRequestBody } from "@steamsets/client-ts/models/components";

let value: SiteAnnounceVersionRequestBody = {
  app: "<value>",
  builtAt: 534889,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `app`                                                                                                   | *string*                                                                                                | :heavy_check_mark:                                                                                      | The frontend app that runs the build, by its service name: ft-steamsets, ft-levels or ft-levels-canary. |
| `builtAt`                                                                                               | *number*                                                                                                | :heavy_check_mark:                                                                                      | When the build ran, in unix milliseconds. A later build has a greater value.                            |