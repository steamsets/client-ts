/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountLeaderboardBadgeSearch = {
  /**
   * The badge id to get the leaderboard for
   */
  id: number;
  /**
   * Whether the badge is foil or not
   */
  isFoil: boolean;
};

/** @internal */
export const V1AccountLeaderboardBadgeSearch$inboundSchema: z.ZodType<
  V1AccountLeaderboardBadgeSearch,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  isFoil: z.boolean(),
});

/** @internal */
export type V1AccountLeaderboardBadgeSearch$Outbound = {
  id: number;
  isFoil: boolean;
};

/** @internal */
export const V1AccountLeaderboardBadgeSearch$outboundSchema: z.ZodType<
  V1AccountLeaderboardBadgeSearch$Outbound,
  z.ZodTypeDef,
  V1AccountLeaderboardBadgeSearch
> = z.object({
  id: z.number().int(),
  isFoil: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountLeaderboardBadgeSearch$ {
  /** @deprecated use `V1AccountLeaderboardBadgeSearch$inboundSchema` instead. */
  export const inboundSchema = V1AccountLeaderboardBadgeSearch$inboundSchema;
  /** @deprecated use `V1AccountLeaderboardBadgeSearch$outboundSchema` instead. */
  export const outboundSchema = V1AccountLeaderboardBadgeSearch$outboundSchema;
  /** @deprecated use `V1AccountLeaderboardBadgeSearch$Outbound` instead. */
  export type Outbound = V1AccountLeaderboardBadgeSearch$Outbound;
}

export function v1AccountLeaderboardBadgeSearchToJSON(
  v1AccountLeaderboardBadgeSearch: V1AccountLeaderboardBadgeSearch,
): string {
  return JSON.stringify(
    V1AccountLeaderboardBadgeSearch$outboundSchema.parse(
      v1AccountLeaderboardBadgeSearch,
    ),
  );
}

export function v1AccountLeaderboardBadgeSearchFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountLeaderboardBadgeSearch, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountLeaderboardBadgeSearch$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountLeaderboardBadgeSearch' from JSON`,
  );
}
