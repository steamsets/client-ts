/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostV1AccountSubscribeEmailRequest = {
  xForwardedFor?: string | undefined;
  v1AccountSubscribeEmailRequestBody:
    components.V1AccountSubscribeEmailRequestBody;
};

export type PostV1AccountSubscribeEmailResponse = {
  httpMeta: components.HTTPMetadata;
};

/** @internal */
export const PostV1AccountSubscribeEmailRequest$inboundSchema: z.ZodType<
  PostV1AccountSubscribeEmailRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "X-Forwarded-For": z.string().optional(),
  V1AccountSubscribeEmailRequestBody:
    components.V1AccountSubscribeEmailRequestBody$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "X-Forwarded-For": "xForwardedFor",
    "V1AccountSubscribeEmailRequestBody": "v1AccountSubscribeEmailRequestBody",
  });
});

/** @internal */
export type PostV1AccountSubscribeEmailRequest$Outbound = {
  "X-Forwarded-For"?: string | undefined;
  V1AccountSubscribeEmailRequestBody:
    components.V1AccountSubscribeEmailRequestBody$Outbound;
};

/** @internal */
export const PostV1AccountSubscribeEmailRequest$outboundSchema: z.ZodType<
  PostV1AccountSubscribeEmailRequest$Outbound,
  z.ZodTypeDef,
  PostV1AccountSubscribeEmailRequest
> = z.object({
  xForwardedFor: z.string().optional(),
  v1AccountSubscribeEmailRequestBody:
    components.V1AccountSubscribeEmailRequestBody$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    xForwardedFor: "X-Forwarded-For",
    v1AccountSubscribeEmailRequestBody: "V1AccountSubscribeEmailRequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1AccountSubscribeEmailRequest$ {
  /** @deprecated use `PostV1AccountSubscribeEmailRequest$inboundSchema` instead. */
  export const inboundSchema = PostV1AccountSubscribeEmailRequest$inboundSchema;
  /** @deprecated use `PostV1AccountSubscribeEmailRequest$outboundSchema` instead. */
  export const outboundSchema =
    PostV1AccountSubscribeEmailRequest$outboundSchema;
  /** @deprecated use `PostV1AccountSubscribeEmailRequest$Outbound` instead. */
  export type Outbound = PostV1AccountSubscribeEmailRequest$Outbound;
}

export function postV1AccountSubscribeEmailRequestToJSON(
  postV1AccountSubscribeEmailRequest: PostV1AccountSubscribeEmailRequest,
): string {
  return JSON.stringify(
    PostV1AccountSubscribeEmailRequest$outboundSchema.parse(
      postV1AccountSubscribeEmailRequest,
    ),
  );
}

export function postV1AccountSubscribeEmailRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostV1AccountSubscribeEmailRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1AccountSubscribeEmailRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1AccountSubscribeEmailRequest' from JSON`,
  );
}

/** @internal */
export const PostV1AccountSubscribeEmailResponse$inboundSchema: z.ZodType<
  PostV1AccountSubscribeEmailResponse,
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
export type PostV1AccountSubscribeEmailResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
};

/** @internal */
export const PostV1AccountSubscribeEmailResponse$outboundSchema: z.ZodType<
  PostV1AccountSubscribeEmailResponse$Outbound,
  z.ZodTypeDef,
  PostV1AccountSubscribeEmailResponse
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
export namespace PostV1AccountSubscribeEmailResponse$ {
  /** @deprecated use `PostV1AccountSubscribeEmailResponse$inboundSchema` instead. */
  export const inboundSchema =
    PostV1AccountSubscribeEmailResponse$inboundSchema;
  /** @deprecated use `PostV1AccountSubscribeEmailResponse$outboundSchema` instead. */
  export const outboundSchema =
    PostV1AccountSubscribeEmailResponse$outboundSchema;
  /** @deprecated use `PostV1AccountSubscribeEmailResponse$Outbound` instead. */
  export type Outbound = PostV1AccountSubscribeEmailResponse$Outbound;
}

export function postV1AccountSubscribeEmailResponseToJSON(
  postV1AccountSubscribeEmailResponse: PostV1AccountSubscribeEmailResponse,
): string {
  return JSON.stringify(
    PostV1AccountSubscribeEmailResponse$outboundSchema.parse(
      postV1AccountSubscribeEmailResponse,
    ),
  );
}

export function postV1AccountSubscribeEmailResponseFromJSON(
  jsonString: string,
): SafeParseResult<PostV1AccountSubscribeEmailResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      PostV1AccountSubscribeEmailResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostV1AccountSubscribeEmailResponse' from JSON`,
  );
}
