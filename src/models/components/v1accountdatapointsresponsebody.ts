/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V1AccountPlaytimeDataPoint,
  V1AccountPlaytimeDataPoint$inboundSchema,
  V1AccountPlaytimeDataPoint$Outbound,
  V1AccountPlaytimeDataPoint$outboundSchema,
} from "./v1accountplaytimedatapoint.js";
import {
  V1AppBadge,
  V1AppBadge$inboundSchema,
  V1AppBadge$Outbound,
  V1AppBadge$outboundSchema,
} from "./v1appbadge.js";

export type V1AccountDataPointsResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  mostXp: Array<V1AppBadge> | null;
  playtime: Array<V1AccountPlaytimeDataPoint> | null;
  scarcity: Array<V1AppBadge> | null;
  xp: { [k: string]: { [k: string]: number } };
};

/** @internal */
export const V1AccountDataPointsResponseBody$inboundSchema: z.ZodType<
  V1AccountDataPointsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  mostXp: z.nullable(z.array(V1AppBadge$inboundSchema)),
  playtime: z.nullable(z.array(V1AccountPlaytimeDataPoint$inboundSchema)),
  scarcity: z.nullable(z.array(V1AppBadge$inboundSchema)),
  xp: z.record(z.record(z.number().int())),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1AccountDataPointsResponseBody$Outbound = {
  $schema?: string | undefined;
  mostXp: Array<V1AppBadge$Outbound> | null;
  playtime: Array<V1AccountPlaytimeDataPoint$Outbound> | null;
  scarcity: Array<V1AppBadge$Outbound> | null;
  xp: { [k: string]: { [k: string]: number } };
};

/** @internal */
export const V1AccountDataPointsResponseBody$outboundSchema: z.ZodType<
  V1AccountDataPointsResponseBody$Outbound,
  z.ZodTypeDef,
  V1AccountDataPointsResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  mostXp: z.nullable(z.array(V1AppBadge$outboundSchema)),
  playtime: z.nullable(z.array(V1AccountPlaytimeDataPoint$outboundSchema)),
  scarcity: z.nullable(z.array(V1AppBadge$outboundSchema)),
  xp: z.record(z.record(z.number().int())),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountDataPointsResponseBody$ {
  /** @deprecated use `V1AccountDataPointsResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountDataPointsResponseBody$inboundSchema;
  /** @deprecated use `V1AccountDataPointsResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1AccountDataPointsResponseBody$outboundSchema;
  /** @deprecated use `V1AccountDataPointsResponseBody$Outbound` instead. */
  export type Outbound = V1AccountDataPointsResponseBody$Outbound;
}

export function v1AccountDataPointsResponseBodyToJSON(
  v1AccountDataPointsResponseBody: V1AccountDataPointsResponseBody,
): string {
  return JSON.stringify(
    V1AccountDataPointsResponseBody$outboundSchema.parse(
      v1AccountDataPointsResponseBody,
    ),
  );
}

export function v1AccountDataPointsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountDataPointsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountDataPointsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountDataPointsResponseBody' from JSON`,
  );
}
