/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V1AppRequestBody = {
  /**
   * The app id
   */
  appId: number;
};

/** @internal */
export const V1AppRequestBody$inboundSchema: z.ZodType<
  V1AppRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.number().int(),
});

/** @internal */
export type V1AppRequestBody$Outbound = {
  appId: number;
};

/** @internal */
export const V1AppRequestBody$outboundSchema: z.ZodType<
  V1AppRequestBody$Outbound,
  z.ZodTypeDef,
  V1AppRequestBody
> = z.object({
  appId: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AppRequestBody$ {
  /** @deprecated use `V1AppRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1AppRequestBody$inboundSchema;
  /** @deprecated use `V1AppRequestBody$outboundSchema` instead. */
  export const outboundSchema = V1AppRequestBody$outboundSchema;
  /** @deprecated use `V1AppRequestBody$Outbound` instead. */
  export type Outbound = V1AppRequestBody$Outbound;
}
