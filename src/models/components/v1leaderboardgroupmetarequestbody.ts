/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The leaderboard to get
 */
export const V1LeaderboardGroupMetaRequestBodyLeaderboard = {
  MostMembers: "most_members",
} as const;
/**
 * The leaderboard to get
 */
export type V1LeaderboardGroupMetaRequestBodyLeaderboard = ClosedEnum<
  typeof V1LeaderboardGroupMetaRequestBodyLeaderboard
>;

export type V1LeaderboardGroupMetaRequestBody = {
  /**
   * The leaderboard to get
   */
  leaderboard: V1LeaderboardGroupMetaRequestBodyLeaderboard;
};

/** @internal */
export const V1LeaderboardGroupMetaRequestBodyLeaderboard$inboundSchema:
  z.ZodNativeEnum<typeof V1LeaderboardGroupMetaRequestBodyLeaderboard> = z
    .nativeEnum(V1LeaderboardGroupMetaRequestBodyLeaderboard);

/** @internal */
export const V1LeaderboardGroupMetaRequestBodyLeaderboard$outboundSchema:
  z.ZodNativeEnum<typeof V1LeaderboardGroupMetaRequestBodyLeaderboard> =
    V1LeaderboardGroupMetaRequestBodyLeaderboard$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardGroupMetaRequestBodyLeaderboard$ {
  /** @deprecated use `V1LeaderboardGroupMetaRequestBodyLeaderboard$inboundSchema` instead. */
  export const inboundSchema =
    V1LeaderboardGroupMetaRequestBodyLeaderboard$inboundSchema;
  /** @deprecated use `V1LeaderboardGroupMetaRequestBodyLeaderboard$outboundSchema` instead. */
  export const outboundSchema =
    V1LeaderboardGroupMetaRequestBodyLeaderboard$outboundSchema;
}

/** @internal */
export const V1LeaderboardGroupMetaRequestBody$inboundSchema: z.ZodType<
  V1LeaderboardGroupMetaRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  leaderboard: V1LeaderboardGroupMetaRequestBodyLeaderboard$inboundSchema,
});

/** @internal */
export type V1LeaderboardGroupMetaRequestBody$Outbound = {
  leaderboard: string;
};

/** @internal */
export const V1LeaderboardGroupMetaRequestBody$outboundSchema: z.ZodType<
  V1LeaderboardGroupMetaRequestBody$Outbound,
  z.ZodTypeDef,
  V1LeaderboardGroupMetaRequestBody
> = z.object({
  leaderboard: V1LeaderboardGroupMetaRequestBodyLeaderboard$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardGroupMetaRequestBody$ {
  /** @deprecated use `V1LeaderboardGroupMetaRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1LeaderboardGroupMetaRequestBody$inboundSchema;
  /** @deprecated use `V1LeaderboardGroupMetaRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V1LeaderboardGroupMetaRequestBody$outboundSchema;
  /** @deprecated use `V1LeaderboardGroupMetaRequestBody$Outbound` instead. */
  export type Outbound = V1LeaderboardGroupMetaRequestBody$Outbound;
}

export function v1LeaderboardGroupMetaRequestBodyToJSON(
  v1LeaderboardGroupMetaRequestBody: V1LeaderboardGroupMetaRequestBody,
): string {
  return JSON.stringify(
    V1LeaderboardGroupMetaRequestBody$outboundSchema.parse(
      v1LeaderboardGroupMetaRequestBody,
    ),
  );
}

export function v1LeaderboardGroupMetaRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1LeaderboardGroupMetaRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1LeaderboardGroupMetaRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1LeaderboardGroupMetaRequestBody' from JSON`,
  );
}
