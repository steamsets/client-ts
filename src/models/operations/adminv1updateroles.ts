/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AdminV1UpdateRolesResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const AdminV1UpdateRolesResponse$inboundSchema: z.ZodType<
  AdminV1UpdateRolesResponse,
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
export type AdminV1UpdateRolesResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const AdminV1UpdateRolesResponse$outboundSchema: z.ZodType<
  AdminV1UpdateRolesResponse$Outbound,
  z.ZodTypeDef,
  AdminV1UpdateRolesResponse
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
export namespace AdminV1UpdateRolesResponse$ {
  /** @deprecated use `AdminV1UpdateRolesResponse$inboundSchema` instead. */
  export const inboundSchema = AdminV1UpdateRolesResponse$inboundSchema;
  /** @deprecated use `AdminV1UpdateRolesResponse$outboundSchema` instead. */
  export const outboundSchema = AdminV1UpdateRolesResponse$outboundSchema;
  /** @deprecated use `AdminV1UpdateRolesResponse$Outbound` instead. */
  export type Outbound = AdminV1UpdateRolesResponse$Outbound;
}

export function adminV1UpdateRolesResponseToJSON(
  adminV1UpdateRolesResponse: AdminV1UpdateRolesResponse,
): string {
  return JSON.stringify(
    AdminV1UpdateRolesResponse$outboundSchema.parse(adminV1UpdateRolesResponse),
  );
}

export function adminV1UpdateRolesResponseFromJSON(
  jsonString: string,
): SafeParseResult<AdminV1UpdateRolesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AdminV1UpdateRolesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AdminV1UpdateRolesResponse' from JSON`,
  );
}
