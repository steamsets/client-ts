/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LeaderboardV1GetAccountLeaderboardResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1AccountLeaderboardResponseBody?:
    | components.V1AccountLeaderboardResponseBody
    | undefined;
};

/** @internal */
export const LeaderboardV1GetAccountLeaderboardResponse$inboundSchema:
  z.ZodType<LeaderboardV1GetAccountLeaderboardResponse, z.ZodTypeDef, unknown> =
    z.object({
      HttpMeta: components.HTTPMetadata$inboundSchema,
      V1AccountLeaderboardResponseBody: components
        .V1AccountLeaderboardResponseBody$inboundSchema.optional(),
    }).transform((v) => {
      return remap$(v, {
        "HttpMeta": "httpMeta",
        "V1AccountLeaderboardResponseBody": "v1AccountLeaderboardResponseBody",
      });
    });

/** @internal */
export type LeaderboardV1GetAccountLeaderboardResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1AccountLeaderboardResponseBody?:
    | components.V1AccountLeaderboardResponseBody$Outbound
    | undefined;
};

/** @internal */
export const LeaderboardV1GetAccountLeaderboardResponse$outboundSchema:
  z.ZodType<
    LeaderboardV1GetAccountLeaderboardResponse$Outbound,
    z.ZodTypeDef,
    LeaderboardV1GetAccountLeaderboardResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    v1AccountLeaderboardResponseBody: components
      .V1AccountLeaderboardResponseBody$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      v1AccountLeaderboardResponseBody: "V1AccountLeaderboardResponseBody",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeaderboardV1GetAccountLeaderboardResponse$ {
  /** @deprecated use `LeaderboardV1GetAccountLeaderboardResponse$inboundSchema` instead. */
  export const inboundSchema =
    LeaderboardV1GetAccountLeaderboardResponse$inboundSchema;
  /** @deprecated use `LeaderboardV1GetAccountLeaderboardResponse$outboundSchema` instead. */
  export const outboundSchema =
    LeaderboardV1GetAccountLeaderboardResponse$outboundSchema;
  /** @deprecated use `LeaderboardV1GetAccountLeaderboardResponse$Outbound` instead. */
  export type Outbound = LeaderboardV1GetAccountLeaderboardResponse$Outbound;
}

export function leaderboardV1GetAccountLeaderboardResponseToJSON(
  leaderboardV1GetAccountLeaderboardResponse:
    LeaderboardV1GetAccountLeaderboardResponse,
): string {
  return JSON.stringify(
    LeaderboardV1GetAccountLeaderboardResponse$outboundSchema.parse(
      leaderboardV1GetAccountLeaderboardResponse,
    ),
  );
}

export function leaderboardV1GetAccountLeaderboardResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  LeaderboardV1GetAccountLeaderboardResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      LeaderboardV1GetAccountLeaderboardResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'LeaderboardV1GetAccountLeaderboardResponse' from JSON`,
  );
}
