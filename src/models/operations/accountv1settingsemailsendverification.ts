/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountV1SettingsEmailSendVerificationRequest = {
  xForwardedFor?: string | undefined;
};

export type AccountV1SettingsEmailSendVerificationResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const AccountV1SettingsEmailSendVerificationRequest$inboundSchema:
  z.ZodType<
    AccountV1SettingsEmailSendVerificationRequest,
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
export type AccountV1SettingsEmailSendVerificationRequest$Outbound = {
  "X-Forwarded-For"?: string | undefined;
};

/** @internal */
export const AccountV1SettingsEmailSendVerificationRequest$outboundSchema:
  z.ZodType<
    AccountV1SettingsEmailSendVerificationRequest$Outbound,
    z.ZodTypeDef,
    AccountV1SettingsEmailSendVerificationRequest
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
export namespace AccountV1SettingsEmailSendVerificationRequest$ {
  /** @deprecated use `AccountV1SettingsEmailSendVerificationRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountV1SettingsEmailSendVerificationRequest$inboundSchema;
  /** @deprecated use `AccountV1SettingsEmailSendVerificationRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountV1SettingsEmailSendVerificationRequest$outboundSchema;
  /** @deprecated use `AccountV1SettingsEmailSendVerificationRequest$Outbound` instead. */
  export type Outbound = AccountV1SettingsEmailSendVerificationRequest$Outbound;
}

export function accountV1SettingsEmailSendVerificationRequestToJSON(
  accountV1SettingsEmailSendVerificationRequest:
    AccountV1SettingsEmailSendVerificationRequest,
): string {
  return JSON.stringify(
    AccountV1SettingsEmailSendVerificationRequest$outboundSchema.parse(
      accountV1SettingsEmailSendVerificationRequest,
    ),
  );
}

export function accountV1SettingsEmailSendVerificationRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  AccountV1SettingsEmailSendVerificationRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AccountV1SettingsEmailSendVerificationRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AccountV1SettingsEmailSendVerificationRequest' from JSON`,
  );
}

/** @internal */
export const AccountV1SettingsEmailSendVerificationResponse$inboundSchema:
  z.ZodType<
    AccountV1SettingsEmailSendVerificationResponse,
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
export type AccountV1SettingsEmailSendVerificationResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const AccountV1SettingsEmailSendVerificationResponse$outboundSchema:
  z.ZodType<
    AccountV1SettingsEmailSendVerificationResponse$Outbound,
    z.ZodTypeDef,
    AccountV1SettingsEmailSendVerificationResponse
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
export namespace AccountV1SettingsEmailSendVerificationResponse$ {
  /** @deprecated use `AccountV1SettingsEmailSendVerificationResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountV1SettingsEmailSendVerificationResponse$inboundSchema;
  /** @deprecated use `AccountV1SettingsEmailSendVerificationResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountV1SettingsEmailSendVerificationResponse$outboundSchema;
  /** @deprecated use `AccountV1SettingsEmailSendVerificationResponse$Outbound` instead. */
  export type Outbound =
    AccountV1SettingsEmailSendVerificationResponse$Outbound;
}

export function accountV1SettingsEmailSendVerificationResponseToJSON(
  accountV1SettingsEmailSendVerificationResponse:
    AccountV1SettingsEmailSendVerificationResponse,
): string {
  return JSON.stringify(
    AccountV1SettingsEmailSendVerificationResponse$outboundSchema.parse(
      accountV1SettingsEmailSendVerificationResponse,
    ),
  );
}

export function accountV1SettingsEmailSendVerificationResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  AccountV1SettingsEmailSendVerificationResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AccountV1SettingsEmailSendVerificationResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AccountV1SettingsEmailSendVerificationResponse' from JSON`,
  );
}
