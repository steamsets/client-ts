/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V1AccountFriend,
  V1AccountFriend$inboundSchema,
  V1AccountFriend$Outbound,
  V1AccountFriend$outboundSchema,
} from "./v1accountfriend.js";

export type V1AccountFriendsResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  friends: Array<V1AccountFriend> | null;
};

/** @internal */
export const V1AccountFriendsResponseBody$inboundSchema: z.ZodType<
  V1AccountFriendsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  friends: z.nullable(z.array(V1AccountFriend$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1AccountFriendsResponseBody$Outbound = {
  $schema?: string | undefined;
  friends: Array<V1AccountFriend$Outbound> | null;
};

/** @internal */
export const V1AccountFriendsResponseBody$outboundSchema: z.ZodType<
  V1AccountFriendsResponseBody$Outbound,
  z.ZodTypeDef,
  V1AccountFriendsResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  friends: z.nullable(z.array(V1AccountFriend$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountFriendsResponseBody$ {
  /** @deprecated use `V1AccountFriendsResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountFriendsResponseBody$inboundSchema;
  /** @deprecated use `V1AccountFriendsResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1AccountFriendsResponseBody$outboundSchema;
  /** @deprecated use `V1AccountFriendsResponseBody$Outbound` instead. */
  export type Outbound = V1AccountFriendsResponseBody$Outbound;
}

export function v1AccountFriendsResponseBodyToJSON(
  v1AccountFriendsResponseBody: V1AccountFriendsResponseBody,
): string {
  return JSON.stringify(
    V1AccountFriendsResponseBody$outboundSchema.parse(
      v1AccountFriendsResponseBody,
    ),
  );
}

export function v1AccountFriendsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountFriendsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountFriendsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountFriendsResponseBody' from JSON`,
  );
}
