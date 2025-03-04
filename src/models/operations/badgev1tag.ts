/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BadgeV1TagResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1BadgeTagResponseBody?: components.V1BadgeTagResponseBody | undefined;
};

/** @internal */
export const BadgeV1TagResponse$inboundSchema: z.ZodType<
  BadgeV1TagResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1BadgeTagResponseBody: components.V1BadgeTagResponseBody$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1BadgeTagResponseBody": "v1BadgeTagResponseBody",
  });
});

/** @internal */
export type BadgeV1TagResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1BadgeTagResponseBody?:
    | components.V1BadgeTagResponseBody$Outbound
    | undefined;
};

/** @internal */
export const BadgeV1TagResponse$outboundSchema: z.ZodType<
  BadgeV1TagResponse$Outbound,
  z.ZodTypeDef,
  BadgeV1TagResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1BadgeTagResponseBody: components.V1BadgeTagResponseBody$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1BadgeTagResponseBody: "V1BadgeTagResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadgeV1TagResponse$ {
  /** @deprecated use `BadgeV1TagResponse$inboundSchema` instead. */
  export const inboundSchema = BadgeV1TagResponse$inboundSchema;
  /** @deprecated use `BadgeV1TagResponse$outboundSchema` instead. */
  export const outboundSchema = BadgeV1TagResponse$outboundSchema;
  /** @deprecated use `BadgeV1TagResponse$Outbound` instead. */
  export type Outbound = BadgeV1TagResponse$Outbound;
}

export function badgeV1TagResponseToJSON(
  badgeV1TagResponse: BadgeV1TagResponse,
): string {
  return JSON.stringify(
    BadgeV1TagResponse$outboundSchema.parse(badgeV1TagResponse),
  );
}

export function badgeV1TagResponseFromJSON(
  jsonString: string,
): SafeParseResult<BadgeV1TagResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BadgeV1TagResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BadgeV1TagResponse' from JSON`,
  );
}
