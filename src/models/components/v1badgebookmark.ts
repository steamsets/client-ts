/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1BadgeBookmark = {
  /**
   * The badge id
   */
  badgeId: string;
  /**
   * The time the badge was bookmarked
   */
  bookmarkedAt: Date;
};

/** @internal */
export const V1BadgeBookmark$inboundSchema: z.ZodType<
  V1BadgeBookmark,
  z.ZodTypeDef,
  unknown
> = z.object({
  badgeId: z.string(),
  bookmarkedAt: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
});

/** @internal */
export type V1BadgeBookmark$Outbound = {
  badgeId: string;
  bookmarkedAt: string;
};

/** @internal */
export const V1BadgeBookmark$outboundSchema: z.ZodType<
  V1BadgeBookmark$Outbound,
  z.ZodTypeDef,
  V1BadgeBookmark
> = z.object({
  badgeId: z.string(),
  bookmarkedAt: z.date().transform(v => v.toISOString()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1BadgeBookmark$ {
  /** @deprecated use `V1BadgeBookmark$inboundSchema` instead. */
  export const inboundSchema = V1BadgeBookmark$inboundSchema;
  /** @deprecated use `V1BadgeBookmark$outboundSchema` instead. */
  export const outboundSchema = V1BadgeBookmark$outboundSchema;
  /** @deprecated use `V1BadgeBookmark$Outbound` instead. */
  export type Outbound = V1BadgeBookmark$Outbound;
}

export function v1BadgeBookmarkToJSON(
  v1BadgeBookmark: V1BadgeBookmark,
): string {
  return JSON.stringify(V1BadgeBookmark$outboundSchema.parse(v1BadgeBookmark));
}

export function v1BadgeBookmarkFromJSON(
  jsonString: string,
): SafeParseResult<V1BadgeBookmark, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1BadgeBookmark$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1BadgeBookmark' from JSON`,
  );
}
