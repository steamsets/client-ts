# ImageType

The type of the image

## Example Usage

```typescript
import { ImageType } from "@steamsets/client-ts/models/components";

let value: ImageType = "avatar";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"avatar" | "background" | "avatar_frame" | "aniamted_avatar" | "mini_background" | Unrecognized<string>
```