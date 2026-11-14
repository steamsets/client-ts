# AdminBotBrandListLogo

## Example Usage

```typescript
import { AdminBotBrandListLogo } from "@steamsets/client-ts/models/components";

let value: AdminBotBrandListLogo = {
  source: "hand",
  url: "https://moist-lotion.com/",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                          | [components.AdminBotBrandListLogoSource](../../models/components/adminbotbrandlistlogosource.md)                  | :heavy_check_mark:                                                                                                | hand: staff set it. website: found on the brand's website. bots: the avatar most of its bots show. none: no logo. |
| `url`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Empty when the brand has no logo at all.                                                                          |