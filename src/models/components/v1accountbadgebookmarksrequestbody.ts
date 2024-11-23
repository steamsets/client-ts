/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountBadgeBookmarksRequestBody = {};

/** @internal */
export const V1AccountBadgeBookmarksRequestBody$inboundSchema: z.ZodType<
  V1AccountBadgeBookmarksRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type V1AccountBadgeBookmarksRequestBody$Outbound = {};

/** @internal */
export const V1AccountBadgeBookmarksRequestBody$outboundSchema: z.ZodType<
  V1AccountBadgeBookmarksRequestBody$Outbound,
  z.ZodTypeDef,
  V1AccountBadgeBookmarksRequestBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountBadgeBookmarksRequestBody$ {
  /** @deprecated use `V1AccountBadgeBookmarksRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountBadgeBookmarksRequestBody$inboundSchema;
  /** @deprecated use `V1AccountBadgeBookmarksRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountBadgeBookmarksRequestBody$outboundSchema;
  /** @deprecated use `V1AccountBadgeBookmarksRequestBody$Outbound` instead. */
  export type Outbound = V1AccountBadgeBookmarksRequestBody$Outbound;
}

export function v1AccountBadgeBookmarksRequestBodyToJSON(
  v1AccountBadgeBookmarksRequestBody: V1AccountBadgeBookmarksRequestBody,
): string {
  return JSON.stringify(
    V1AccountBadgeBookmarksRequestBody$outboundSchema.parse(
      v1AccountBadgeBookmarksRequestBody,
    ),
  );
}

export function v1AccountBadgeBookmarksRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountBadgeBookmarksRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1AccountBadgeBookmarksRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountBadgeBookmarksRequestBody' from JSON`,
  );
}
