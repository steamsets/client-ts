/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1AccountListBadgesResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1AccountListBadgesResponseBody?:
    | components.V1AccountListBadgesResponseBody
    | undefined;
};

/** @internal */
export const PostV1AccountListBadgesResponse$inboundSchema: z.ZodType<
  PostV1AccountListBadgesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1AccountListBadgesResponseBody: components
    .V1AccountListBadgesResponseBody$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1AccountListBadgesResponseBody": "v1AccountListBadgesResponseBody",
  });
});

/** @internal */
export type PostV1AccountListBadgesResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1AccountListBadgesResponseBody?:
    | components.V1AccountListBadgesResponseBody$Outbound
    | undefined;
};

/** @internal */
export const PostV1AccountListBadgesResponse$outboundSchema: z.ZodType<
  PostV1AccountListBadgesResponse$Outbound,
  z.ZodTypeDef,
  PostV1AccountListBadgesResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1AccountListBadgesResponseBody: components
    .V1AccountListBadgesResponseBody$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1AccountListBadgesResponseBody: "V1AccountListBadgesResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1AccountListBadgesResponse$ {
  /** @deprecated use `PostV1AccountListBadgesResponse$inboundSchema` instead. */
  export const inboundSchema = PostV1AccountListBadgesResponse$inboundSchema;
  /** @deprecated use `PostV1AccountListBadgesResponse$outboundSchema` instead. */
  export const outboundSchema = PostV1AccountListBadgesResponse$outboundSchema;
  /** @deprecated use `PostV1AccountListBadgesResponse$Outbound` instead. */
  export type Outbound = PostV1AccountListBadgesResponse$Outbound;
}

export function postV1AccountListBadgesResponseToJSON(
  postV1AccountListBadgesResponse: PostV1AccountListBadgesResponse,
): string {
  return JSON.stringify(
    PostV1AccountListBadgesResponse$outboundSchema.parse(
      postV1AccountListBadgesResponse,
    ),
  );
}

export function postV1AccountListBadgesResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV1AccountListBadgesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostV1AccountListBadgesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1AccountListBadgesResponse' from JSON`,
  );
}
