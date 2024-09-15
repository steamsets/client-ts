<!-- Start SDK Example Usage [usage] -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets();

async function run() {
  const result = await steamSets.account.accountV1ConnectionConnect({
    code: "123456",
    provider: "discord",
  }, {
    session: "<YOUR_BEARER_TOKEN_HERE>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->