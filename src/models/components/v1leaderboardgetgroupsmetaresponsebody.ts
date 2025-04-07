/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1LeaderboardGetGroupsMetaResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  description: string;
  title: string;
};

/** @internal */
export const V1LeaderboardGetGroupsMetaResponseBody$inboundSchema: z.ZodType<
  V1LeaderboardGetGroupsMetaResponseBody,
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
export type V1LeaderboardGetGroupsMetaResponseBody$Outbound = {
  $schema?: string | undefined;
  description: string;
  title: string;
};

/** @internal */
export const V1LeaderboardGetGroupsMetaResponseBody$outboundSchema: z.ZodType<
  V1LeaderboardGetGroupsMetaResponseBody$Outbound,
  z.ZodTypeDef,
  V1LeaderboardGetGroupsMetaResponseBody
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
export namespace V1LeaderboardGetGroupsMetaResponseBody$ {
  /** @deprecated use `V1LeaderboardGetGroupsMetaResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    V1LeaderboardGetGroupsMetaResponseBody$inboundSchema;
  /** @deprecated use `V1LeaderboardGetGroupsMetaResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V1LeaderboardGetGroupsMetaResponseBody$outboundSchema;
  /** @deprecated use `V1LeaderboardGetGroupsMetaResponseBody$Outbound` instead. */
  export type Outbound = V1LeaderboardGetGroupsMetaResponseBody$Outbound;
}

export function v1LeaderboardGetGroupsMetaResponseBodyToJSON(
  v1LeaderboardGetGroupsMetaResponseBody:
    V1LeaderboardGetGroupsMetaResponseBody,
): string {
  return JSON.stringify(
    V1LeaderboardGetGroupsMetaResponseBody$outboundSchema.parse(
      v1LeaderboardGetGroupsMetaResponseBody,
    ),
  );
}

export function v1LeaderboardGetGroupsMetaResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1LeaderboardGetGroupsMetaResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1LeaderboardGetGroupsMetaResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1LeaderboardGetGroupsMetaResponseBody' from JSON`,
  );
}
