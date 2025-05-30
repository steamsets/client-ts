/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountDeleteImagesResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1AccountDeleteImagesResponseBody?:
    | components.V1AccountDeleteImagesResponseBody
    | undefined;
};

/** @internal */
export const AccountDeleteImagesResponse$inboundSchema: z.ZodType<
  AccountDeleteImagesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1AccountDeleteImagesResponseBody: components
    .V1AccountDeleteImagesResponseBody$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1AccountDeleteImagesResponseBody": "v1AccountDeleteImagesResponseBody",
  });
});

/** @internal */
export type AccountDeleteImagesResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1AccountDeleteImagesResponseBody?:
    | components.V1AccountDeleteImagesResponseBody$Outbound
    | undefined;
};

/** @internal */
export const AccountDeleteImagesResponse$outboundSchema: z.ZodType<
  AccountDeleteImagesResponse$Outbound,
  z.ZodTypeDef,
  AccountDeleteImagesResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1AccountDeleteImagesResponseBody: components
    .V1AccountDeleteImagesResponseBody$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1AccountDeleteImagesResponseBody: "V1AccountDeleteImagesResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountDeleteImagesResponse$ {
  /** @deprecated use `AccountDeleteImagesResponse$inboundSchema` instead. */
  export const inboundSchema = AccountDeleteImagesResponse$inboundSchema;
  /** @deprecated use `AccountDeleteImagesResponse$outboundSchema` instead. */
  export const outboundSchema = AccountDeleteImagesResponse$outboundSchema;
  /** @deprecated use `AccountDeleteImagesResponse$Outbound` instead. */
  export type Outbound = AccountDeleteImagesResponse$Outbound;
}

export function accountDeleteImagesResponseToJSON(
  accountDeleteImagesResponse: AccountDeleteImagesResponse,
): string {
  return JSON.stringify(
    AccountDeleteImagesResponse$outboundSchema.parse(
      accountDeleteImagesResponse,
    ),
  );
}

export function accountDeleteImagesResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountDeleteImagesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountDeleteImagesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountDeleteImagesResponse' from JSON`,
  );
}
