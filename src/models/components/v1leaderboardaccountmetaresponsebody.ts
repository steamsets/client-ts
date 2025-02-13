/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1LeaderboardAccountMetaResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  description: string;
  title: string;
};

/** @internal */
export const V1LeaderboardAccountMetaResponseBody$inboundSchema: z.ZodType<
  V1LeaderboardAccountMetaResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  description: z.string(),
  title: z.string(),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1LeaderboardAccountMetaResponseBody$Outbound = {
  $schema?: string | undefined;
  description: string;
  title: string;
};

/** @internal */
export const V1LeaderboardAccountMetaResponseBody$outboundSchema: z.ZodType<
  V1LeaderboardAccountMetaResponseBody$Outbound,
  z.ZodTypeDef,
  V1LeaderboardAccountMetaResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  description: z.string(),
  title: z.string(),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardAccountMetaResponseBody$ {
  /** @deprecated use `V1LeaderboardAccountMetaResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    V1LeaderboardAccountMetaResponseBody$inboundSchema;
  /** @deprecated use `V1LeaderboardAccountMetaResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V1LeaderboardAccountMetaResponseBody$outboundSchema;
  /** @deprecated use `V1LeaderboardAccountMetaResponseBody$Outbound` instead. */
  export type Outbound = V1LeaderboardAccountMetaResponseBody$Outbound;
}

export function v1LeaderboardAccountMetaResponseBodyToJSON(
  v1LeaderboardAccountMetaResponseBody: V1LeaderboardAccountMetaResponseBody,
): string {
  return JSON.stringify(
    V1LeaderboardAccountMetaResponseBody$outboundSchema.parse(
      v1LeaderboardAccountMetaResponseBody,
    ),
  );
}

export function v1LeaderboardAccountMetaResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1LeaderboardAccountMetaResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1LeaderboardAccountMetaResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1LeaderboardAccountMetaResponseBody' from JSON`,
  );
}
