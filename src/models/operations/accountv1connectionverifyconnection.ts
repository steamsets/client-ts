/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountV1ConnectionVerifyConnectionResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1VerifyConnectionResponseBody?:
    | components.V1VerifyConnectionResponseBody
    | undefined;
};

/** @internal */
export const AccountV1ConnectionVerifyConnectionResponse$inboundSchema:
  z.ZodType<
    AccountV1ConnectionVerifyConnectionResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    V1VerifyConnectionResponseBody: components
      .V1VerifyConnectionResponseBody$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "V1VerifyConnectionResponseBody": "v1VerifyConnectionResponseBody",
    });
  });

/** @internal */
export type AccountV1ConnectionVerifyConnectionResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1VerifyConnectionResponseBody?:
    | components.V1VerifyConnectionResponseBody$Outbound
    | undefined;
};

/** @internal */
export const AccountV1ConnectionVerifyConnectionResponse$outboundSchema:
  z.ZodType<
    AccountV1ConnectionVerifyConnectionResponse$Outbound,
    z.ZodTypeDef,
    AccountV1ConnectionVerifyConnectionResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    v1VerifyConnectionResponseBody: components
      .V1VerifyConnectionResponseBody$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      v1VerifyConnectionResponseBody: "V1VerifyConnectionResponseBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1ConnectionVerifyConnectionResponse$ {
  /** @deprecated use `AccountV1ConnectionVerifyConnectionResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountV1ConnectionVerifyConnectionResponse$inboundSchema;
  /** @deprecated use `AccountV1ConnectionVerifyConnectionResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountV1ConnectionVerifyConnectionResponse$outboundSchema;
  /** @deprecated use `AccountV1ConnectionVerifyConnectionResponse$Outbound` instead. */
  export type Outbound = AccountV1ConnectionVerifyConnectionResponse$Outbound;
}
