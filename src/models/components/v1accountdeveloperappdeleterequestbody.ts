/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountDeveloperAppDeleteRequestBody = {
  /**
   * The public id of the developer app
   */
  developerAppId: string;
};

/** @internal */
export const V1AccountDeveloperAppDeleteRequestBody$inboundSchema: z.ZodType<
  V1AccountDeveloperAppDeleteRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  developerAppId: z.string(),
});

/** @internal */
export type V1AccountDeveloperAppDeleteRequestBody$Outbound = {
  developerAppId: string;
};

/** @internal */
export const V1AccountDeveloperAppDeleteRequestBody$outboundSchema: z.ZodType<
  V1AccountDeveloperAppDeleteRequestBody$Outbound,
  z.ZodTypeDef,
  V1AccountDeveloperAppDeleteRequestBody
> = z.object({
  developerAppId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountDeveloperAppDeleteRequestBody$ {
  /** @deprecated use `V1AccountDeveloperAppDeleteRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    V1AccountDeveloperAppDeleteRequestBody$inboundSchema;
  /** @deprecated use `V1AccountDeveloperAppDeleteRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountDeveloperAppDeleteRequestBody$outboundSchema;
  /** @deprecated use `V1AccountDeveloperAppDeleteRequestBody$Outbound` instead. */
  export type Outbound = V1AccountDeveloperAppDeleteRequestBody$Outbound;
}

export function v1AccountDeveloperAppDeleteRequestBodyToJSON(
  v1AccountDeveloperAppDeleteRequestBody:
    V1AccountDeveloperAppDeleteRequestBody,
): string {
  return JSON.stringify(
    V1AccountDeveloperAppDeleteRequestBody$outboundSchema.parse(
      v1AccountDeveloperAppDeleteRequestBody,
    ),
  );
}

export function v1AccountDeveloperAppDeleteRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountDeveloperAppDeleteRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1AccountDeveloperAppDeleteRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountDeveloperAppDeleteRequestBody' from JSON`,
  );
}
