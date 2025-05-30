/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V1AccountLeaderboardAccount,
  V1AccountLeaderboardAccount$inboundSchema,
  V1AccountLeaderboardAccount$Outbound,
  V1AccountLeaderboardAccount$outboundSchema,
} from "./v1accountleaderboardaccount.js";
import {
  V1LeaderboardAppInfo,
  V1LeaderboardAppInfo$inboundSchema,
  V1LeaderboardAppInfo$Outbound,
  V1LeaderboardAppInfo$outboundSchema,
} from "./v1leaderboardappinfo.js";
import {
  V1LeaderboardBadgeInfo,
  V1LeaderboardBadgeInfo$inboundSchema,
  V1LeaderboardBadgeInfo$Outbound,
  V1LeaderboardBadgeInfo$outboundSchema,
} from "./v1leaderboardbadgeinfo.js";
import {
  V1LeaderboardLocationInfo,
  V1LeaderboardLocationInfo$inboundSchema,
  V1LeaderboardLocationInfo$Outbound,
  V1LeaderboardLocationInfo$outboundSchema,
} from "./v1leaderboardlocationinfo.js";

export type V1LeaderboardGetAccountLeaderboardResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  accounts: Array<V1AccountLeaderboardAccount | null> | null;
  app?: V1LeaderboardAppInfo | null | undefined;
  badgeInfo?: V1LeaderboardBadgeInfo | null | undefined;
  /**
   * The ranks that are hidden in the leaderboard
   */
  hiddenRanks?: Array<number> | null | undefined;
  location?: Array<V1LeaderboardLocationInfo> | null | undefined;
  ownAccount?: V1AccountLeaderboardAccount | null | undefined;
  /**
   * The number of accounts that are ranked in the leaderboard
   */
  rankedOutOf?: number | undefined;
};

/** @internal */
export const V1LeaderboardGetAccountLeaderboardResponseBody$inboundSchema:
  z.ZodType<
    V1LeaderboardGetAccountLeaderboardResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    $schema: z.string().optional(),
    accounts: z.nullable(
      z.array(z.nullable(V1AccountLeaderboardAccount$inboundSchema)),
    ),
    app: z.nullable(V1LeaderboardAppInfo$inboundSchema).optional(),
    badgeInfo: z.nullable(V1LeaderboardBadgeInfo$inboundSchema).optional(),
    hiddenRanks: z.nullable(z.array(z.number().int())).optional(),
    location: z.nullable(z.array(V1LeaderboardLocationInfo$inboundSchema))
      .optional(),
    ownAccount: z.nullable(V1AccountLeaderboardAccount$inboundSchema)
      .optional(),
    rankedOutOf: z.number().int().default(0),
  }).transform((v) => {
    return remap$(v, {
      "$schema": "dollarSchema",
    });
  });

/** @internal */
export type V1LeaderboardGetAccountLeaderboardResponseBody$Outbound = {
  $schema?: string | undefined;
  accounts: Array<V1AccountLeaderboardAccount$Outbound | null> | null;
  app?: V1LeaderboardAppInfo$Outbound | null | undefined;
  badgeInfo?: V1LeaderboardBadgeInfo$Outbound | null | undefined;
  hiddenRanks?: Array<number> | null | undefined;
  location?: Array<V1LeaderboardLocationInfo$Outbound> | null | undefined;
  ownAccount?: V1AccountLeaderboardAccount$Outbound | null | undefined;
  rankedOutOf: number;
};

/** @internal */
export const V1LeaderboardGetAccountLeaderboardResponseBody$outboundSchema:
  z.ZodType<
    V1LeaderboardGetAccountLeaderboardResponseBody$Outbound,
    z.ZodTypeDef,
    V1LeaderboardGetAccountLeaderboardResponseBody
  > = z.object({
    dollarSchema: z.string().optional(),
    accounts: z.nullable(
      z.array(z.nullable(V1AccountLeaderboardAccount$outboundSchema)),
    ),
    app: z.nullable(V1LeaderboardAppInfo$outboundSchema).optional(),
    badgeInfo: z.nullable(V1LeaderboardBadgeInfo$outboundSchema).optional(),
    hiddenRanks: z.nullable(z.array(z.number().int())).optional(),
    location: z.nullable(z.array(V1LeaderboardLocationInfo$outboundSchema))
      .optional(),
    ownAccount: z.nullable(V1AccountLeaderboardAccount$outboundSchema)
      .optional(),
    rankedOutOf: z.number().int().default(0),
  }).transform((v) => {
    return remap$(v, {
      dollarSchema: "$schema",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardGetAccountLeaderboardResponseBody$ {
  /** @deprecated use `V1LeaderboardGetAccountLeaderboardResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    V1LeaderboardGetAccountLeaderboardResponseBody$inboundSchema;
  /** @deprecated use `V1LeaderboardGetAccountLeaderboardResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V1LeaderboardGetAccountLeaderboardResponseBody$outboundSchema;
  /** @deprecated use `V1LeaderboardGetAccountLeaderboardResponseBody$Outbound` instead. */
  export type Outbound =
    V1LeaderboardGetAccountLeaderboardResponseBody$Outbound;
}

export function v1LeaderboardGetAccountLeaderboardResponseBodyToJSON(
  v1LeaderboardGetAccountLeaderboardResponseBody:
    V1LeaderboardGetAccountLeaderboardResponseBody,
): string {
  return JSON.stringify(
    V1LeaderboardGetAccountLeaderboardResponseBody$outboundSchema.parse(
      v1LeaderboardGetAccountLeaderboardResponseBody,
    ),
  );
}

export function v1LeaderboardGetAccountLeaderboardResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  V1LeaderboardGetAccountLeaderboardResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      V1LeaderboardGetAccountLeaderboardResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'V1LeaderboardGetAccountLeaderboardResponseBody' from JSON`,
  );
}
