/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LeaderboardV1GetGroupLeaderboardMetaResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1LeaderboardGroupMetaResponseBody?:
    | components.V1LeaderboardGroupMetaResponseBody
    | undefined;
};

/** @internal */
export const LeaderboardV1GetGroupLeaderboardMetaResponse$inboundSchema:
  z.ZodType<
    LeaderboardV1GetGroupLeaderboardMetaResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    V1LeaderboardGroupMetaResponseBody: components
      .V1LeaderboardGroupMetaResponseBody$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "V1LeaderboardGroupMetaResponseBody":
        "v1LeaderboardGroupMetaResponseBody",
    });
  });

/** @internal */
export type LeaderboardV1GetGroupLeaderboardMetaResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1LeaderboardGroupMetaResponseBody?:
    | components.V1LeaderboardGroupMetaResponseBody$Outbound
    | undefined;
};

/** @internal */
export const LeaderboardV1GetGroupLeaderboardMetaResponse$outboundSchema:
  z.ZodType<
    LeaderboardV1GetGroupLeaderboardMetaResponse$Outbound,
    z.ZodTypeDef,
    LeaderboardV1GetGroupLeaderboardMetaResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    v1LeaderboardGroupMetaResponseBody: components
      .V1LeaderboardGroupMetaResponseBody$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      v1LeaderboardGroupMetaResponseBody: "V1LeaderboardGroupMetaResponseBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeaderboardV1GetGroupLeaderboardMetaResponse$ {
  /** @deprecated use `LeaderboardV1GetGroupLeaderboardMetaResponse$inboundSchema` instead. */
  export const inboundSchema =
    LeaderboardV1GetGroupLeaderboardMetaResponse$inboundSchema;
  /** @deprecated use `LeaderboardV1GetGroupLeaderboardMetaResponse$outboundSchema` instead. */
  export const outboundSchema =
    LeaderboardV1GetGroupLeaderboardMetaResponse$outboundSchema;
  /** @deprecated use `LeaderboardV1GetGroupLeaderboardMetaResponse$Outbound` instead. */
  export type Outbound = LeaderboardV1GetGroupLeaderboardMetaResponse$Outbound;
}

export function leaderboardV1GetGroupLeaderboardMetaResponseToJSON(
  leaderboardV1GetGroupLeaderboardMetaResponse:
    LeaderboardV1GetGroupLeaderboardMetaResponse,
): string {
  return JSON.stringify(
    LeaderboardV1GetGroupLeaderboardMetaResponse$outboundSchema.parse(
      leaderboardV1GetGroupLeaderboardMetaResponse,
    ),
  );
}

export function leaderboardV1GetGroupLeaderboardMetaResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  LeaderboardV1GetGroupLeaderboardMetaResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      LeaderboardV1GetGroupLeaderboardMetaResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'LeaderboardV1GetGroupLeaderboardMetaResponse' from JSON`,
  );
}
