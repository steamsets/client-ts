/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountGetMetaResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1AccountGetMetaResponseBody?:
    | components.V1AccountGetMetaResponseBody
    | undefined;
};

/** @internal */
export const AccountGetMetaResponse$inboundSchema: z.ZodType<
  AccountGetMetaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1AccountGetMetaResponseBody: components
    .V1AccountGetMetaResponseBody$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1AccountGetMetaResponseBody": "v1AccountGetMetaResponseBody",
  });
});

/** @internal */
export type AccountGetMetaResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1AccountGetMetaResponseBody?:
    | components.V1AccountGetMetaResponseBody$Outbound
    | undefined;
};

/** @internal */
export const AccountGetMetaResponse$outboundSchema: z.ZodType<
  AccountGetMetaResponse$Outbound,
  z.ZodTypeDef,
  AccountGetMetaResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1AccountGetMetaResponseBody: components
    .V1AccountGetMetaResponseBody$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1AccountGetMetaResponseBody: "V1AccountGetMetaResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountGetMetaResponse$ {
  /** @deprecated use `AccountGetMetaResponse$inboundSchema` instead. */
  export const inboundSchema = AccountGetMetaResponse$inboundSchema;
  /** @deprecated use `AccountGetMetaResponse$outboundSchema` instead. */
  export const outboundSchema = AccountGetMetaResponse$outboundSchema;
  /** @deprecated use `AccountGetMetaResponse$Outbound` instead. */
  export type Outbound = AccountGetMetaResponse$Outbound;
}

export function accountGetMetaResponseToJSON(
  accountGetMetaResponse: AccountGetMetaResponse,
): string {
  return JSON.stringify(
    AccountGetMetaResponse$outboundSchema.parse(accountGetMetaResponse),
  );
}

export function accountGetMetaResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountGetMetaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountGetMetaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountGetMetaResponse' from JSON`,
  );
}
