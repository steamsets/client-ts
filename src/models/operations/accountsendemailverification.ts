/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountSendEmailVerificationRequest = {
  xForwardedFor?: string | undefined;
};

export type AccountSendEmailVerificationResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const AccountSendEmailVerificationRequest$inboundSchema: z.ZodType<
  AccountSendEmailVerificationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Forwarded-For": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "X-Forwarded-For": "xForwardedFor",
  });
});

/** @internal */
export type AccountSendEmailVerificationRequest$Outbound = {
  "X-Forwarded-For"?: string | undefined;
};

/** @internal */
export const AccountSendEmailVerificationRequest$outboundSchema: z.ZodType<
  AccountSendEmailVerificationRequest$Outbound,
  z.ZodTypeDef,
  AccountSendEmailVerificationRequest
> = z.object({
  xForwardedFor: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    xForwardedFor: "X-Forwarded-For",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountSendEmailVerificationRequest$ {
  /** @deprecated use `AccountSendEmailVerificationRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountSendEmailVerificationRequest$inboundSchema;
  /** @deprecated use `AccountSendEmailVerificationRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountSendEmailVerificationRequest$outboundSchema;
  /** @deprecated use `AccountSendEmailVerificationRequest$Outbound` instead. */
  export type Outbound = AccountSendEmailVerificationRequest$Outbound;
}

export function accountSendEmailVerificationRequestToJSON(
  accountSendEmailVerificationRequest: AccountSendEmailVerificationRequest,
): string {
  return JSON.stringify(
    AccountSendEmailVerificationRequest$outboundSchema.parse(
      accountSendEmailVerificationRequest,
    ),
  );
}

export function accountSendEmailVerificationRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountSendEmailVerificationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountSendEmailVerificationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountSendEmailVerificationRequest' from JSON`,
  );
}

/** @internal */
export const AccountSendEmailVerificationResponse$inboundSchema: z.ZodType<
  AccountSendEmailVerificationResponse,
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
export type AccountSendEmailVerificationResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const AccountSendEmailVerificationResponse$outboundSchema: z.ZodType<
  AccountSendEmailVerificationResponse$Outbound,
  z.ZodTypeDef,
  AccountSendEmailVerificationResponse
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
export namespace AccountSendEmailVerificationResponse$ {
  /** @deprecated use `AccountSendEmailVerificationResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountSendEmailVerificationResponse$inboundSchema;
  /** @deprecated use `AccountSendEmailVerificationResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountSendEmailVerificationResponse$outboundSchema;
  /** @deprecated use `AccountSendEmailVerificationResponse$Outbound` instead. */
  export type Outbound = AccountSendEmailVerificationResponse$Outbound;
}

export function accountSendEmailVerificationResponseToJSON(
  accountSendEmailVerificationResponse: AccountSendEmailVerificationResponse,
): string {
  return JSON.stringify(
    AccountSendEmailVerificationResponse$outboundSchema.parse(
      accountSendEmailVerificationResponse,
    ),
  );
}

export function accountSendEmailVerificationResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountSendEmailVerificationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountSendEmailVerificationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountSendEmailVerificationResponse' from JSON`,
  );
}
