# WebsiteRotateKeyRequestBodyOldKeyExpiresIn

How long the old key keeps working, so the website can switch without failed pushes. now ends it at once.

## Example Usage

```typescript
import { WebsiteRotateKeyRequestBodyOldKeyExpiresIn } from "@steamsets/client-ts/models/components";

let value: WebsiteRotateKeyRequestBodyOldKeyExpiresIn = "24h";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"now" | "1h" | "24h" | "7d" | Unrecognized<string>
```