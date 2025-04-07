/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountSubscribeEmailRequestBody = {
  /**
   * The email address to subscribe to the newsletter (only for the landing page)
   */
  email?: string | null | undefined;
  /**
   * Whether the account wants to be subscribed to the newsletter
   */
  subscribed: boolean;
};

/** @internal */
export const V1AccountSubscribeEmailRequestBody$inboundSchema: z.ZodType<
  V1AccountSubscribeEmailRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.nullable(z.string()).optional(),
  subscribed: z.boolean(),
});

/** @internal */
export type V1AccountSubscribeEmailRequestBody$Outbound = {
  email?: string | null | undefined;
  subscribed: boolean;
};

/** @internal */
export const V1AccountSubscribeEmailRequestBody$outboundSchema: z.ZodType<
  V1AccountSubscribeEmailRequestBody$Outbound,
  z.ZodTypeDef,
  V1AccountSubscribeEmailRequestBody
> = z.object({
  email: z.nullable(z.string()).optional(),
  subscribed: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountSubscribeEmailRequestBody$ {
  /** @deprecated use `V1AccountSubscribeEmailRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountSubscribeEmailRequestBody$inboundSchema;
  /** @deprecated use `V1AccountSubscribeEmailRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountSubscribeEmailRequestBody$outboundSchema;
  /** @deprecated use `V1AccountSubscribeEmailRequestBody$Outbound` instead. */
  export type Outbound = V1AccountSubscribeEmailRequestBody$Outbound;
}

export function v1AccountSubscribeEmailRequestBodyToJSON(
  v1AccountSubscribeEmailRequestBody: V1AccountSubscribeEmailRequestBody,
): string {
  return JSON.stringify(
    V1AccountSubscribeEmailRequestBody$outboundSchema.parse(
      v1AccountSubscribeEmailRequestBody,
    ),
  );
}

export function v1AccountSubscribeEmailRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountSubscribeEmailRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1AccountSubscribeEmailRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountSubscribeEmailRequestBody' from JSON`,
  );
}
