/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ErrorDetail = {
  /**
   * Where the error occurred, e.g. 'body.items[3].tags' or 'path.thing-id'
   */
  location?: string | undefined;
  /**
   * Error message text
   */
  message?: string | undefined;
  /**
   * The value at the given location
   */
  value?: any | undefined;
};

/** @internal */
export const ErrorDetail$inboundSchema: z.ZodType<
  ErrorDetail,
  z.ZodTypeDef,
  unknown
> = z.object({
  location: z.string().optional(),
  message: z.string().optional(),
  value: z.any().optional(),
});

/** @internal */
export type ErrorDetail$Outbound = {
  location?: string | undefined;
  message?: string | undefined;
  value?: any | undefined;
};

/** @internal */
export const ErrorDetail$outboundSchema: z.ZodType<
  ErrorDetail$Outbound,
  z.ZodTypeDef,
  ErrorDetail
> = z.object({
  location: z.string().optional(),
  message: z.string().optional(),
  value: z.any().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorDetail$ {
  /** @deprecated use `ErrorDetail$inboundSchema` instead. */
  export const inboundSchema = ErrorDetail$inboundSchema;
  /** @deprecated use `ErrorDetail$outboundSchema` instead. */
  export const outboundSchema = ErrorDetail$outboundSchema;
  /** @deprecated use `ErrorDetail$Outbound` instead. */
  export type Outbound = ErrorDetail$Outbound;
}

export function errorDetailToJSON(errorDetail: ErrorDetail): string {
  return JSON.stringify(ErrorDetail$outboundSchema.parse(errorDetail));
}

export function errorDetailFromJSON(
  jsonString: string,
): SafeParseResult<ErrorDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorDetail' from JSON`,
  );
}
