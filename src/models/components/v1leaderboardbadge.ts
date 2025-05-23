/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1LeaderboardBadge = {
  /**
   * The app id
   */
  appId: number;
  /**
   * The image of the app
   */
  appImage: string;
  /**
   * The name of the app
   */
  appName: string;
  /**
   * The public id of the badge
   */
  badgeId: string;
  /**
   * The time the badge was completed
   */
  firstCompletion: Date | null;
  /**
   * The level the badge was completed
   */
  highestLevel: number | null;
  /**
   * The image of the badge
   */
  image: string;
  /**
   * Whether the badge is an event or not
   */
  isEvent: boolean;
  /**
   * Whether the badge is foil or not
   */
  isFoil: boolean;
  /**
   * Whether the badge is a sale or not
   */
  isSale: boolean;
  /**
   * The time the badge was completed
   */
  lastCompletion: Date | null;
  /**
   * The level of the badge
   */
  level: number;
  /**
   * The name of the badge
   */
  name: string;
  /**
   * The price of the badge
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  price: number;
  /**
   * The scarcity of the badge
   */
  scarcity: number | null;
  /**
   * The steam id
   */
  steamId: number;
  /**
   * The xp of the badge
   */
  xp: number;
};

/** @internal */
export const V1LeaderboardBadge$inboundSchema: z.ZodType<
  V1LeaderboardBadge,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.number().int(),
  appImage: z.string(),
  appName: z.string(),
  badgeId: z.string(),
  firstCompletion: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  highestLevel: z.nullable(z.number().int()),
  image: z.string(),
  isEvent: z.boolean(),
  isFoil: z.boolean(),
  isSale: z.boolean(),
  lastCompletion: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  level: z.number().int(),
  name: z.string(),
  price: z.number().int(),
  scarcity: z.nullable(z.number().int()),
  steamId: z.number().int(),
  xp: z.number().int(),
});

/** @internal */
export type V1LeaderboardBadge$Outbound = {
  appId: number;
  appImage: string;
  appName: string;
  badgeId: string;
  firstCompletion: string | null;
  highestLevel: number | null;
  image: string;
  isEvent: boolean;
  isFoil: boolean;
  isSale: boolean;
  lastCompletion: string | null;
  level: number;
  name: string;
  price: number;
  scarcity: number | null;
  steamId: number;
  xp: number;
};

/** @internal */
export const V1LeaderboardBadge$outboundSchema: z.ZodType<
  V1LeaderboardBadge$Outbound,
  z.ZodTypeDef,
  V1LeaderboardBadge
> = z.object({
  appId: z.number().int(),
  appImage: z.string(),
  appName: z.string(),
  badgeId: z.string(),
  firstCompletion: z.nullable(z.date().transform(v => v.toISOString())),
  highestLevel: z.nullable(z.number().int()),
  image: z.string(),
  isEvent: z.boolean(),
  isFoil: z.boolean(),
  isSale: z.boolean(),
  lastCompletion: z.nullable(z.date().transform(v => v.toISOString())),
  level: z.number().int(),
  name: z.string(),
  price: z.number().int(),
  scarcity: z.nullable(z.number().int()),
  steamId: z.number().int(),
  xp: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardBadge$ {
  /** @deprecated use `V1LeaderboardBadge$inboundSchema` instead. */
  export const inboundSchema = V1LeaderboardBadge$inboundSchema;
  /** @deprecated use `V1LeaderboardBadge$outboundSchema` instead. */
  export const outboundSchema = V1LeaderboardBadge$outboundSchema;
  /** @deprecated use `V1LeaderboardBadge$Outbound` instead. */
  export type Outbound = V1LeaderboardBadge$Outbound;
}

export function v1LeaderboardBadgeToJSON(
  v1LeaderboardBadge: V1LeaderboardBadge,
): string {
  return JSON.stringify(
    V1LeaderboardBadge$outboundSchema.parse(v1LeaderboardBadge),
  );
}

export function v1LeaderboardBadgeFromJSON(
  jsonString: string,
): SafeParseResult<V1LeaderboardBadge, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1LeaderboardBadge$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1LeaderboardBadge' from JSON`,
  );
}
