/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V1DeleteConnectionRequestBody = {
  /**
   * The connection id to delete
   */
  connectionId: string;
};

/** @internal */
export const V1DeleteConnectionRequestBody$inboundSchema: z.ZodType<
  V1DeleteConnectionRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  connectionId: z.string(),
});

/** @internal */
export type V1DeleteConnectionRequestBody$Outbound = {
  connectionId: string;
};

/** @internal */
export const V1DeleteConnectionRequestBody$outboundSchema: z.ZodType<
  V1DeleteConnectionRequestBody$Outbound,
  z.ZodTypeDef,
  V1DeleteConnectionRequestBody
> = z.object({
  connectionId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1DeleteConnectionRequestBody$ {
  /** @deprecated use `V1DeleteConnectionRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1DeleteConnectionRequestBody$inboundSchema;
  /** @deprecated use `V1DeleteConnectionRequestBody$outboundSchema` instead. */
  export const outboundSchema = V1DeleteConnectionRequestBody$outboundSchema;
  /** @deprecated use `V1DeleteConnectionRequestBody$Outbound` instead. */
  export type Outbound = V1DeleteConnectionRequestBody$Outbound;
}
