/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type V1AccountDeveloperAppGenerateKeyResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The generated API Key
   */
  apiKey: string;
};

/** @internal */
export const V1AccountDeveloperAppGenerateKeyResponseBody$inboundSchema:
  z.ZodType<
    V1AccountDeveloperAppGenerateKeyResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    $schema: z.string().optional(),
    apiKey: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "$schema": "dollarSchema",
    });
  });

/** @internal */
export type V1AccountDeveloperAppGenerateKeyResponseBody$Outbound = {
  $schema?: string | undefined;
  apiKey: string;
};

/** @internal */
export const V1AccountDeveloperAppGenerateKeyResponseBody$outboundSchema:
  z.ZodType<
    V1AccountDeveloperAppGenerateKeyResponseBody$Outbound,
    z.ZodTypeDef,
    V1AccountDeveloperAppGenerateKeyResponseBody
  > = z.object({
    dollarSchema: z.string().optional(),
    apiKey: z.string(),
  }).transform((v) => {
    return remap$(v, {
      dollarSchema: "$schema",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountDeveloperAppGenerateKeyResponseBody$ {
  /** @deprecated use `V1AccountDeveloperAppGenerateKeyResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    V1AccountDeveloperAppGenerateKeyResponseBody$inboundSchema;
  /** @deprecated use `V1AccountDeveloperAppGenerateKeyResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountDeveloperAppGenerateKeyResponseBody$outboundSchema;
  /** @deprecated use `V1AccountDeveloperAppGenerateKeyResponseBody$Outbound` instead. */
  export type Outbound = V1AccountDeveloperAppGenerateKeyResponseBody$Outbound;
}
