/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The leaderboard to get
 */
export const V1GroupLeaderboardRequestBodyLeaderboard = {
  MostMembers: "most_members",
} as const;
/**
 * The leaderboard to get
 */
export type V1GroupLeaderboardRequestBodyLeaderboard = ClosedEnum<
  typeof V1GroupLeaderboardRequestBodyLeaderboard
>;

export type V1GroupLeaderboardRequestBody = {
  /**
   * The end index
   */
  end?: number | null | undefined;
  /**
   * The rank to go to
   */
  goToLeaderboardRank?: number | null | undefined;
  /**
   * The leaderboard to get
   */
  leaderboard: V1GroupLeaderboardRequestBodyLeaderboard;
  /**
   * The start index
   */
  start?: number | null | undefined;
};

/** @internal */
export const V1GroupLeaderboardRequestBodyLeaderboard$inboundSchema:
  z.ZodNativeEnum<typeof V1GroupLeaderboardRequestBodyLeaderboard> = z
    .nativeEnum(V1GroupLeaderboardRequestBodyLeaderboard);

/** @internal */
export const V1GroupLeaderboardRequestBodyLeaderboard$outboundSchema:
  z.ZodNativeEnum<typeof V1GroupLeaderboardRequestBodyLeaderboard> =
    V1GroupLeaderboardRequestBodyLeaderboard$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1GroupLeaderboardRequestBodyLeaderboard$ {
  /** @deprecated use `V1GroupLeaderboardRequestBodyLeaderboard$inboundSchema` instead. */
  export const inboundSchema =
    V1GroupLeaderboardRequestBodyLeaderboard$inboundSchema;
  /** @deprecated use `V1GroupLeaderboardRequestBodyLeaderboard$outboundSchema` instead. */
  export const outboundSchema =
    V1GroupLeaderboardRequestBodyLeaderboard$outboundSchema;
}

/** @internal */
export const V1GroupLeaderboardRequestBody$inboundSchema: z.ZodType<
  V1GroupLeaderboardRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  end: z.nullable(z.number().int()).optional(),
  goToLeaderboardRank: z.nullable(z.number().int()).optional(),
  leaderboard: V1GroupLeaderboardRequestBodyLeaderboard$inboundSchema,
  start: z.nullable(z.number().int()).optional(),
});

/** @internal */
export type V1GroupLeaderboardRequestBody$Outbound = {
  end?: number | null | undefined;
  goToLeaderboardRank?: number | null | undefined;
  leaderboard: string;
  start?: number | null | undefined;
};

/** @internal */
export const V1GroupLeaderboardRequestBody$outboundSchema: z.ZodType<
  V1GroupLeaderboardRequestBody$Outbound,
  z.ZodTypeDef,
  V1GroupLeaderboardRequestBody
> = z.object({
  end: z.nullable(z.number().int()).optional(),
  goToLeaderboardRank: z.nullable(z.number().int()).optional(),
  leaderboard: V1GroupLeaderboardRequestBodyLeaderboard$outboundSchema,
  start: z.nullable(z.number().int()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1GroupLeaderboardRequestBody$ {
  /** @deprecated use `V1GroupLeaderboardRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1GroupLeaderboardRequestBody$inboundSchema;
  /** @deprecated use `V1GroupLeaderboardRequestBody$outboundSchema` instead. */
  export const outboundSchema = V1GroupLeaderboardRequestBody$outboundSchema;
  /** @deprecated use `V1GroupLeaderboardRequestBody$Outbound` instead. */
  export type Outbound = V1GroupLeaderboardRequestBody$Outbound;
}
