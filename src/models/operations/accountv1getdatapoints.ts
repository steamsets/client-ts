/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountV1GetDataPointsSecurity = {
  apiKey: string;
  session: string;
};

export type AccountV1GetDataPointsResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1AccountDataPointsResponseBody?:
    | components.V1AccountDataPointsResponseBody
    | undefined;
};

/** @internal */
export const AccountV1GetDataPointsSecurity$inboundSchema: z.ZodType<
  AccountV1GetDataPointsSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
  session: z.string(),
});

/** @internal */
export type AccountV1GetDataPointsSecurity$Outbound = {
  apiKey: string;
  session: string;
};

/** @internal */
export const AccountV1GetDataPointsSecurity$outboundSchema: z.ZodType<
  AccountV1GetDataPointsSecurity$Outbound,
  z.ZodTypeDef,
  AccountV1GetDataPointsSecurity
> = z.object({
  apiKey: z.string(),
  session: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1GetDataPointsSecurity$ {
  /** @deprecated use `AccountV1GetDataPointsSecurity$inboundSchema` instead. */
  export const inboundSchema = AccountV1GetDataPointsSecurity$inboundSchema;
  /** @deprecated use `AccountV1GetDataPointsSecurity$outboundSchema` instead. */
  export const outboundSchema = AccountV1GetDataPointsSecurity$outboundSchema;
  /** @deprecated use `AccountV1GetDataPointsSecurity$Outbound` instead. */
  export type Outbound = AccountV1GetDataPointsSecurity$Outbound;
}

/** @internal */
export const AccountV1GetDataPointsResponse$inboundSchema: z.ZodType<
  AccountV1GetDataPointsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1AccountDataPointsResponseBody: components
    .V1AccountDataPointsResponseBody$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1AccountDataPointsResponseBody": "v1AccountDataPointsResponseBody",
  });
});

/** @internal */
export type AccountV1GetDataPointsResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1AccountDataPointsResponseBody?:
    | components.V1AccountDataPointsResponseBody$Outbound
    | undefined;
};

/** @internal */
export const AccountV1GetDataPointsResponse$outboundSchema: z.ZodType<
  AccountV1GetDataPointsResponse$Outbound,
  z.ZodTypeDef,
  AccountV1GetDataPointsResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1AccountDataPointsResponseBody: components
    .V1AccountDataPointsResponseBody$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1AccountDataPointsResponseBody: "V1AccountDataPointsResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1GetDataPointsResponse$ {
  /** @deprecated use `AccountV1GetDataPointsResponse$inboundSchema` instead. */
  export const inboundSchema = AccountV1GetDataPointsResponse$inboundSchema;
  /** @deprecated use `AccountV1GetDataPointsResponse$outboundSchema` instead. */
  export const outboundSchema = AccountV1GetDataPointsResponse$outboundSchema;
  /** @deprecated use `AccountV1GetDataPointsResponse$Outbound` instead. */
  export type Outbound = AccountV1GetDataPointsResponse$Outbound;
}
