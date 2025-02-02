<!-- Start SDK Example Usage [usage] -->
```typescript
import { SteamSets } from "@steamsets/client-ts";
import { openAsBlob } from "node:fs";

const steamSets = new SteamSets({
  token: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await steamSets.resendWebhook({
    requestBody: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->