/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountV1SessionGetResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1GetSessionBody?: components.V1GetSessionBody | undefined;
};

/** @internal */
export const AccountV1SessionGetResponse$inboundSchema: z.ZodType<
  AccountV1SessionGetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1GetSessionBody: components.V1GetSessionBody$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1GetSessionBody": "v1GetSessionBody",
  });
});

/** @internal */
export type AccountV1SessionGetResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1GetSessionBody?: components.V1GetSessionBody$Outbound | undefined;
};

/** @internal */
export const AccountV1SessionGetResponse$outboundSchema: z.ZodType<
  AccountV1SessionGetResponse$Outbound,
  z.ZodTypeDef,
  AccountV1SessionGetResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1GetSessionBody: components.V1GetSessionBody$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1GetSessionBody: "V1GetSessionBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1SessionGetResponse$ {
  /** @deprecated use `AccountV1SessionGetResponse$inboundSchema` instead. */
  export const inboundSchema = AccountV1SessionGetResponse$inboundSchema;
  /** @deprecated use `AccountV1SessionGetResponse$outboundSchema` instead. */
  export const outboundSchema = AccountV1SessionGetResponse$outboundSchema;
  /** @deprecated use `AccountV1SessionGetResponse$Outbound` instead. */
  export type Outbound = AccountV1SessionGetResponse$Outbound;
}
