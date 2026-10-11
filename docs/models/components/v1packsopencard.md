# V1PacksOpenCard

## Example Usage

```typescript
import { V1PacksOpenCard } from "@steamsets/client-ts/models/components";

let value: V1PacksOpenCard = {
  id: "badges",
  rarity: "common",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `id`                                                   | [components.Id](../../models/components/id.md)         | :heavy_check_mark:                                     | The card. The site owns its art and link               | badges                                                 |
| `rarity`                                               | [components.Rarity](../../models/components/rarity.md) | :heavy_check_mark:                                     | How often the card comes out of a pack                 | common                                                 |