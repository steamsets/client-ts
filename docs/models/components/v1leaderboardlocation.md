# V1LeaderboardLocation

## Example Usage

```typescript
import { V1LeaderboardLocation } from "@steamsets/client-ts/models/components";

let value: V1LeaderboardLocation = {
  city: "Bad Krozingen",
  country: "Germany",
  region: "Europe",
  state: "Baden-Wurttemberg",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `city`                                                   | *string*                                                 | :heavy_minus_sign:                                       | The city to get the leaderboard for, otherwise global    | Bad Krozingen                                            |
| `country`                                                | *string*                                                 | :heavy_minus_sign:                                       | The country to get the leaderboard for, otherwise global | Germany                                                  |
| `region`                                                 | *string*                                                 | :heavy_minus_sign:                                       | The region to get the leaderboard for, otherwise global  | Europe                                                   |
| `state`                                                  | *string*                                                 | :heavy_minus_sign:                                       | The state to get the leaderboard for, otherwise global   | Baden-Wurttemberg                                        |