/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1LeaderboardLocationInfo = {
  /**
   * The city name of the location
   */
  cityName: string | null;
  /**
   * The country code of the location
   */
  countryCode: string | null;
  /**
   * The country name of the location
   */
  countryName: string | null;
  /**
   * The region of the location
   */
  region: string | null;
  /**
   * The state name of the location
   */
  stateName: string | null;
};

/** @internal */
export const V1LeaderboardLocationInfo$inboundSchema: z.ZodType<
  V1LeaderboardLocationInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  cityName: z.nullable(z.string()),
  countryCode: z.nullable(z.string()),
  countryName: z.nullable(z.string()),
  region: z.nullable(z.string()),
  stateName: z.nullable(z.string()),
});

/** @internal */
export type V1LeaderboardLocationInfo$Outbound = {
  cityName: string | null;
  countryCode: string | null;
  countryName: string | null;
  region: string | null;
  stateName: string | null;
};

/** @internal */
export const V1LeaderboardLocationInfo$outboundSchema: z.ZodType<
  V1LeaderboardLocationInfo$Outbound,
  z.ZodTypeDef,
  V1LeaderboardLocationInfo
> = z.object({
  cityName: z.nullable(z.string()),
  countryCode: z.nullable(z.string()),
  countryName: z.nullable(z.string()),
  region: z.nullable(z.string()),
  stateName: z.nullable(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1LeaderboardLocationInfo$ {
  /** @deprecated use `V1LeaderboardLocationInfo$inboundSchema` instead. */
  export const inboundSchema = V1LeaderboardLocationInfo$inboundSchema;
  /** @deprecated use `V1LeaderboardLocationInfo$outboundSchema` instead. */
  export const outboundSchema = V1LeaderboardLocationInfo$outboundSchema;
  /** @deprecated use `V1LeaderboardLocationInfo$Outbound` instead. */
  export type Outbound = V1LeaderboardLocationInfo$Outbound;
}

export function v1LeaderboardLocationInfoToJSON(
  v1LeaderboardLocationInfo: V1LeaderboardLocationInfo,
): string {
  return JSON.stringify(
    V1LeaderboardLocationInfo$outboundSchema.parse(v1LeaderboardLocationInfo),
  );
}

export function v1LeaderboardLocationInfoFromJSON(
  jsonString: string,
): SafeParseResult<V1LeaderboardLocationInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1LeaderboardLocationInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1LeaderboardLocationInfo' from JSON`,
  );
}
