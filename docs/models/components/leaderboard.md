# Leaderboard

The leaderboard of the best leaderboard

## Example Usage

```typescript
import { Leaderboard } from "@steamsets/client-ts/models/components";

let value: Leaderboard = "points_given";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"apps" | "app_playtime" | "app_valid_playtime" | "awards_given" | "awards_received" | "bans" | "game_bans" | "vac_bans" | "donations" | "foil_badges" | "normal_badges" | "badges" | "playtime" | "valid_playtime" | "points_given" | "points_received" | "steam_sets" | "xp" | Unrecognized<string>
```