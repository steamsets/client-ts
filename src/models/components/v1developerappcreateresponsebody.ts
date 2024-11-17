/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1DeveloperAppCreateResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The generated API Key
   */
  apiKey: string | null;
};

/** @internal */
export const V1DeveloperAppCreateResponseBody$inboundSchema: z.ZodType<
  V1DeveloperAppCreateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  apiKey: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1DeveloperAppCreateResponseBody$Outbound = {
  $schema?: string | undefined;
  apiKey: string | null;
};

/** @internal */
export const V1DeveloperAppCreateResponseBody$outboundSchema: z.ZodType<
  V1DeveloperAppCreateResponseBody$Outbound,
  z.ZodTypeDef,
  V1DeveloperAppCreateResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  apiKey: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1DeveloperAppCreateResponseBody$ {
  /** @deprecated use `V1DeveloperAppCreateResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1DeveloperAppCreateResponseBody$inboundSchema;
  /** @deprecated use `V1DeveloperAppCreateResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1DeveloperAppCreateResponseBody$outboundSchema;
  /** @deprecated use `V1DeveloperAppCreateResponseBody$Outbound` instead. */
  export type Outbound = V1DeveloperAppCreateResponseBody$Outbound;
}

export function v1DeveloperAppCreateResponseBodyToJSON(
  v1DeveloperAppCreateResponseBody: V1DeveloperAppCreateResponseBody,
): string {
  return JSON.stringify(
    V1DeveloperAppCreateResponseBody$outboundSchema.parse(
      v1DeveloperAppCreateResponseBody,
    ),
  );
}

export function v1DeveloperAppCreateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1DeveloperAppCreateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1DeveloperAppCreateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1DeveloperAppCreateResponseBody' from JSON`,
  );
}
