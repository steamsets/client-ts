/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LeaderboardGetAccountLeaderboardResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  v1LeaderboardGetAccountLeaderboardResponseBody?:
    | components.V1LeaderboardGetAccountLeaderboardResponseBody
    | undefined;
};

/** @internal */
export const LeaderboardGetAccountLeaderboardResponse$inboundSchema: z.ZodType<
  LeaderboardGetAccountLeaderboardResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  V1LeaderboardGetAccountLeaderboardResponseBody: components
    .V1LeaderboardGetAccountLeaderboardResponseBody$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "V1LeaderboardGetAccountLeaderboardResponseBody":
      "v1LeaderboardGetAccountLeaderboardResponseBody",
  });
});

/** @internal */
export type LeaderboardGetAccountLeaderboardResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  V1LeaderboardGetAccountLeaderboardResponseBody?:
    | components.V1LeaderboardGetAccountLeaderboardResponseBody$Outbound
    | undefined;
};

/** @internal */
export const LeaderboardGetAccountLeaderboardResponse$outboundSchema: z.ZodType<
  LeaderboardGetAccountLeaderboardResponse$Outbound,
  z.ZodTypeDef,
  LeaderboardGetAccountLeaderboardResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  v1LeaderboardGetAccountLeaderboardResponseBody: components
    .V1LeaderboardGetAccountLeaderboardResponseBody$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    v1LeaderboardGetAccountLeaderboardResponseBody:
      "V1LeaderboardGetAccountLeaderboardResponseBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeaderboardGetAccountLeaderboardResponse$ {
  /** @deprecated use `LeaderboardGetAccountLeaderboardResponse$inboundSchema` instead. */
  export const inboundSchema =
    LeaderboardGetAccountLeaderboardResponse$inboundSchema;
  /** @deprecated use `LeaderboardGetAccountLeaderboardResponse$outboundSchema` instead. */
  export const outboundSchema =
    LeaderboardGetAccountLeaderboardResponse$outboundSchema;
  /** @deprecated use `LeaderboardGetAccountLeaderboardResponse$Outbound` instead. */
  export type Outbound = LeaderboardGetAccountLeaderboardResponse$Outbound;
}

export function leaderboardGetAccountLeaderboardResponseToJSON(
  leaderboardGetAccountLeaderboardResponse:
    LeaderboardGetAccountLeaderboardResponse,
): string {
  return JSON.stringify(
    LeaderboardGetAccountLeaderboardResponse$outboundSchema.parse(
      leaderboardGetAccountLeaderboardResponse,
    ),
  );
}

export function leaderboardGetAccountLeaderboardResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  LeaderboardGetAccountLeaderboardResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      LeaderboardGetAccountLeaderboardResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'LeaderboardGetAccountLeaderboardResponse' from JSON`,
  );
}
