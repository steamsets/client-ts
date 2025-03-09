/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LeaderboardV1GetLeaderboardAccountMetaResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1LeaderboardAccountMetaResponseBody?:
    | components.V1LeaderboardAccountMetaResponseBody
    | undefined;
};

/** @internal */
export const LeaderboardV1GetLeaderboardAccountMetaResponse$inboundSchema:
  z.ZodType<
    LeaderboardV1GetLeaderboardAccountMetaResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    V1LeaderboardAccountMetaResponseBody: components
      .V1LeaderboardAccountMetaResponseBody$inboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "V1LeaderboardAccountMetaResponseBody":
        "v1LeaderboardAccountMetaResponseBody",
    });
  });

/** @internal */
export type LeaderboardV1GetLeaderboardAccountMetaResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1LeaderboardAccountMetaResponseBody?:
    | components.V1LeaderboardAccountMetaResponseBody$Outbound
    | undefined;
};

/** @internal */
export const LeaderboardV1GetLeaderboardAccountMetaResponse$outboundSchema:
  z.ZodType<
    LeaderboardV1GetLeaderboardAccountMetaResponse$Outbound,
    z.ZodTypeDef,
    LeaderboardV1GetLeaderboardAccountMetaResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    v1LeaderboardAccountMetaResponseBody: components
      .V1LeaderboardAccountMetaResponseBody$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      v1LeaderboardAccountMetaResponseBody:
        "V1LeaderboardAccountMetaResponseBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeaderboardV1GetLeaderboardAccountMetaResponse$ {
  /** @deprecated use `LeaderboardV1GetLeaderboardAccountMetaResponse$inboundSchema` instead. */
  export const inboundSchema =
    LeaderboardV1GetLeaderboardAccountMetaResponse$inboundSchema;
  /** @deprecated use `LeaderboardV1GetLeaderboardAccountMetaResponse$outboundSchema` instead. */
  export const outboundSchema =
    LeaderboardV1GetLeaderboardAccountMetaResponse$outboundSchema;
  /** @deprecated use `LeaderboardV1GetLeaderboardAccountMetaResponse$Outbound` instead. */
  export type Outbound =
    LeaderboardV1GetLeaderboardAccountMetaResponse$Outbound;
}

export function leaderboardV1GetLeaderboardAccountMetaResponseToJSON(
  leaderboardV1GetLeaderboardAccountMetaResponse:
    LeaderboardV1GetLeaderboardAccountMetaResponse,
): string {
  return JSON.stringify(
    LeaderboardV1GetLeaderboardAccountMetaResponse$outboundSchema.parse(
      leaderboardV1GetLeaderboardAccountMetaResponse,
    ),
  );
}

export function leaderboardV1GetLeaderboardAccountMetaResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  LeaderboardV1GetLeaderboardAccountMetaResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      LeaderboardV1GetLeaderboardAccountMetaResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'LeaderboardV1GetLeaderboardAccountMetaResponse' from JSON`,
  );
}
