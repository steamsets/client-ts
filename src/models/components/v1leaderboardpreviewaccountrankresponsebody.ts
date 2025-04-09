/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PreviewAccount,
  PreviewAccount$inboundSchema,
  PreviewAccount$Outbound,
  PreviewAccount$outboundSchema,
} from "./previewaccount.js";

export type V1LeaderboardPreviewAccountRankResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  ownAccount?: PreviewAccount | null | undefined;
  rankedAbove?: PreviewAccount | null | undefined;
  rankedBelow?: PreviewAccount | null | undefined;
  /**
   * The number of accounts that are ranked in the leaderboard
   */
  rankedOutOf?: number | undefined;
};

/** @internal */
export const V1LeaderboardPreviewAccountRankResponseBody$inboundSchema:
  z.ZodType<
    V1LeaderboardPreviewAccountRankResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    $schema: z.string().optional(),
    ownAccount: z.nullable(PreviewAccount$inboundSchema).optional(),
    rankedAbove: z.nullable(PreviewAccount$inboundSchema).optional(),
    rankedBelow: z.nullable(PreviewAccount$inboundSchema).optional(),
    rankedOutOf: z.number().int().default(0),
  }).transform((v) => {
    return remap$(v, {
      "$schema": "dollarSchema",
    });
  });

/** @internal */
export type V1LeaderboardPreviewAccountRankResponseBody$Outbound = {
  $schema?: string | undefined;
  ownAccount?: PreviewAccount$Outbound | null | undefined;
  rankedAbove?: PreviewAccount$Outbound | null | undefined;
  rankedBelow?: PreviewAccount$Outbound | null | undefined;
  rankedOutOf: number;
};

/** @internal */
export const V1LeaderboardPreviewAccountRankResponseBody$outboundSchema:
  z.ZodType<
    V1LeaderboardPreviewAccountRankResponseBody$Outbound,
    z.ZodTypeDef,
    V1LeaderboardPreviewAccountRankResponseBody
  > = z.object({
    dollarSchema: z.string().optional(),
    ownAccount: z.nullable(PreviewAccount$outboundSchema).optional(),
    rankedAbove: z.nullable(PreviewAccount$outboundSchema).optional(),
    rankedBelow: z.nullable(PreviewAccount$outboundSchema).optional(),
    rankedOutOf: z.number().int().default(0),
  }).transform((v) => {
    return remap$(v, {
      dollarSchema: "$schema",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardPreviewAccountRankResponseBody$ {
  /** @deprecated use `V1LeaderboardPreviewAccountRankResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    V1LeaderboardPreviewAccountRankResponseBody$inboundSchema;
  /** @deprecated use `V1LeaderboardPreviewAccountRankResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    V1LeaderboardPreviewAccountRankResponseBody$outboundSchema;
  /** @deprecated use `V1LeaderboardPreviewAccountRankResponseBody$Outbound` instead. */
  export type Outbound = V1LeaderboardPreviewAccountRankResponseBody$Outbound;
}

export function v1LeaderboardPreviewAccountRankResponseBodyToJSON(
  v1LeaderboardPreviewAccountRankResponseBody:
    V1LeaderboardPreviewAccountRankResponseBody,
): string {
  return JSON.stringify(
    V1LeaderboardPreviewAccountRankResponseBody$outboundSchema.parse(
      v1LeaderboardPreviewAccountRankResponseBody,
    ),
  );
}

export function v1LeaderboardPreviewAccountRankResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  V1LeaderboardPreviewAccountRankResponseBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      V1LeaderboardPreviewAccountRankResponseBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'V1LeaderboardPreviewAccountRankResponseBody' from JSON`,
  );
}
