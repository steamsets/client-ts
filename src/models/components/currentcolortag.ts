/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CurrentColorTag = {
  id: string;
  name: string;
};

/** @internal */
export const CurrentColorTag$inboundSchema: z.ZodType<
  CurrentColorTag,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type CurrentColorTag$Outbound = {
  id: string;
  name: string;
};

/** @internal */
export const CurrentColorTag$outboundSchema: z.ZodType<
  CurrentColorTag$Outbound,
  z.ZodTypeDef,
  CurrentColorTag
> = z.object({
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CurrentColorTag$ {
  /** @deprecated use `CurrentColorTag$inboundSchema` instead. */
  export const inboundSchema = CurrentColorTag$inboundSchema;
  /** @deprecated use `CurrentColorTag$outboundSchema` instead. */
  export const outboundSchema = CurrentColorTag$outboundSchema;
  /** @deprecated use `CurrentColorTag$Outbound` instead. */
  export type Outbound = CurrentColorTag$Outbound;
}

export function currentColorTagToJSON(
  currentColorTag: CurrentColorTag,
): string {
  return JSON.stringify(CurrentColorTag$outboundSchema.parse(currentColorTag));
}

export function currentColorTagFromJSON(
  jsonString: string,
): SafeParseResult<CurrentColorTag, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CurrentColorTag$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CurrentColorTag' from JSON`,
  );
}
