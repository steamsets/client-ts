# AppCapsule

## Example Usage

```typescript
import { AppCapsule } from "@steamsets/client-ts/models/components";

let value: AppCapsule = {
  appId: 730,
  capsuleHash: "942c04efaa5bc87afb6f2a97dbf17ac614c8a84d",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                 | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     | 730                                                                                                                     |
| `capsuleHash`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The directory Steam keeps the app's small capsule under, empty when it serves it at the bare {appId}/capsule_184x69.jpg | 942c04efaa5bc87afb6f2a97dbf17ac614c8a84d                                                                                |