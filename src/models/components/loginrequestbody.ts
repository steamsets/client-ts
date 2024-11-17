/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LoginRequestBody = {
  /**
   * The assoc handle of the login
   */
  openidAssocHandle: string;
  /**
   * The claimed id of the login
   */
  openidClaimedId: string;
  /**
   * The identity of the login
   */
  openidIdentity: string;
  /**
   * The mode of the login
   */
  openidMode: string;
  /**
   * The namespace of the login
   */
  openidNs: string;
  /**
   * The endpoint of the login
   */
  openidOpEndpoint: string;
  /**
   * The response nonce of the login
   */
  openidResponseNonce: string;
  /**
   * The return to of the login
   */
  openidReturnTo: string;
  /**
   * The sig of the login
   */
  openidSig: string;
  /**
   * The signed of the login
   */
  openidSigned: string;
};

/** @internal */
export const LoginRequestBody$inboundSchema: z.ZodType<
  LoginRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  openid_assoc_handle: z.string(),
  openid_claimed_id: z.string(),
  openid_identity: z.string(),
  openid_mode: z.string(),
  openid_ns: z.string(),
  openid_op_endpoint: z.string(),
  openid_response_nonce: z.string(),
  openid_return_to: z.string(),
  openid_sig: z.string(),
  openid_signed: z.string(),
}).transform((v) => {
  return remap$(v, {
    "openid_assoc_handle": "openidAssocHandle",
    "openid_claimed_id": "openidClaimedId",
    "openid_identity": "openidIdentity",
    "openid_mode": "openidMode",
    "openid_ns": "openidNs",
    "openid_op_endpoint": "openidOpEndpoint",
    "openid_response_nonce": "openidResponseNonce",
    "openid_return_to": "openidReturnTo",
    "openid_sig": "openidSig",
    "openid_signed": "openidSigned",
  });
});

/** @internal */
export type LoginRequestBody$Outbound = {
  openid_assoc_handle: string;
  openid_claimed_id: string;
  openid_identity: string;
  openid_mode: string;
  openid_ns: string;
  openid_op_endpoint: string;
  openid_response_nonce: string;
  openid_return_to: string;
  openid_sig: string;
  openid_signed: string;
};

/** @internal */
export const LoginRequestBody$outboundSchema: z.ZodType<
  LoginRequestBody$Outbound,
  z.ZodTypeDef,
  LoginRequestBody
> = z.object({
  openidAssocHandle: z.string(),
  openidClaimedId: z.string(),
  openidIdentity: z.string(),
  openidMode: z.string(),
  openidNs: z.string(),
  openidOpEndpoint: z.string(),
  openidResponseNonce: z.string(),
  openidReturnTo: z.string(),
  openidSig: z.string(),
  openidSigned: z.string(),
}).transform((v) => {
  return remap$(v, {
    openidAssocHandle: "openid_assoc_handle",
    openidClaimedId: "openid_claimed_id",
    openidIdentity: "openid_identity",
    openidMode: "openid_mode",
    openidNs: "openid_ns",
    openidOpEndpoint: "openid_op_endpoint",
    openidResponseNonce: "openid_response_nonce",
    openidReturnTo: "openid_return_to",
    openidSig: "openid_sig",
    openidSigned: "openid_signed",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LoginRequestBody$ {
  /** @deprecated use `LoginRequestBody$inboundSchema` instead. */
  export const inboundSchema = LoginRequestBody$inboundSchema;
  /** @deprecated use `LoginRequestBody$outboundSchema` instead. */
  export const outboundSchema = LoginRequestBody$outboundSchema;
  /** @deprecated use `LoginRequestBody$Outbound` instead. */
  export type Outbound = LoginRequestBody$Outbound;
}

export function loginRequestBodyToJSON(
  loginRequestBody: LoginRequestBody,
): string {
  return JSON.stringify(
    LoginRequestBody$outboundSchema.parse(loginRequestBody),
  );
}

export function loginRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<LoginRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LoginRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LoginRequestBody' from JSON`,
  );
}
