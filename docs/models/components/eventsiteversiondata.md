# EventSiteVersionData

## Example Usage

```typescript
import { EventSiteVersionData } from "@steamsets/client-ts/models/components";

let value: EventSiteVersionData = {
  app: "<value>",
  builtAt: 920359,
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `app`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | The frontend app that runs the build, by its service name, for example ft-steamsets. |
| `builtAt`                                                                            | *number*                                                                             | :heavy_check_mark:                                                                   | When the build ran, in unix milliseconds.                                            |