/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1DeleteImagesRequestBody = {
  /**
   * The images ids to delete
   */
  imageIds: Array<string> | null;
};

/** @internal */
export const V1DeleteImagesRequestBody$inboundSchema: z.ZodType<
  V1DeleteImagesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  imageIds: z.nullable(z.array(z.string())),
});

/** @internal */
export type V1DeleteImagesRequestBody$Outbound = {
  imageIds: Array<string> | null;
};

/** @internal */
export const V1DeleteImagesRequestBody$outboundSchema: z.ZodType<
  V1DeleteImagesRequestBody$Outbound,
  z.ZodTypeDef,
  V1DeleteImagesRequestBody
> = z.object({
  imageIds: z.nullable(z.array(z.string())),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1DeleteImagesRequestBody$ {
  /** @deprecated use `V1DeleteImagesRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1DeleteImagesRequestBody$inboundSchema;
  /** @deprecated use `V1DeleteImagesRequestBody$outboundSchema` instead. */
  export const outboundSchema = V1DeleteImagesRequestBody$outboundSchema;
  /** @deprecated use `V1DeleteImagesRequestBody$Outbound` instead. */
  export type Outbound = V1DeleteImagesRequestBody$Outbound;
}

export function v1DeleteImagesRequestBodyToJSON(
  v1DeleteImagesRequestBody: V1DeleteImagesRequestBody,
): string {
  return JSON.stringify(
    V1DeleteImagesRequestBody$outboundSchema.parse(v1DeleteImagesRequestBody),
  );
}

export function v1DeleteImagesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1DeleteImagesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1DeleteImagesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1DeleteImagesRequestBody' from JSON`,
  );
}
