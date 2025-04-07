/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1AccountDeleteSessionResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1AccountDeleteSessionResponseBody?:
    | components.V1AccountDeleteSessionResponseBody
    | undefined;
};

/** @internal */
export const PostV1AccountDeleteSessionResponse$inboundSchema: z.ZodType<
  PostV1AccountDeleteSessionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1AccountDeleteSessionResponseBody: components
    .V1AccountDeleteSessionResponseBody$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1AccountDeleteSessionResponseBody": "v1AccountDeleteSessionResponseBody",
  });
});

/** @internal */
export type PostV1AccountDeleteSessionResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1AccountDeleteSessionResponseBody?:
    | components.V1AccountDeleteSessionResponseBody$Outbound
    | undefined;
};

/** @internal */
export const PostV1AccountDeleteSessionResponse$outboundSchema: z.ZodType<
  PostV1AccountDeleteSessionResponse$Outbound,
  z.ZodTypeDef,
  PostV1AccountDeleteSessionResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1AccountDeleteSessionResponseBody: components
    .V1AccountDeleteSessionResponseBody$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1AccountDeleteSessionResponseBody: "V1AccountDeleteSessionResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1AccountDeleteSessionResponse$ {
  /** @deprecated use `PostV1AccountDeleteSessionResponse$inboundSchema` instead. */
  export const inboundSchema = PostV1AccountDeleteSessionResponse$inboundSchema;
  /** @deprecated use `PostV1AccountDeleteSessionResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1AccountDeleteSessionResponse$outboundSchema;
  /** @deprecated use `PostV1AccountDeleteSessionResponse$Outbound` instead. */
  export type Outbound = PostV1AccountDeleteSessionResponse$Outbound;
}

export function postV1AccountDeleteSessionResponseToJSON(
  postV1AccountDeleteSessionResponse: PostV1AccountDeleteSessionResponse,
): string {
  return JSON.stringify(
    PostV1AccountDeleteSessionResponse$outboundSchema.parse(
      postV1AccountDeleteSessionResponse,
    ),
  );
}

export function postV1AccountDeleteSessionResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV1AccountDeleteSessionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1AccountDeleteSessionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1AccountDeleteSessionResponse' from JSON`,
  );
}
