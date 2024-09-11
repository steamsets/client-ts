/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type V1VerifyEmailResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
};

/** @internal */
export const V1VerifyEmailResponseBody$inboundSchema: z.ZodType<
  V1VerifyEmailResponseBody,
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
export type V1VerifyEmailResponseBody$Outbound = {
  $schema?: string | undefined;
};

/** @internal */
export const V1VerifyEmailResponseBody$outboundSchema: z.ZodType<
  V1VerifyEmailResponseBody$Outbound,
  z.ZodTypeDef,
  V1VerifyEmailResponseBody
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
export namespace V1VerifyEmailResponseBody$ {
  /** @deprecated use `V1VerifyEmailResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1VerifyEmailResponseBody$inboundSchema;
  /** @deprecated use `V1VerifyEmailResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1VerifyEmailResponseBody$outboundSchema;
  /** @deprecated use `V1VerifyEmailResponseBody$Outbound` instead. */
  export type Outbound = V1VerifyEmailResponseBody$Outbound;
}
