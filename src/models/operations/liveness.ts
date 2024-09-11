/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type LivenessResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1LivenessResponseBody?: components.V1LivenessResponseBody | undefined;
};

/** @internal */
export const LivenessResponse$inboundSchema: z.ZodType<
  LivenessResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1LivenessResponseBody: components.V1LivenessResponseBody$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1LivenessResponseBody": "v1LivenessResponseBody",
  });
});

/** @internal */
export type LivenessResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1LivenessResponseBody?:
    | components.V1LivenessResponseBody$Outbound
    | undefined;
};

/** @internal */
export const LivenessResponse$outboundSchema: z.ZodType<
  LivenessResponse$Outbound,
  z.ZodTypeDef,
  LivenessResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1LivenessResponseBody: components.V1LivenessResponseBody$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1LivenessResponseBody: "V1LivenessResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LivenessResponse$ {
  /** @deprecated use `LivenessResponse$inboundSchema` instead. */
  export const inboundSchema = LivenessResponse$inboundSchema;
  /** @deprecated use `LivenessResponse$outboundSchema` instead. */
  export const outboundSchema = LivenessResponse$outboundSchema;
  /** @deprecated use `LivenessResponse$Outbound` instead. */
  export type Outbound = LivenessResponse$Outbound;
}
