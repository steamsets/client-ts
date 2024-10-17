/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type LeaderboardRegion = {
  /**
   * The id of the region
   */
  id: number;
  /**
   * The name of the region
   */
  name: string;
};

/** @internal */
export const LeaderboardRegion$inboundSchema: z.ZodType<
  LeaderboardRegion,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  name: z.string(),
});

/** @internal */
export type LeaderboardRegion$Outbound = {
  id: number;
  name: string;
};

/** @internal */
export const LeaderboardRegion$outboundSchema: z.ZodType<
  LeaderboardRegion$Outbound,
  z.ZodTypeDef,
  LeaderboardRegion
> = z.object({
  id: z.number().int(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeaderboardRegion$ {
  /** @deprecated use `LeaderboardRegion$inboundSchema` instead. */
  export const inboundSchema = LeaderboardRegion$inboundSchema;
  /** @deprecated use `LeaderboardRegion$outboundSchema` instead. */
  export const outboundSchema = LeaderboardRegion$outboundSchema;
  /** @deprecated use `LeaderboardRegion$Outbound` instead. */
  export type Outbound = LeaderboardRegion$Outbound;
}
