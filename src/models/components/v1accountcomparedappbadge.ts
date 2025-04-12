/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountComparedAppBadge = {
  appId: number;
  appImage: string;
  appName: string;
  /**
   * Image URL of the highest badge
   */
  badgeImage: string;
  /**
   * Name of the highest badge
   */
  badgeName: string;
  /**
   * List of steamId and if they own the badge
   */
  foil?: { [k: string]: boolean } | undefined;
  foilScarcity: number;
  hasFoil: boolean;
  isEvent: boolean;
  isSale: boolean;
  /**
   * A map of steamId to the badge level they own
   */
  normal?: { [k: string]: number } | undefined;
  normalScarcity: number;
  steamId: number;
};

/** @internal */
export const V1AccountComparedAppBadge$inboundSchema: z.ZodType<
  V1AccountComparedAppBadge,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.number().int(),
  appImage: z.string(),
  appName: z.string(),
  badgeImage: z.string(),
  badgeName: z.string(),
  foil: z.record(z.boolean()).optional(),
  foilScarcity: z.number().int(),
  hasFoil: z.boolean(),
  isEvent: z.boolean(),
  isSale: z.boolean(),
  normal: z.record(z.number().int()).optional(),
  normalScarcity: z.number().int(),
  steamId: z.number().int(),
});

/** @internal */
export type V1AccountComparedAppBadge$Outbound = {
  appId: number;
  appImage: string;
  appName: string;
  badgeImage: string;
  badgeName: string;
  foil?: { [k: string]: boolean } | undefined;
  foilScarcity: number;
  hasFoil: boolean;
  isEvent: boolean;
  isSale: boolean;
  normal?: { [k: string]: number } | undefined;
  normalScarcity: number;
  steamId: number;
};

/** @internal */
export const V1AccountComparedAppBadge$outboundSchema: z.ZodType<
  V1AccountComparedAppBadge$Outbound,
  z.ZodTypeDef,
  V1AccountComparedAppBadge
> = z.object({
  appId: z.number().int(),
  appImage: z.string(),
  appName: z.string(),
  badgeImage: z.string(),
  badgeName: z.string(),
  foil: z.record(z.boolean()).optional(),
  foilScarcity: z.number().int(),
  hasFoil: z.boolean(),
  isEvent: z.boolean(),
  isSale: z.boolean(),
  normal: z.record(z.number().int()).optional(),
  normalScarcity: z.number().int(),
  steamId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountComparedAppBadge$ {
  /** @deprecated use `V1AccountComparedAppBadge$inboundSchema` instead. */
  export const inboundSchema = V1AccountComparedAppBadge$inboundSchema;
  /** @deprecated use `V1AccountComparedAppBadge$outboundSchema` instead. */
  export const outboundSchema = V1AccountComparedAppBadge$outboundSchema;
  /** @deprecated use `V1AccountComparedAppBadge$Outbound` instead. */
  export type Outbound = V1AccountComparedAppBadge$Outbound;
}

export function v1AccountComparedAppBadgeToJSON(
  v1AccountComparedAppBadge: V1AccountComparedAppBadge,
): string {
  return JSON.stringify(
    V1AccountComparedAppBadge$outboundSchema.parse(v1AccountComparedAppBadge),
  );
}

export function v1AccountComparedAppBadgeFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountComparedAppBadge, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountComparedAppBadge$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountComparedAppBadge' from JSON`,
  );
}
