# Feature

badgeAware: the default buy never sends a set for a badge you have already maxed or cannot craft further (judged by your badges, not your inventory). buyAny: you can buy sets whatever your badges, including ones you have already crafted. buyOnePerGame: you can ask for at most one set per game. levelQuote: given a target level, the bot or site tells you how many sets that takes and what it costs. pickApps: you can choose which apps' sets you get. startedBadgesOnly: you can limit an order to badges you have already started. setSwap: the bot swaps your duplicate sets or cards for ones you can craft, with no currency involved. buysCards: the bot buys loose cards, not only complete sets. buysBoosters: the bot buys booster packs. buysProfileItems: the bot buys backgrounds or emoticons. webOrdering: you can order on a website instead of in Steam chat. siteBalance: you can hold a prepaid balance with the service, and failed trades are refunded to it. giftOrders: you can pay for sets delivered to another Steam account. restockAlerts: the bot messages you when new stock arrives, if you opt in. inventoryAware: the default buy never sends a set you already hold enough copies of in your inventory. A bot can declare both badgeAware and inventoryAware.

## Example Usage

```typescript
import { Feature } from "@steamsets/client-ts/models/components";

let value: Feature = "pickApps";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"badgeAware" | "buyAny" | "buyOnePerGame" | "levelQuote" | "pickApps" | "startedBadgesOnly" | "setSwap" | "buysCards" | "buysBoosters" | "buysProfileItems" | "webOrdering" | "siteBalance" | "giftOrders" | "restockAlerts" | "inventoryAware" | Unrecognized<string>
```