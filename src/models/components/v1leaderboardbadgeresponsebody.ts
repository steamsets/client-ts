/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V1LeaderboardBadge,
  V1LeaderboardBadge$inboundSchema,
  V1LeaderboardBadge$Outbound,
  V1LeaderboardBadge$outboundSchema,
} from "./v1leaderboardbadge.js";

export type V1LeaderboardBadgeResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The badges
   */
  badges: Array<V1LeaderboardBadge> | null;
};

/** @internal */
export const V1LeaderboardBadgeResponseBody$inboundSchema: z.ZodType<
  V1LeaderboardBadgeResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  badges: z.nullable(z.array(V1LeaderboardBadge$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1LeaderboardBadgeResponseBody$Outbound = {
  $schema?: string | undefined;
  badges: Array<V1LeaderboardBadge$Outbound> | null;
};

/** @internal */
export const V1LeaderboardBadgeResponseBody$outboundSchema: z.ZodType<
  V1LeaderboardBadgeResponseBody$Outbound,
  z.ZodTypeDef,
  V1LeaderboardBadgeResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  badges: z.nullable(z.array(V1LeaderboardBadge$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardBadgeResponseBody$ {
  /** @deprecated use `V1LeaderboardBadgeResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1LeaderboardBadgeResponseBody$inboundSchema;
  /** @deprecated use `V1LeaderboardBadgeResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1LeaderboardBadgeResponseBody$outboundSchema;
  /** @deprecated use `V1LeaderboardBadgeResponseBody$Outbound` instead. */
  export type Outbound = V1LeaderboardBadgeResponseBody$Outbound;
}

export function v1LeaderboardBadgeResponseBodyToJSON(
  v1LeaderboardBadgeResponseBody: V1LeaderboardBadgeResponseBody,
): string {
  return JSON.stringify(
    V1LeaderboardBadgeResponseBody$outboundSchema.parse(
      v1LeaderboardBadgeResponseBody,
    ),
  );
}

export function v1LeaderboardBadgeResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1LeaderboardBadgeResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1LeaderboardBadgeResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1LeaderboardBadgeResponseBody' from JSON`,
  );
}
