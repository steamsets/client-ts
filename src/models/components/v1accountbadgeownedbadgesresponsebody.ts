/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V1AccountBadgeOwnedBadge,
  V1AccountBadgeOwnedBadge$inboundSchema,
  V1AccountBadgeOwnedBadge$Outbound,
  V1AccountBadgeOwnedBadge$outboundSchema,
} from "./v1accountbadgeownedbadge.js";

export type V1AccountBadgeOwnedBadgesResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  ownedBadges: Array<V1AccountBadgeOwnedBadge> | null;
};

/** @internal */
export const V1AccountBadgeOwnedBadgesResponseBody$inboundSchema: z.ZodType<
  V1AccountBadgeOwnedBadgesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  ownedBadges: z.nullable(z.array(V1AccountBadgeOwnedBadge$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1AccountBadgeOwnedBadgesResponseBody$Outbound = {
  $schema?: string | undefined;
  ownedBadges: Array<V1AccountBadgeOwnedBadge$Outbound> | null;
};

/** @internal */
export const V1AccountBadgeOwnedBadgesResponseBody$outboundSchema: z.ZodType<
  V1AccountBadgeOwnedBadgesResponseBody$Outbound,
  z.ZodTypeDef,
  V1AccountBadgeOwnedBadgesResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  ownedBadges: z.nullable(z.array(V1AccountBadgeOwnedBadge$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountBadgeOwnedBadgesResponseBody$ {
  /** @deprecated use `V1AccountBadgeOwnedBadgesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    V1AccountBadgeOwnedBadgesResponseBody$inboundSchema;
  /** @deprecated use `V1AccountBadgeOwnedBadgesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountBadgeOwnedBadgesResponseBody$outboundSchema;
  /** @deprecated use `V1AccountBadgeOwnedBadgesResponseBody$Outbound` instead. */
  export type Outbound = V1AccountBadgeOwnedBadgesResponseBody$Outbound;
}

export function v1AccountBadgeOwnedBadgesResponseBodyToJSON(
  v1AccountBadgeOwnedBadgesResponseBody: V1AccountBadgeOwnedBadgesResponseBody,
): string {
  return JSON.stringify(
    V1AccountBadgeOwnedBadgesResponseBody$outboundSchema.parse(
      v1AccountBadgeOwnedBadgesResponseBody,
    ),
  );
}

export function v1AccountBadgeOwnedBadgesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountBadgeOwnedBadgesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1AccountBadgeOwnedBadgesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountBadgeOwnedBadgesResponseBody' from JSON`,
  );
}
