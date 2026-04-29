# V1AdminDonationsCreateCurrencyRequestBody

## Example Usage

```typescript
import { V1AdminDonationsCreateCurrencyRequestBody } from "@steamsets/client-ts/models/components";

let value: V1AdminDonationsCreateCurrencyRequestBody = {
  chain: "ethereum",
  coinGeckoId: "<id>",
  contract: "<value>",
  decimals: 506770,
  isStablecoin: false,
  name: "<value>",
  symbol: "<value>",
  treasuryAddress: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `chain`                                                                              | [components.Chain](../../models/components/chain.md)                                 | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `coinGeckoId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | Required for non-stablecoins (e.g. 'solana', 'ethereum'); empty if isStablecoin=true |
| `contract`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | Empty for native asset (SOL/ETH); ERC-20 / SPL mint otherwise                        |
| `decimals`                                                                           | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `isStablecoin`                                                                       | *boolean*                                                                            | :heavy_check_mark:                                                                   | If true, treated as $1 USD (skip price lookup)                                       |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `symbol`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `treasuryAddress`                                                                    | *string*                                                                             | :heavy_check_mark:                                                                   | Wallet address that receives donations of this currency                              |