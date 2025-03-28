/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BadgeSuggestTags = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  colors: Array<string> | null;
  designs: Array<string> | null;
};

/** @internal */
export const BadgeSuggestTags$inboundSchema: z.ZodType<
  BadgeSuggestTags,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  colors: z.nullable(z.array(z.string())),
  designs: z.nullable(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type BadgeSuggestTags$Outbound = {
  $schema?: string | undefined;
  colors: Array<string> | null;
  designs: Array<string> | null;
};

/** @internal */
export const BadgeSuggestTags$outboundSchema: z.ZodType<
  BadgeSuggestTags$Outbound,
  z.ZodTypeDef,
  BadgeSuggestTags
> = z.object({
  dollarSchema: z.string().optional(),
  colors: z.nullable(z.array(z.string())),
  designs: z.nullable(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadgeSuggestTags$ {
  /** @deprecated use `BadgeSuggestTags$inboundSchema` instead. */
  export const inboundSchema = BadgeSuggestTags$inboundSchema;
  /** @deprecated use `BadgeSuggestTags$outboundSchema` instead. */
  export const outboundSchema = BadgeSuggestTags$outboundSchema;
  /** @deprecated use `BadgeSuggestTags$Outbound` instead. */
  export type Outbound = BadgeSuggestTags$Outbound;
}

export function badgeSuggestTagsToJSON(
  badgeSuggestTags: BadgeSuggestTags,
): string {
  return JSON.stringify(
    BadgeSuggestTags$outboundSchema.parse(badgeSuggestTags),
  );
}

export function badgeSuggestTagsFromJSON(
  jsonString: string,
): SafeParseResult<BadgeSuggestTags, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BadgeSuggestTags$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BadgeSuggestTags' from JSON`,
  );
}
