/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1AccountApp = {
  /**
   * The Steam App ID
   */
  id: number;
  /**
   * The App's image URL
   */
  image: string;
  /**
   * The App's name
   */
  name: string;
  /**
   * The Account's playtime in the App
   */
  playtime: number;
  /**
   * How much the app costs
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  price: number;
};

/** @internal */
export const V1AccountApp$inboundSchema: z.ZodType<
  V1AccountApp,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int(),
  image: z.string(),
  name: z.string(),
  playtime: z.number().int(),
  price: z.number().int(),
});

/** @internal */
export type V1AccountApp$Outbound = {
  id: number;
  image: string;
  name: string;
  playtime: number;
  price: number;
};

/** @internal */
export const V1AccountApp$outboundSchema: z.ZodType<
  V1AccountApp$Outbound,
  z.ZodTypeDef,
  V1AccountApp
> = z.object({
  id: z.number().int(),
  image: z.string(),
  name: z.string(),
  playtime: z.number().int(),
  price: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountApp$ {
  /** @deprecated use `V1AccountApp$inboundSchema` instead. */
  export const inboundSchema = V1AccountApp$inboundSchema;
  /** @deprecated use `V1AccountApp$outboundSchema` instead. */
  export const outboundSchema = V1AccountApp$outboundSchema;
  /** @deprecated use `V1AccountApp$Outbound` instead. */
  export type Outbound = V1AccountApp$Outbound;
}

export function v1AccountAppToJSON(v1AccountApp: V1AccountApp): string {
  return JSON.stringify(V1AccountApp$outboundSchema.parse(v1AccountApp));
}

export function v1AccountAppFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountApp, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountApp$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountApp' from JSON`,
  );
}
