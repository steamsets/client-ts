/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1UpdateImageResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
};

/** @internal */
export const V1UpdateImageResponseBody$inboundSchema: z.ZodType<
  V1UpdateImageResponseBody,
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
export type V1UpdateImageResponseBody$Outbound = {
  $schema?: string | undefined;
};

/** @internal */
export const V1UpdateImageResponseBody$outboundSchema: z.ZodType<
  V1UpdateImageResponseBody$Outbound,
  z.ZodTypeDef,
  V1UpdateImageResponseBody
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
export namespace V1UpdateImageResponseBody$ {
  /** @deprecated use `V1UpdateImageResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1UpdateImageResponseBody$inboundSchema;
  /** @deprecated use `V1UpdateImageResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1UpdateImageResponseBody$outboundSchema;
  /** @deprecated use `V1UpdateImageResponseBody$Outbound` instead. */
  export type Outbound = V1UpdateImageResponseBody$Outbound;
}

export function v1UpdateImageResponseBodyToJSON(
  v1UpdateImageResponseBody: V1UpdateImageResponseBody,
): string {
  return JSON.stringify(
    V1UpdateImageResponseBody$outboundSchema.parse(v1UpdateImageResponseBody),
  );
}

export function v1UpdateImageResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1UpdateImageResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1UpdateImageResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1UpdateImageResponseBody' from JSON`,
  );
}
