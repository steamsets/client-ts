/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AdminUpdateRolesResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const AdminUpdateRolesResponse$inboundSchema: z.ZodType<
  AdminUpdateRolesResponse,
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
export type AdminUpdateRolesResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const AdminUpdateRolesResponse$outboundSchema: z.ZodType<
  AdminUpdateRolesResponse$Outbound,
  z.ZodTypeDef,
  AdminUpdateRolesResponse
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
export namespace AdminUpdateRolesResponse$ {
  /** @deprecated use `AdminUpdateRolesResponse$inboundSchema` instead. */
  export const inboundSchema = AdminUpdateRolesResponse$inboundSchema;
  /** @deprecated use `AdminUpdateRolesResponse$outboundSchema` instead. */
  export const outboundSchema = AdminUpdateRolesResponse$outboundSchema;
  /** @deprecated use `AdminUpdateRolesResponse$Outbound` instead. */
  export type Outbound = AdminUpdateRolesResponse$Outbound;
}

export function adminUpdateRolesResponseToJSON(
  adminUpdateRolesResponse: AdminUpdateRolesResponse,
): string {
  return JSON.stringify(
    AdminUpdateRolesResponse$outboundSchema.parse(adminUpdateRolesResponse),
  );
}

export function adminUpdateRolesResponseFromJSON(
  jsonString: string,
): SafeParseResult<AdminUpdateRolesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AdminUpdateRolesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AdminUpdateRolesResponse' from JSON`,
  );
}
