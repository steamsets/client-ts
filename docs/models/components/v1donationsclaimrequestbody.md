# V1DonationsClaimRequestBody

## Example Usage

```typescript
import { V1DonationsClaimRequestBody } from "@steamsets/client-ts/models/components";

let value: V1DonationsClaimRequestBody = {
  chain: "ethereum",
  fromAddress: "<value>",
  signature: "<value>",
  txHash: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `chain`                                                                                                    | [components.V1DonationsClaimRequestBodyChain](../../models/components/v1donationsclaimrequestbodychain.md) | :heavy_check_mark:                                                                                         | Which chain the tx is on                                                                                   |
| `fromAddress`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The wallet address that sent the tx — must match what's on-chain                                           |
| `signature`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Wallet signature over the canonical claim message (hex 0x-prefixed for EVM, base58 for Solana)             |
| `txHash`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Tx signature (Solana) or tx hash (EVM)                                                                     |