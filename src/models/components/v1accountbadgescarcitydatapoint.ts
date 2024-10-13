/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V1AccountBadgeScarcityDataPoint = {
  /**
   * The app id
   */
  appId: number;
  /**
   * The badge completed at
   */
  badgeCompletedAt: Date;
  /**
   * The badge id
   */
  badgeId: string;
  /**
   * The badge image
   */
  badgeImage: string;
  /**
   * Whether the badge is foil
   */
  badgeIsFoil: boolean;
  /**
   * The badge level
   */
  badgeLevel: number;
  /**
   * The badge name
   */
  badgeName: string;
  /**
   * The badge scarcity
   */
  badgeScarcity: number;
  /**
   * The badge steam id
   */
  badgeSteamId: number;
  /**
   * The badge xp
   */
  badgeXP: number;
  /**
   * The image of the app
   */
  image: string;
  /**
   * The name of the app
   */
  name: string;
};

/** @internal */
export const V1AccountBadgeScarcityDataPoint$inboundSchema: z.ZodType<
  V1AccountBadgeScarcityDataPoint,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.number().int(),
  badgeCompletedAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  badgeId: z.string(),
  badgeImage: z.string(),
  badgeIsFoil: z.boolean(),
  badgeLevel: z.number().int(),
  badgeName: z.string(),
  badgeScarcity: z.number().int(),
  badgeSteamId: z.number().int(),
  badgeXP: z.number().int(),
  image: z.string(),
  name: z.string(),
});

/** @internal */
export type V1AccountBadgeScarcityDataPoint$Outbound = {
  appId: number;
  badgeCompletedAt: string;
  badgeId: string;
  badgeImage: string;
  badgeIsFoil: boolean;
  badgeLevel: number;
  badgeName: string;
  badgeScarcity: number;
  badgeSteamId: number;
  badgeXP: number;
  image: string;
  name: string;
};

/** @internal */
export const V1AccountBadgeScarcityDataPoint$outboundSchema: z.ZodType<
  V1AccountBadgeScarcityDataPoint$Outbound,
  z.ZodTypeDef,
  V1AccountBadgeScarcityDataPoint
> = z.object({
  appId: z.number().int(),
  badgeCompletedAt: z.date().transform(v => v.toISOString()),
  badgeId: z.string(),
  badgeImage: z.string(),
  badgeIsFoil: z.boolean(),
  badgeLevel: z.number().int(),
  badgeName: z.string(),
  badgeScarcity: z.number().int(),
  badgeSteamId: z.number().int(),
  badgeXP: z.number().int(),
  image: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountBadgeScarcityDataPoint$ {
  /** @deprecated use `V1AccountBadgeScarcityDataPoint$inboundSchema` instead. */
  export const inboundSchema = V1AccountBadgeScarcityDataPoint$inboundSchema;
  /** @deprecated use `V1AccountBadgeScarcityDataPoint$outboundSchema` instead. */
  export const outboundSchema = V1AccountBadgeScarcityDataPoint$outboundSchema;
  /** @deprecated use `V1AccountBadgeScarcityDataPoint$Outbound` instead. */
  export type Outbound = V1AccountBadgeScarcityDataPoint$Outbound;
}
