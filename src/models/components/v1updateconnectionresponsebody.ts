/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type V1UpdateConnectionResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
};

/** @internal */
export const V1UpdateConnectionResponseBody$inboundSchema: z.ZodType<
  V1UpdateConnectionResponseBody,
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
export type V1UpdateConnectionResponseBody$Outbound = {
  $schema?: string | undefined;
};

/** @internal */
export const V1UpdateConnectionResponseBody$outboundSchema: z.ZodType<
  V1UpdateConnectionResponseBody$Outbound,
  z.ZodTypeDef,
  V1UpdateConnectionResponseBody
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
export namespace V1UpdateConnectionResponseBody$ {
  /** @deprecated use `V1UpdateConnectionResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1UpdateConnectionResponseBody$inboundSchema;
  /** @deprecated use `V1UpdateConnectionResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1UpdateConnectionResponseBody$outboundSchema;
  /** @deprecated use `V1UpdateConnectionResponseBody$Outbound` instead. */
  export type Outbound = V1UpdateConnectionResponseBody$Outbound;
}
