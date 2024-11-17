/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LeaderboardState = {
  /**
   * The id of the state
   */
  id: number;
  /**
   * The name of the state
   */
  name: string;
};

/** @internal */
export const LeaderboardState$inboundSchema: z.ZodType<
  LeaderboardState,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  name: z.string(),
});

/** @internal */
export type LeaderboardState$Outbound = {
  id: number;
  name: string;
};

/** @internal */
export const LeaderboardState$outboundSchema: z.ZodType<
  LeaderboardState$Outbound,
  z.ZodTypeDef,
  LeaderboardState
> = z.object({
  id: z.number().int(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeaderboardState$ {
  /** @deprecated use `LeaderboardState$inboundSchema` instead. */
  export const inboundSchema = LeaderboardState$inboundSchema;
  /** @deprecated use `LeaderboardState$outboundSchema` instead. */
  export const outboundSchema = LeaderboardState$outboundSchema;
  /** @deprecated use `LeaderboardState$Outbound` instead. */
  export type Outbound = LeaderboardState$Outbound;
}

export function leaderboardStateToJSON(
  leaderboardState: LeaderboardState,
): string {
  return JSON.stringify(
    LeaderboardState$outboundSchema.parse(leaderboardState),
  );
}

export function leaderboardStateFromJSON(
  jsonString: string,
): SafeParseResult<LeaderboardState, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeaderboardState$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeaderboardState' from JSON`,
  );
}
