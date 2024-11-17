/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountMetaResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
};

/** @internal */
export const V1AccountMetaResponseBody$inboundSchema: z.ZodType<
  V1AccountMetaResponseBody,
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
export type V1AccountMetaResponseBody$Outbound = {
  $schema?: string | undefined;
};

/** @internal */
export const V1AccountMetaResponseBody$outboundSchema: z.ZodType<
  V1AccountMetaResponseBody$Outbound,
  z.ZodTypeDef,
  V1AccountMetaResponseBody
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
export namespace V1AccountMetaResponseBody$ {
  /** @deprecated use `V1AccountMetaResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountMetaResponseBody$inboundSchema;
  /** @deprecated use `V1AccountMetaResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1AccountMetaResponseBody$outboundSchema;
  /** @deprecated use `V1AccountMetaResponseBody$Outbound` instead. */
  export type Outbound = V1AccountMetaResponseBody$Outbound;
}

export function v1AccountMetaResponseBodyToJSON(
  v1AccountMetaResponseBody: V1AccountMetaResponseBody,
): string {
  return JSON.stringify(
    V1AccountMetaResponseBody$outboundSchema.parse(v1AccountMetaResponseBody),
  );
}

export function v1AccountMetaResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountMetaResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountMetaResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountMetaResponseBody' from JSON`,
  );
}
