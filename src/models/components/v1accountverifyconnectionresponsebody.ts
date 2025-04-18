/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountVerifyConnectionResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
};

/** @internal */
export const V1AccountVerifyConnectionResponseBody$inboundSchema: z.ZodType<
  V1AccountVerifyConnectionResponseBody,
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
export type V1AccountVerifyConnectionResponseBody$Outbound = {
  $schema?: string | undefined;
};

/** @internal */
export const V1AccountVerifyConnectionResponseBody$outboundSchema: z.ZodType<
  V1AccountVerifyConnectionResponseBody$Outbound,
  z.ZodTypeDef,
  V1AccountVerifyConnectionResponseBody
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
export namespace V1AccountVerifyConnectionResponseBody$ {
  /** @deprecated use `V1AccountVerifyConnectionResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    V1AccountVerifyConnectionResponseBody$inboundSchema;
  /** @deprecated use `V1AccountVerifyConnectionResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountVerifyConnectionResponseBody$outboundSchema;
  /** @deprecated use `V1AccountVerifyConnectionResponseBody$Outbound` instead. */
  export type Outbound = V1AccountVerifyConnectionResponseBody$Outbound;
}

export function v1AccountVerifyConnectionResponseBodyToJSON(
  v1AccountVerifyConnectionResponseBody: V1AccountVerifyConnectionResponseBody,
): string {
  return JSON.stringify(
    V1AccountVerifyConnectionResponseBody$outboundSchema.parse(
      v1AccountVerifyConnectionResponseBody,
    ),
  );
}

export function v1AccountVerifyConnectionResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountVerifyConnectionResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1AccountVerifyConnectionResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountVerifyConnectionResponseBody' from JSON`,
  );
}
