/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountReconnectRequestBody = {
  /**
   * The code from the oauth2 provider to re-verify
   */
  code: string;
  /**
   * The connection id to reconnect
   */
  connectionId: string;
};

/** @internal */
export const V1AccountReconnectRequestBody$inboundSchema: z.ZodType<
  V1AccountReconnectRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
  connectionId: z.string(),
});

/** @internal */
export type V1AccountReconnectRequestBody$Outbound = {
  code: string;
  connectionId: string;
};

/** @internal */
export const V1AccountReconnectRequestBody$outboundSchema: z.ZodType<
  V1AccountReconnectRequestBody$Outbound,
  z.ZodTypeDef,
  V1AccountReconnectRequestBody
> = z.object({
  code: z.string(),
  connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountReconnectRequestBody$ {
  /** @deprecated use `V1AccountReconnectRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountReconnectRequestBody$inboundSchema;
  /** @deprecated use `V1AccountReconnectRequestBody$outboundSchema` instead. */
  export const outboundSchema = V1AccountReconnectRequestBody$outboundSchema;
  /** @deprecated use `V1AccountReconnectRequestBody$Outbound` instead. */
  export type Outbound = V1AccountReconnectRequestBody$Outbound;
}

export function v1AccountReconnectRequestBodyToJSON(
  v1AccountReconnectRequestBody: V1AccountReconnectRequestBody,
): string {
  return JSON.stringify(
    V1AccountReconnectRequestBody$outboundSchema.parse(
      v1AccountReconnectRequestBody,
    ),
  );
}

export function v1AccountReconnectRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountReconnectRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountReconnectRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountReconnectRequestBody' from JSON`,
  );
}
