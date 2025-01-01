/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ColorTag = {
  gradient: string | null;
  group: string;
  groupOwner: boolean;
  hex: string | null;
  hsl: string;
  id: string;
  name: string;
};

/** @internal */
export const ColorTag$inboundSchema: z.ZodType<
  ColorTag,
  z.ZodTypeDef,
  unknown
> = z.object({
  gradient: z.nullable(z.string()),
  group: z.string(),
  groupOwner: z.boolean(),
  hex: z.nullable(z.string()),
  hsl: z.string(),
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type ColorTag$Outbound = {
  gradient: string | null;
  group: string;
  groupOwner: boolean;
  hex: string | null;
  hsl: string;
  id: string;
  name: string;
};

/** @internal */
export const ColorTag$outboundSchema: z.ZodType<
  ColorTag$Outbound,
  z.ZodTypeDef,
  ColorTag
> = z.object({
  gradient: z.nullable(z.string()),
  group: z.string(),
  groupOwner: z.boolean(),
  hex: z.nullable(z.string()),
  hsl: z.string(),
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ColorTag$ {
  /** @deprecated use `ColorTag$inboundSchema` instead. */
  export const inboundSchema = ColorTag$inboundSchema;
  /** @deprecated use `ColorTag$outboundSchema` instead. */
  export const outboundSchema = ColorTag$outboundSchema;
  /** @deprecated use `ColorTag$Outbound` instead. */
  export type Outbound = ColorTag$Outbound;
}

export function colorTagToJSON(colorTag: ColorTag): string {
  return JSON.stringify(ColorTag$outboundSchema.parse(colorTag));
}

export function colorTagFromJSON(
  jsonString: string,
): SafeParseResult<ColorTag, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ColorTag$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ColorTag' from JSON`,
  );
}
