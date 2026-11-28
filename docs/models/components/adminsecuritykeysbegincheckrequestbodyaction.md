# AdminSecurityKeysBeginCheckRequestBodyAction

What the check approves: confirming this sign-in, registering a further key, removing one key, an owner clearing another staff member's keys, an owner approving another staff member's first key, or one write of a config setting above the ordinary level

## Example Usage

```typescript
import { AdminSecurityKeysBeginCheckRequestBodyAction } from "@steamsets/client-ts/models/components";

let value: AdminSecurityKeysBeginCheckRequestBodyAction = "register";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"signIn" | "register" | "remove" | "clear" | "approveFirst" | "settingWrite" | Unrecognized<string>
```