# Theme

The Steam profile theme: Steam's theme_id in lower case, default when Steam reports none or an unknown one. gameprofile is a Points Shop game profile, whose colors come from the equipped profile modifier

## Example Usage

```typescript
import { Theme } from "@steamsets/client-ts/models/components";

let value: Theme = "darkmode";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"default" | "summer" | "midnight" | "steel" | "cosmic" | "darkmode" | "pinkteal" | "mutedred" | "steamgreen" | "bluered" | "goldburgundy" | "vibrantblue" | "goldenprofiledebut" | "winterprofile2020" | "goldenweekprofile2021" | "summer2021" | "mutedblue" | "gold" | "burntorange" | "flatgrey" | "purple" | "greenslime" | "ghost" | "colornightmare" | "murugiah" | "lunar2022" | "winter2021" | "steamdeck" | "steam3000" | "gameprofile" | Unrecognized<string>
```