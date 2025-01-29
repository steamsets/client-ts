/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type V1CreateSessionBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The ratelimit limit
   */
  limit: number;
  /**
   * The ratelimit remain
   */
  remain: number;
  /**
   * The ratelimit reset
   */
  reset: string;
  /**
   * The session token
   */
  sessionToken: string;
};

/** @internal */
export const V1CreateSessionBody$inboundSchema: z.ZodType<
  V1CreateSessionBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  limit: z.number().int(),
  remain: z.number().int(),
  reset: z.string(),
  sessionToken: z.string(),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1CreateSessionBody$Outbound = {
  $schema?: string | undefined;
  limit: number;
  remain: number;
  reset: string;
  sessionToken: string;
};

/** @internal */
export const V1CreateSessionBody$outboundSchema: z.ZodType<
  V1CreateSessionBody$Outbound,
  z.ZodTypeDef,
  V1CreateSessionBody
> = z.object({
  dollarSchema: z.string().optional(),
  limit: z.number().int(),
  remain: z.number().int(),
  reset: z.string(),
  sessionToken: z.string(),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1CreateSessionBody$ {
  /** @deprecated use `V1CreateSessionBody$inboundSchema` instead. */
  export const inboundSchema = V1CreateSessionBody$inboundSchema;
  /** @deprecated use `V1CreateSessionBody$outboundSchema` instead. */
  export const outboundSchema = V1CreateSessionBody$outboundSchema;
  /** @deprecated use `V1CreateSessionBody$Outbound` instead. */
  export type Outbound = V1CreateSessionBody$Outbound;
}

export function v1CreateSessionBodyToJSON(
  v1CreateSessionBody: V1CreateSessionBody,
): string {
  return JSON.stringify(
    V1CreateSessionBody$outboundSchema.parse(v1CreateSessionBody),
  );
}

export function v1CreateSessionBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1CreateSessionBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1CreateSessionBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1CreateSessionBody' from JSON`,
  );
}
