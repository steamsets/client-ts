/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountV1SessionLogoutResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const AccountV1SessionLogoutResponse$inboundSchema: z.ZodType<
  AccountV1SessionLogoutResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
  });
});

/** @internal */
export type AccountV1SessionLogoutResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const AccountV1SessionLogoutResponse$outboundSchema: z.ZodType<
  AccountV1SessionLogoutResponse$Outbound,
  z.ZodTypeDef,
  AccountV1SessionLogoutResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1SessionLogoutResponse$ {
  /** @deprecated use `AccountV1SessionLogoutResponse$inboundSchema` instead. */
  export const inboundSchema = AccountV1SessionLogoutResponse$inboundSchema;
  /** @deprecated use `AccountV1SessionLogoutResponse$outboundSchema` instead. */
  export const outboundSchema = AccountV1SessionLogoutResponse$outboundSchema;
  /** @deprecated use `AccountV1SessionLogoutResponse$Outbound` instead. */
  export type Outbound = AccountV1SessionLogoutResponse$Outbound;
}

export function accountV1SessionLogoutResponseToJSON(
  accountV1SessionLogoutResponse: AccountV1SessionLogoutResponse,
): string {
  return JSON.stringify(
    AccountV1SessionLogoutResponse$outboundSchema.parse(
      accountV1SessionLogoutResponse,
    ),
  );
}

export function accountV1SessionLogoutResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountV1SessionLogoutResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountV1SessionLogoutResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountV1SessionLogoutResponse' from JSON`,
  );
}
