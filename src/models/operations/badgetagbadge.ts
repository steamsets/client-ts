/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BadgeTagBadgeResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1BadgeTagBadgeResponseBody?:
    | components.V1BadgeTagBadgeResponseBody
    | undefined;
};

/** @internal */
export const BadgeTagBadgeResponse$inboundSchema: z.ZodType<
  BadgeTagBadgeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1BadgeTagBadgeResponseBody: components
    .V1BadgeTagBadgeResponseBody$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1BadgeTagBadgeResponseBody": "v1BadgeTagBadgeResponseBody",
  });
});

/** @internal */
export type BadgeTagBadgeResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1BadgeTagBadgeResponseBody?:
    | components.V1BadgeTagBadgeResponseBody$Outbound
    | undefined;
};

/** @internal */
export const BadgeTagBadgeResponse$outboundSchema: z.ZodType<
  BadgeTagBadgeResponse$Outbound,
  z.ZodTypeDef,
  BadgeTagBadgeResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1BadgeTagBadgeResponseBody: components
    .V1BadgeTagBadgeResponseBody$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1BadgeTagBadgeResponseBody: "V1BadgeTagBadgeResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadgeTagBadgeResponse$ {
  /** @deprecated use `BadgeTagBadgeResponse$inboundSchema` instead. */
  export const inboundSchema = BadgeTagBadgeResponse$inboundSchema;
  /** @deprecated use `BadgeTagBadgeResponse$outboundSchema` instead. */
  export const outboundSchema = BadgeTagBadgeResponse$outboundSchema;
  /** @deprecated use `BadgeTagBadgeResponse$Outbound` instead. */
  export type Outbound = BadgeTagBadgeResponse$Outbound;
}

export function badgeTagBadgeResponseToJSON(
  badgeTagBadgeResponse: BadgeTagBadgeResponse,
): string {
  return JSON.stringify(
    BadgeTagBadgeResponse$outboundSchema.parse(badgeTagBadgeResponse),
  );
}

export function badgeTagBadgeResponseFromJSON(
  jsonString: string,
): SafeParseResult<BadgeTagBadgeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BadgeTagBadgeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BadgeTagBadgeResponse' from JSON`,
  );
}
