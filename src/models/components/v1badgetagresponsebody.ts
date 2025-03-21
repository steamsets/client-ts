/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CurrentColorTag,
  CurrentColorTag$inboundSchema,
  CurrentColorTag$Outbound,
  CurrentColorTag$outboundSchema,
} from "./currentcolortag.js";
import {
  DesignTag,
  DesignTag$inboundSchema,
  DesignTag$Outbound,
  DesignTag$outboundSchema,
} from "./designtag.js";

export type V1BadgeTagResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The available color tags
   */
  colorTags: Array<CurrentColorTag> | null;
  /**
   * The available design tags
   */
  designTags: Array<DesignTag> | null;
};

/** @internal */
export const V1BadgeTagResponseBody$inboundSchema: z.ZodType<
  V1BadgeTagResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  colorTags: z.nullable(z.array(CurrentColorTag$inboundSchema)),
  designTags: z.nullable(z.array(DesignTag$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1BadgeTagResponseBody$Outbound = {
  $schema?: string | undefined;
  colorTags: Array<CurrentColorTag$Outbound> | null;
  designTags: Array<DesignTag$Outbound> | null;
};

/** @internal */
export const V1BadgeTagResponseBody$outboundSchema: z.ZodType<
  V1BadgeTagResponseBody$Outbound,
  z.ZodTypeDef,
  V1BadgeTagResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  colorTags: z.nullable(z.array(CurrentColorTag$outboundSchema)),
  designTags: z.nullable(z.array(DesignTag$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1BadgeTagResponseBody$ {
  /** @deprecated use `V1BadgeTagResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1BadgeTagResponseBody$inboundSchema;
  /** @deprecated use `V1BadgeTagResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1BadgeTagResponseBody$outboundSchema;
  /** @deprecated use `V1BadgeTagResponseBody$Outbound` instead. */
  export type Outbound = V1BadgeTagResponseBody$Outbound;
}

export function v1BadgeTagResponseBodyToJSON(
  v1BadgeTagResponseBody: V1BadgeTagResponseBody,
): string {
  return JSON.stringify(
    V1BadgeTagResponseBody$outboundSchema.parse(v1BadgeTagResponseBody),
  );
}

export function v1BadgeTagResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1BadgeTagResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1BadgeTagResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1BadgeTagResponseBody' from JSON`,
  );
}
