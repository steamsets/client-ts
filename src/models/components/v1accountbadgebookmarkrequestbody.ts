/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountBadgeBookmarkRequestBody = {
  /**
   * The badge id
   */
  badgeId: string;
  /**
   * Whether to bookmark or unbookmark the badge
   */
  bookmark: boolean;
};

/** @internal */
export const V1AccountBadgeBookmarkRequestBody$inboundSchema: z.ZodType<
  V1AccountBadgeBookmarkRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  badgeId: z.string(),
  bookmark: z.boolean(),
});

/** @internal */
export type V1AccountBadgeBookmarkRequestBody$Outbound = {
  badgeId: string;
  bookmark: boolean;
};

/** @internal */
export const V1AccountBadgeBookmarkRequestBody$outboundSchema: z.ZodType<
  V1AccountBadgeBookmarkRequestBody$Outbound,
  z.ZodTypeDef,
  V1AccountBadgeBookmarkRequestBody
> = z.object({
  badgeId: z.string(),
  bookmark: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountBadgeBookmarkRequestBody$ {
  /** @deprecated use `V1AccountBadgeBookmarkRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountBadgeBookmarkRequestBody$inboundSchema;
  /** @deprecated use `V1AccountBadgeBookmarkRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountBadgeBookmarkRequestBody$outboundSchema;
  /** @deprecated use `V1AccountBadgeBookmarkRequestBody$Outbound` instead. */
  export type Outbound = V1AccountBadgeBookmarkRequestBody$Outbound;
}

export function v1AccountBadgeBookmarkRequestBodyToJSON(
  v1AccountBadgeBookmarkRequestBody: V1AccountBadgeBookmarkRequestBody,
): string {
  return JSON.stringify(
    V1AccountBadgeBookmarkRequestBody$outboundSchema.parse(
      v1AccountBadgeBookmarkRequestBody,
    ),
  );
}

export function v1AccountBadgeBookmarkRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountBadgeBookmarkRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountBadgeBookmarkRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountBadgeBookmarkRequestBody' from JSON`,
  );
}
