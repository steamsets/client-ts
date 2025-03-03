/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1UpdateSettingsRequestBody = {
  /**
   * The email the account should use, only if the account is private
   */
  email?: string | null | undefined;
  /**
   * Whether the account should be hidden in the leaderboards, only possible if the account is private
   */
  hidden: boolean;
  /**
   * The language the account should use, only if the account is private
   */
  language: string;
  /**
   * The vanity the account should use
   */
  vanity: string | null;
};

/** @internal */
export const V1UpdateSettingsRequestBody$inboundSchema: z.ZodType<
  V1UpdateSettingsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.nullable(z.string()).optional(),
  hidden: z.boolean(),
  language: z.string(),
  vanity: z.nullable(z.string()),
});

/** @internal */
export type V1UpdateSettingsRequestBody$Outbound = {
  email?: string | null | undefined;
  hidden: boolean;
  language: string;
  vanity: string | null;
};

/** @internal */
export const V1UpdateSettingsRequestBody$outboundSchema: z.ZodType<
  V1UpdateSettingsRequestBody$Outbound,
  z.ZodTypeDef,
  V1UpdateSettingsRequestBody
> = z.object({
  email: z.nullable(z.string()).optional(),
  hidden: z.boolean(),
  language: z.string(),
  vanity: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1UpdateSettingsRequestBody$ {
  /** @deprecated use `V1UpdateSettingsRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1UpdateSettingsRequestBody$inboundSchema;
  /** @deprecated use `V1UpdateSettingsRequestBody$outboundSchema` instead. */
  export const outboundSchema = V1UpdateSettingsRequestBody$outboundSchema;
  /** @deprecated use `V1UpdateSettingsRequestBody$Outbound` instead. */
  export type Outbound = V1UpdateSettingsRequestBody$Outbound;
}

export function v1UpdateSettingsRequestBodyToJSON(
  v1UpdateSettingsRequestBody: V1UpdateSettingsRequestBody,
): string {
  return JSON.stringify(
    V1UpdateSettingsRequestBody$outboundSchema.parse(
      v1UpdateSettingsRequestBody,
    ),
  );
}

export function v1UpdateSettingsRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1UpdateSettingsRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1UpdateSettingsRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1UpdateSettingsRequestBody' from JSON`,
  );
}
