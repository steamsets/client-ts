/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1SearchRequest = {
  facets?: Array<string> | null | undefined;
  /**
   * The filter to apply to the search
   */
  filter: string;
  /**
   * The image to reverse search
   */
  image?: string | null | undefined;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
  page?: number | null | undefined;
  /**
   * The query to search for
   */
  query: string;
  /**
   * sort order
   */
  sort: Array<string> | null;
};

/** @internal */
export const V1SearchRequest$inboundSchema: z.ZodType<
  V1SearchRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  facets: z.nullable(z.array(z.string())).optional(),
  filter: z.string(),
  image: z.nullable(z.string()).optional(),
  limit: z.nullable(z.number().int()).optional(),
  offset: z.nullable(z.number().int()).optional(),
  page: z.nullable(z.number().int()).optional(),
  query: z.string(),
  sort: z.nullable(z.array(z.string())),
});

/** @internal */
export type V1SearchRequest$Outbound = {
  facets?: Array<string> | null | undefined;
  filter: string;
  image?: string | null | undefined;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
  page?: number | null | undefined;
  query: string;
  sort: Array<string> | null;
};

/** @internal */
export const V1SearchRequest$outboundSchema: z.ZodType<
  V1SearchRequest$Outbound,
  z.ZodTypeDef,
  V1SearchRequest
> = z.object({
  facets: z.nullable(z.array(z.string())).optional(),
  filter: z.string(),
  image: z.nullable(z.string()).optional(),
  limit: z.nullable(z.number().int()).optional(),
  offset: z.nullable(z.number().int()).optional(),
  page: z.nullable(z.number().int()).optional(),
  query: z.string(),
  sort: z.nullable(z.array(z.string())),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1SearchRequest$ {
  /** @deprecated use `V1SearchRequest$inboundSchema` instead. */
  export const inboundSchema = V1SearchRequest$inboundSchema;
  /** @deprecated use `V1SearchRequest$outboundSchema` instead. */
  export const outboundSchema = V1SearchRequest$outboundSchema;
  /** @deprecated use `V1SearchRequest$Outbound` instead. */
  export type Outbound = V1SearchRequest$Outbound;
}

export function v1SearchRequestToJSON(
  v1SearchRequest: V1SearchRequest,
): string {
  return JSON.stringify(V1SearchRequest$outboundSchema.parse(v1SearchRequest));
}

export function v1SearchRequestFromJSON(
  jsonString: string,
): SafeParseResult<V1SearchRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1SearchRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1SearchRequest' from JSON`,
  );
}
