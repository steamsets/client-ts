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
export const V1LeaderboardGetGroupsMetaRequestBodyLeaderboard = {
  MostMembers: "most_members",
} as const;
/**
 * The leaderboard to get
 */
export type V1LeaderboardGetGroupsMetaRequestBodyLeaderboard = ClosedEnum<
  typeof V1LeaderboardGetGroupsMetaRequestBodyLeaderboard
>;

export type V1LeaderboardGetGroupsMetaRequestBody = {
  /**
   * The leaderboard to get
   */
  leaderboard: V1LeaderboardGetGroupsMetaRequestBodyLeaderboard;
};

/** @internal */
export const V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$inboundSchema:
  z.ZodNativeEnum<typeof V1LeaderboardGetGroupsMetaRequestBodyLeaderboard> = z
    .nativeEnum(V1LeaderboardGetGroupsMetaRequestBodyLeaderboard);

/** @internal */
export const V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$outboundSchema:
  z.ZodNativeEnum<typeof V1LeaderboardGetGroupsMetaRequestBodyLeaderboard> =
    V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$ {
  /** @deprecated use `V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$inboundSchema` instead. */
  export const inboundSchema =
    V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$inboundSchema;
  /** @deprecated use `V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$outboundSchema` instead. */
  export const outboundSchema =
    V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$outboundSchema;
}

/** @internal */
export const V1LeaderboardGetGroupsMetaRequestBody$inboundSchema: z.ZodType<
  V1LeaderboardGetGroupsMetaRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  leaderboard: V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$inboundSchema,
});

/** @internal */
export type V1LeaderboardGetGroupsMetaRequestBody$Outbound = {
  leaderboard: string;
};

/** @internal */
export const V1LeaderboardGetGroupsMetaRequestBody$outboundSchema: z.ZodType<
  V1LeaderboardGetGroupsMetaRequestBody$Outbound,
  z.ZodTypeDef,
  V1LeaderboardGetGroupsMetaRequestBody
> = z.object({
  leaderboard: V1LeaderboardGetGroupsMetaRequestBodyLeaderboard$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardGetGroupsMetaRequestBody$ {
  /** @deprecated use `V1LeaderboardGetGroupsMetaRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    V1LeaderboardGetGroupsMetaRequestBody$inboundSchema;
  /** @deprecated use `V1LeaderboardGetGroupsMetaRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V1LeaderboardGetGroupsMetaRequestBody$outboundSchema;
  /** @deprecated use `V1LeaderboardGetGroupsMetaRequestBody$Outbound` instead. */
  export type Outbound = V1LeaderboardGetGroupsMetaRequestBody$Outbound;
}

export function v1LeaderboardGetGroupsMetaRequestBodyToJSON(
  v1LeaderboardGetGroupsMetaRequestBody: V1LeaderboardGetGroupsMetaRequestBody,
): string {
  return JSON.stringify(
    V1LeaderboardGetGroupsMetaRequestBody$outboundSchema.parse(
      v1LeaderboardGetGroupsMetaRequestBody,
    ),
  );
}

export function v1LeaderboardGetGroupsMetaRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1LeaderboardGetGroupsMetaRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1LeaderboardGetGroupsMetaRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1LeaderboardGetGroupsMetaRequestBody' from JSON`,
  );
}
