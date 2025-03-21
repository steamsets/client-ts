/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1LivenessResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * Whether we're alive or not
   */
  message: string;
};

/** @internal */
export const V1LivenessResponseBody$inboundSchema: z.ZodType<
  V1LivenessResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  message: z.string(),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1LivenessResponseBody$Outbound = {
  $schema?: string | undefined;
  message: string;
};

/** @internal */
export const V1LivenessResponseBody$outboundSchema: z.ZodType<
  V1LivenessResponseBody$Outbound,
  z.ZodTypeDef,
  V1LivenessResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  message: z.string(),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LivenessResponseBody$ {
  /** @deprecated use `V1LivenessResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1LivenessResponseBody$inboundSchema;
  /** @deprecated use `V1LivenessResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1LivenessResponseBody$outboundSchema;
  /** @deprecated use `V1LivenessResponseBody$Outbound` instead. */
  export type Outbound = V1LivenessResponseBody$Outbound;
}

export function v1LivenessResponseBodyToJSON(
  v1LivenessResponseBody: V1LivenessResponseBody,
): string {
  return JSON.stringify(
    V1LivenessResponseBody$outboundSchema.parse(v1LivenessResponseBody),
  );
}

export function v1LivenessResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1LivenessResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1LivenessResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1LivenessResponseBody' from JSON`,
  );
}
