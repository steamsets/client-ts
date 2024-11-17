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

export type V1AccountLeaderboardResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  accounts: Array<V1AccountLeaderboardAccount> | null;
  app?: V1LeaderboardAppInfo | null | undefined;
  badgeInfo?: V1LeaderboardBadgeInfo | null | undefined;
  location?: Array<V1LeaderboardLocationInfo> | null | undefined;
  ownAccount?: V1AccountLeaderboardAccount | null | undefined;
  /**
   * The number of accounts that are ranked in the leaderboard
   */
  rankedOutOf?: number | undefined;
};

/** @internal */
export const V1AccountLeaderboardResponseBody$inboundSchema: z.ZodType<
  V1AccountLeaderboardResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  accounts: z.nullable(z.array(V1AccountLeaderboardAccount$inboundSchema)),
  app: z.nullable(V1LeaderboardAppInfo$inboundSchema).optional(),
  badgeInfo: z.nullable(V1LeaderboardBadgeInfo$inboundSchema).optional(),
  location: z.nullable(z.array(V1LeaderboardLocationInfo$inboundSchema))
    .optional(),
  ownAccount: z.nullable(V1AccountLeaderboardAccount$inboundSchema).optional(),
  rankedOutOf: z.number().int().default(0),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1AccountLeaderboardResponseBody$Outbound = {
  $schema?: string | undefined;
  accounts: Array<V1AccountLeaderboardAccount$Outbound> | null;
  app?: V1LeaderboardAppInfo$Outbound | null | undefined;
  badgeInfo?: V1LeaderboardBadgeInfo$Outbound | null | undefined;
  location?: Array<V1LeaderboardLocationInfo$Outbound> | null | undefined;
  ownAccount?: V1AccountLeaderboardAccount$Outbound | null | undefined;
  rankedOutOf: number;
};

/** @internal */
export const V1AccountLeaderboardResponseBody$outboundSchema: z.ZodType<
  V1AccountLeaderboardResponseBody$Outbound,
  z.ZodTypeDef,
  V1AccountLeaderboardResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  accounts: z.nullable(z.array(V1AccountLeaderboardAccount$outboundSchema)),
  app: z.nullable(V1LeaderboardAppInfo$outboundSchema).optional(),
  badgeInfo: z.nullable(V1LeaderboardBadgeInfo$outboundSchema).optional(),
  location: z.nullable(z.array(V1LeaderboardLocationInfo$outboundSchema))
    .optional(),
  ownAccount: z.nullable(V1AccountLeaderboardAccount$outboundSchema).optional(),
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
export namespace V1AccountLeaderboardResponseBody$ {
  /** @deprecated use `V1AccountLeaderboardResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountLeaderboardResponseBody$inboundSchema;
  /** @deprecated use `V1AccountLeaderboardResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1AccountLeaderboardResponseBody$outboundSchema;
  /** @deprecated use `V1AccountLeaderboardResponseBody$Outbound` instead. */
  export type Outbound = V1AccountLeaderboardResponseBody$Outbound;
}

export function v1AccountLeaderboardResponseBodyToJSON(
  v1AccountLeaderboardResponseBody: V1AccountLeaderboardResponseBody,
): string {
  return JSON.stringify(
    V1AccountLeaderboardResponseBody$outboundSchema.parse(
      v1AccountLeaderboardResponseBody,
    ),
  );
}

export function v1AccountLeaderboardResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountLeaderboardResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountLeaderboardResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountLeaderboardResponseBody' from JSON`,
  );
}
