/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AccountBadgeScarcityDataPoint = {
  /**
   * The app id
   */
  appId: number;
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
   * The image of the app
   */
  image: string;
  /**
   * The name of the app
   */
  name: string;
};

/** @internal */
export const AccountBadgeScarcityDataPoint$inboundSchema: z.ZodType<
  AccountBadgeScarcityDataPoint,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.number().int(),
  badgeId: z.string(),
  badgeImage: z.string(),
  badgeIsFoil: z.boolean(),
  badgeLevel: z.number().int(),
  badgeName: z.string(),
  badgeScarcity: z.number().int(),
  image: z.string(),
  name: z.string(),
});

/** @internal */
export type AccountBadgeScarcityDataPoint$Outbound = {
  appId: number;
  badgeId: string;
  badgeImage: string;
  badgeIsFoil: boolean;
  badgeLevel: number;
  badgeName: string;
  badgeScarcity: number;
  image: string;
  name: string;
};

/** @internal */
export const AccountBadgeScarcityDataPoint$outboundSchema: z.ZodType<
  AccountBadgeScarcityDataPoint$Outbound,
  z.ZodTypeDef,
  AccountBadgeScarcityDataPoint
> = z.object({
  appId: z.number().int(),
  badgeId: z.string(),
  badgeImage: z.string(),
  badgeIsFoil: z.boolean(),
  badgeLevel: z.number().int(),
  badgeName: z.string(),
  badgeScarcity: z.number().int(),
  image: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountBadgeScarcityDataPoint$ {
  /** @deprecated use `AccountBadgeScarcityDataPoint$inboundSchema` instead. */
  export const inboundSchema = AccountBadgeScarcityDataPoint$inboundSchema;
  /** @deprecated use `AccountBadgeScarcityDataPoint$outboundSchema` instead. */
  export const outboundSchema = AccountBadgeScarcityDataPoint$outboundSchema;
  /** @deprecated use `AccountBadgeScarcityDataPoint$Outbound` instead. */
  export type Outbound = AccountBadgeScarcityDataPoint$Outbound;
}
