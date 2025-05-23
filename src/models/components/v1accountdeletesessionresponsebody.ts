/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountDeleteSessionResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
};

/** @internal */
export const V1AccountDeleteSessionResponseBody$inboundSchema: z.ZodType<
  V1AccountDeleteSessionResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1AccountDeleteSessionResponseBody$Outbound = {
  $schema?: string | undefined;
};

/** @internal */
export const V1AccountDeleteSessionResponseBody$outboundSchema: z.ZodType<
  V1AccountDeleteSessionResponseBody$Outbound,
  z.ZodTypeDef,
  V1AccountDeleteSessionResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountDeleteSessionResponseBody$ {
  /** @deprecated use `V1AccountDeleteSessionResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountDeleteSessionResponseBody$inboundSchema;
  /** @deprecated use `V1AccountDeleteSessionResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountDeleteSessionResponseBody$outboundSchema;
  /** @deprecated use `V1AccountDeleteSessionResponseBody$Outbound` instead. */
  export type Outbound = V1AccountDeleteSessionResponseBody$Outbound;
}

export function v1AccountDeleteSessionResponseBodyToJSON(
  v1AccountDeleteSessionResponseBody: V1AccountDeleteSessionResponseBody,
): string {
  return JSON.stringify(
    V1AccountDeleteSessionResponseBody$outboundSchema.parse(
      v1AccountDeleteSessionResponseBody,
    ),
  );
}

export function v1AccountDeleteSessionResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountDeleteSessionResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1AccountDeleteSessionResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountDeleteSessionResponseBody' from JSON`,
  );
}
