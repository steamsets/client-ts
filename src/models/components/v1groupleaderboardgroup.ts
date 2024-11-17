/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LeaderboardAccount,
  LeaderboardAccount$inboundSchema,
  LeaderboardAccount$Outbound,
  LeaderboardAccount$outboundSchema,
} from "./leaderboardaccount.js";

/**
 * The privacy of the group
 */
export const V1GroupLeaderboardGroupPrivacy = {
  Public: "public",
  RequestOnly: "request_only",
  InviteOnly: "invite_only",
  Hidden: "hidden",
} as const;
/**
 * The privacy of the group
 */
export type V1GroupLeaderboardGroupPrivacy = ClosedEnum<
  typeof V1GroupLeaderboardGroupPrivacy
>;

export type V1GroupLeaderboardGroup = {
  /**
   * The avatar of the group
   */
  avatar: string;
  /**
   * The time the group was founded
   */
  foundedAt: Date;
  /**
   * The id of the group
   */
  id: number;
  /**
   * The number of members in the group
   */
  members: number;
  /**
   * The name of the group
   */
  name: string;
  owner: LeaderboardAccount | null;
  /**
   * The privacy of the group
   */
  privacy: V1GroupLeaderboardGroupPrivacy;
  /**
   * The rank of the account
   */
  rank: number;
  /**
   * The tag of the group
   */
  tag: string;
  /**
   * The vanity of the group
   */
  vanity: string;
};

/** @internal */
export const V1GroupLeaderboardGroupPrivacy$inboundSchema: z.ZodNativeEnum<
  typeof V1GroupLeaderboardGroupPrivacy
> = z.nativeEnum(V1GroupLeaderboardGroupPrivacy);

/** @internal */
export const V1GroupLeaderboardGroupPrivacy$outboundSchema: z.ZodNativeEnum<
  typeof V1GroupLeaderboardGroupPrivacy
> = V1GroupLeaderboardGroupPrivacy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1GroupLeaderboardGroupPrivacy$ {
  /** @deprecated use `V1GroupLeaderboardGroupPrivacy$inboundSchema` instead. */
  export const inboundSchema = V1GroupLeaderboardGroupPrivacy$inboundSchema;
  /** @deprecated use `V1GroupLeaderboardGroupPrivacy$outboundSchema` instead. */
  export const outboundSchema = V1GroupLeaderboardGroupPrivacy$outboundSchema;
}

/** @internal */
export const V1GroupLeaderboardGroup$inboundSchema: z.ZodType<
  V1GroupLeaderboardGroup,
  z.ZodTypeDef,
  unknown
> = z.object({
  avatar: z.string(),
  foundedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  id: z.number().int(),
  members: z.number().int(),
  name: z.string(),
  owner: z.nullable(LeaderboardAccount$inboundSchema),
  privacy: V1GroupLeaderboardGroupPrivacy$inboundSchema,
  rank: z.number().int(),
  tag: z.string(),
  vanity: z.string(),
});

/** @internal */
export type V1GroupLeaderboardGroup$Outbound = {
  avatar: string;
  foundedAt: string;
  id: number;
  members: number;
  name: string;
  owner: LeaderboardAccount$Outbound | null;
  privacy: string;
  rank: number;
  tag: string;
  vanity: string;
};

/** @internal */
export const V1GroupLeaderboardGroup$outboundSchema: z.ZodType<
  V1GroupLeaderboardGroup$Outbound,
  z.ZodTypeDef,
  V1GroupLeaderboardGroup
> = z.object({
  avatar: z.string(),
  foundedAt: z.date().transform(v => v.toISOString()),
  id: z.number().int(),
  members: z.number().int(),
  name: z.string(),
  owner: z.nullable(LeaderboardAccount$outboundSchema),
  privacy: V1GroupLeaderboardGroupPrivacy$outboundSchema,
  rank: z.number().int(),
  tag: z.string(),
  vanity: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1GroupLeaderboardGroup$ {
  /** @deprecated use `V1GroupLeaderboardGroup$inboundSchema` instead. */
  export const inboundSchema = V1GroupLeaderboardGroup$inboundSchema;
  /** @deprecated use `V1GroupLeaderboardGroup$outboundSchema` instead. */
  export const outboundSchema = V1GroupLeaderboardGroup$outboundSchema;
  /** @deprecated use `V1GroupLeaderboardGroup$Outbound` instead. */
  export type Outbound = V1GroupLeaderboardGroup$Outbound;
}

export function v1GroupLeaderboardGroupToJSON(
  v1GroupLeaderboardGroup: V1GroupLeaderboardGroup,
): string {
  return JSON.stringify(
    V1GroupLeaderboardGroup$outboundSchema.parse(v1GroupLeaderboardGroup),
  );
}

export function v1GroupLeaderboardGroupFromJSON(
  jsonString: string,
): SafeParseResult<V1GroupLeaderboardGroup, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1GroupLeaderboardGroup$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1GroupLeaderboardGroup' from JSON`,
  );
}
