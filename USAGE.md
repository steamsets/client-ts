<!-- Start SDK Example Usage [usage] -->
```typescript
import { SteamSets } from "@steamsets/client-ts";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.connections.connect({
    code: "123456",
    provider: "discord",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->