/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1Stats = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The total number of accounts added
   */
  accountsAdded: number;
  /**
   * The total number of accounts updated
   */
  accountsUpdated: number;
  /**
   * The total cost of apps
   */
  appCost: number;
  /**
   * The total playtime of apps
   */
  appPlaytime: number;
  /**
   * The total number of apps
   */
  apps: number;
  /**
   * The total awards given
   */
  awardsGiven: number;
  /**
   * The total awards received
   */
  awardsReceived: number;
  /**
   * The total number of badges
   */
  badges: number;
  /**
   * The total number of bans
   */
  bans: number;
  /**
   * The total number of foil badges
   */
  foilBadges: number;
  /**
   * The total number of friends
   */
  friends: number;
  /**
   * The total number of game bans
   */
  gameBans: number;
  /**
   * The total level
   */
  level: number;
  /**
   * The total number of normal badges
   */
  normalBadges: number;
  /**
   * The total playtime
   */
  playtime: number;
  /**
   * The total points given
   */
  pointsGiven: number;
  /**
   * The total points received
   */
  pointsReceived: number;
  /**
   * The total steam sets score
   */
  steamSetsScore: number;
  /**
   * The total number of accounts
   */
  totalAccounts: number;
  /**
   * The total number of vac bans
   */
  vacBans: number;
  /**
   * The total xp
   */
  xp: number;
};

/** @internal */
export const V1Stats$inboundSchema: z.ZodType<V1Stats, z.ZodTypeDef, unknown> =
  z.object({
    $schema: z.string().optional(),
    accountsAdded: z.number().int(),
    accountsUpdated: z.number().int(),
    appCost: z.number().int(),
    appPlaytime: z.number().int(),
    apps: z.number().int(),
    awardsGiven: z.number().int(),
    awardsReceived: z.number().int(),
    badges: z.number().int(),
    bans: z.number().int(),
    foilBadges: z.number().int(),
    friends: z.number().int(),
    gameBans: z.number().int(),
    level: z.number().int(),
    normalBadges: z.number().int(),
    playtime: z.number().int(),
    pointsGiven: z.number().int(),
    pointsReceived: z.number().int(),
    steamSetsScore: z.number().int(),
    totalAccounts: z.number().int(),
    vacBans: z.number().int(),
    xp: z.number().int(),
  }).transform((v) => {
    return remap$(v, {
      "$schema": "dollarSchema",
    });
  });

/** @internal */
export type V1Stats$Outbound = {
  $schema?: string | undefined;
  accountsAdded: number;
  accountsUpdated: number;
  appCost: number;
  appPlaytime: number;
  apps: number;
  awardsGiven: number;
  awardsReceived: number;
  badges: number;
  bans: number;
  foilBadges: number;
  friends: number;
  gameBans: number;
  level: number;
  normalBadges: number;
  playtime: number;
  pointsGiven: number;
  pointsReceived: number;
  steamSetsScore: number;
  totalAccounts: number;
  vacBans: number;
  xp: number;
};

/** @internal */
export const V1Stats$outboundSchema: z.ZodType<
  V1Stats$Outbound,
  z.ZodTypeDef,
  V1Stats
> = z.object({
  dollarSchema: z.string().optional(),
  accountsAdded: z.number().int(),
  accountsUpdated: z.number().int(),
  appCost: z.number().int(),
  appPlaytime: z.number().int(),
  apps: z.number().int(),
  awardsGiven: z.number().int(),
  awardsReceived: z.number().int(),
  badges: z.number().int(),
  bans: z.number().int(),
  foilBadges: z.number().int(),
  friends: z.number().int(),
  gameBans: z.number().int(),
  level: z.number().int(),
  normalBadges: z.number().int(),
  playtime: z.number().int(),
  pointsGiven: z.number().int(),
  pointsReceived: z.number().int(),
  steamSetsScore: z.number().int(),
  totalAccounts: z.number().int(),
  vacBans: z.number().int(),
  xp: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1Stats$ {
  /** @deprecated use `V1Stats$inboundSchema` instead. */
  export const inboundSchema = V1Stats$inboundSchema;
  /** @deprecated use `V1Stats$outboundSchema` instead. */
  export const outboundSchema = V1Stats$outboundSchema;
  /** @deprecated use `V1Stats$Outbound` instead. */
  export type Outbound = V1Stats$Outbound;
}

export function v1StatsToJSON(v1Stats: V1Stats): string {
  return JSON.stringify(V1Stats$outboundSchema.parse(v1Stats));
}

export function v1StatsFromJSON(
  jsonString: string,
): SafeParseResult<V1Stats, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1Stats$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1Stats' from JSON`,
  );
}
