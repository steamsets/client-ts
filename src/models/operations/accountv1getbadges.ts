/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountV1GetBadgesResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1BadgesResponseBody?: components.V1BadgesResponseBody | undefined;
};

/** @internal */
export const AccountV1GetBadgesResponse$inboundSchema: z.ZodType<
  AccountV1GetBadgesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1BadgesResponseBody: components.V1BadgesResponseBody$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1BadgesResponseBody": "v1BadgesResponseBody",
  });
});

/** @internal */
export type AccountV1GetBadgesResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1BadgesResponseBody?: components.V1BadgesResponseBody$Outbound | undefined;
};

/** @internal */
export const AccountV1GetBadgesResponse$outboundSchema: z.ZodType<
  AccountV1GetBadgesResponse$Outbound,
  z.ZodTypeDef,
  AccountV1GetBadgesResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1BadgesResponseBody: components.V1BadgesResponseBody$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1BadgesResponseBody: "V1BadgesResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1GetBadgesResponse$ {
  /** @deprecated use `AccountV1GetBadgesResponse$inboundSchema` instead. */
  export const inboundSchema = AccountV1GetBadgesResponse$inboundSchema;
  /** @deprecated use `AccountV1GetBadgesResponse$outboundSchema` instead. */
  export const outboundSchema = AccountV1GetBadgesResponse$outboundSchema;
  /** @deprecated use `AccountV1GetBadgesResponse$Outbound` instead. */
  export type Outbound = AccountV1GetBadgesResponse$Outbound;
}

export function accountV1GetBadgesResponseToJSON(
  accountV1GetBadgesResponse: AccountV1GetBadgesResponse,
): string {
  return JSON.stringify(
    AccountV1GetBadgesResponse$outboundSchema.parse(accountV1GetBadgesResponse),
  );
}

export function accountV1GetBadgesResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountV1GetBadgesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountV1GetBadgesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountV1GetBadgesResponse' from JSON`,
  );
}
