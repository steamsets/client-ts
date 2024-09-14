/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountV1QueueSecurity = {
  apiKey: string;
  session: string;
};

export type AccountV1QueueResponse = {
  httpMeta: components.HTTPMetadata;
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const AccountV1QueueSecurity$inboundSchema: z.ZodType<
  AccountV1QueueSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
  session: z.string(),
});

/** @internal */
export type AccountV1QueueSecurity$Outbound = {
  apiKey: string;
  session: string;
};

/** @internal */
export const AccountV1QueueSecurity$outboundSchema: z.ZodType<
  AccountV1QueueSecurity$Outbound,
  z.ZodTypeDef,
  AccountV1QueueSecurity
> = z.object({
  apiKey: z.string(),
  session: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1QueueSecurity$ {
  /** @deprecated use `AccountV1QueueSecurity$inboundSchema` instead. */
  export const inboundSchema = AccountV1QueueSecurity$inboundSchema;
  /** @deprecated use `AccountV1QueueSecurity$outboundSchema` instead. */
  export const outboundSchema = AccountV1QueueSecurity$outboundSchema;
  /** @deprecated use `AccountV1QueueSecurity$Outbound` instead. */
  export type Outbound = AccountV1QueueSecurity$Outbound;
}

/** @internal */
export const AccountV1QueueResponse$inboundSchema: z.ZodType<
  AccountV1QueueResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Headers": "headers",
  });
});

/** @internal */
export type AccountV1QueueResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const AccountV1QueueResponse$outboundSchema: z.ZodType<
  AccountV1QueueResponse$Outbound,
  z.ZodTypeDef,
  AccountV1QueueResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1QueueResponse$ {
  /** @deprecated use `AccountV1QueueResponse$inboundSchema` instead. */
  export const inboundSchema = AccountV1QueueResponse$inboundSchema;
  /** @deprecated use `AccountV1QueueResponse$outboundSchema` instead. */
  export const outboundSchema = AccountV1QueueResponse$outboundSchema;
  /** @deprecated use `AccountV1QueueResponse$Outbound` instead. */
  export type Outbound = AccountV1QueueResponse$Outbound;
}
