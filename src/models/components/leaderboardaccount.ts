/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LeaderboardCity,
  LeaderboardCity$inboundSchema,
  LeaderboardCity$Outbound,
  LeaderboardCity$outboundSchema,
} from "./leaderboardcity.js";
import {
  LeaderboardCountry,
  LeaderboardCountry$inboundSchema,
  LeaderboardCountry$Outbound,
  LeaderboardCountry$outboundSchema,
} from "./leaderboardcountry.js";
import {
  LeaderboardRegion,
  LeaderboardRegion$inboundSchema,
  LeaderboardRegion$Outbound,
  LeaderboardRegion$outboundSchema,
} from "./leaderboardregion.js";
import {
  LeaderboardState,
  LeaderboardState$inboundSchema,
  LeaderboardState$Outbound,
  LeaderboardState$outboundSchema,
} from "./leaderboardstate.js";
import {
  Role,
  Role$inboundSchema,
  Role$Outbound,
  Role$outboundSchema,
} from "./role.js";

/**
 * The privacy of the account
 */
export const LeaderboardAccountPrivacy = {
  Public: "public",
  Private: "private",
  FriendsOnly: "friends_only",
} as const;
/**
 * The privacy of the account
 */
export type LeaderboardAccountPrivacy = ClosedEnum<
  typeof LeaderboardAccountPrivacy
>;

export type LeaderboardAccount = {
  /**
   * The cost of an app
   */
  appCost: number;
  /**
   * The number of apps the account has
   */
  apps: number;
  /**
   * The avatar hash of the account
   */
  avatar: string;
  /**
   * The average playtime of the account
   */
  averagePlaytime: number;
  /**
   * The number of awards the account has
   */
  awardsGiven: number;
  /**
   * The number of awards the account has
   */
  awardsReceived: number;
  /**
   * The number of badges the account has
   */
  badges: number;
  /**
   * The number of bans
   */
  bans: number;
  city?: LeaderboardCity | null | undefined;
  country?: LeaderboardCountry | null | undefined;
  /**
   * The time the account was created
   */
  createdAt: Date;
  /**
   * The total of donations the account has
   */
  donated: number;
  /**
   * The economy ban of the account
   */
  economyBan: string;
  /**
   * The cost of a foil badge
   */
  foilBadgeCost: number;
  /**
   * The number of foil badges the account has
   */
  foilBadges: number;
  /**
   * The number of friends the account has
   */
  friends: number;
  /**
   * The number of game bans
   */
  gameBans: number;
  /**
   * The level of the account
   */
  level: number;
  /**
   * The name of the account
   */
  name: string;
  /**
   * The cost of a normal badge
   */
  normalBadgeCost: number;
  /**
   * The number of normal badges the account has
   */
  normalBadges: number;
  /**
   * The playtime of the account
   */
  playtime: number;
  /**
   * The number of points the account has
   */
  pointsGiven: number;
  /**
   * The number of points the account has
   */
  pointsReceived: number;
  /**
   * The privacy of the account
   */
  privacy: LeaderboardAccountPrivacy;
  region?: LeaderboardRegion | null | undefined;
  /**
   * The roles of the account
   */
  roles: Array<Role> | null;
  state?: LeaderboardState | null | undefined;
  /**
   * The steam id
   */
  steamId: string;
  /**
   * The steam sets score
   */
  steamSetsScore: number;
  /**
   * The vanity of the account
   */
  steamSetsVanity: string;
  /**
   * The vanity of the account
   */
  steamVanity: string;
  /**
   * The number of vac bans
   */
  vacBans: number;
  /**
   * The number of xp the account has
   */
  xp: number;
};

/** @internal */
export const LeaderboardAccountPrivacy$inboundSchema: z.ZodNativeEnum<
  typeof LeaderboardAccountPrivacy
> = z.nativeEnum(LeaderboardAccountPrivacy);

/** @internal */
export const LeaderboardAccountPrivacy$outboundSchema: z.ZodNativeEnum<
  typeof LeaderboardAccountPrivacy
> = LeaderboardAccountPrivacy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeaderboardAccountPrivacy$ {
  /** @deprecated use `LeaderboardAccountPrivacy$inboundSchema` instead. */
  export const inboundSchema = LeaderboardAccountPrivacy$inboundSchema;
  /** @deprecated use `LeaderboardAccountPrivacy$outboundSchema` instead. */
  export const outboundSchema = LeaderboardAccountPrivacy$outboundSchema;
}

/** @internal */
export const LeaderboardAccount$inboundSchema: z.ZodType<
  LeaderboardAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  appCost: z.number().int(),
  apps: z.number().int(),
  avatar: z.string(),
  averagePlaytime: z.number().int(),
  awardsGiven: z.number().int(),
  awardsReceived: z.number().int(),
  badges: z.number().int(),
  bans: z.number().int(),
  city: z.nullable(LeaderboardCity$inboundSchema).optional(),
  country: z.nullable(LeaderboardCountry$inboundSchema).optional(),
  createdAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  donated: z.number().int(),
  economyBan: z.string(),
  foilBadgeCost: z.number().int(),
  foilBadges: z.number().int(),
  friends: z.number().int(),
  gameBans: z.number().int(),
  level: z.number().int(),
  name: z.string(),
  normalBadgeCost: z.number().int(),
  normalBadges: z.number().int(),
  playtime: z.number().int(),
  pointsGiven: z.number().int(),
  pointsReceived: z.number().int(),
  privacy: LeaderboardAccountPrivacy$inboundSchema,
  region: z.nullable(LeaderboardRegion$inboundSchema).optional(),
  roles: z.nullable(z.array(Role$inboundSchema)),
  state: z.nullable(LeaderboardState$inboundSchema).optional(),
  steamId: z.string(),
  steamSetsScore: z.number().int(),
  steamSetsVanity: z.string(),
  steamVanity: z.string(),
  vacBans: z.number().int(),
  xp: z.number().int(),
});

/** @internal */
export type LeaderboardAccount$Outbound = {
  appCost: number;
  apps: number;
  avatar: string;
  averagePlaytime: number;
  awardsGiven: number;
  awardsReceived: number;
  badges: number;
  bans: number;
  city?: LeaderboardCity$Outbound | null | undefined;
  country?: LeaderboardCountry$Outbound | null | undefined;
  createdAt: string;
  donated: number;
  economyBan: string;
  foilBadgeCost: number;
  foilBadges: number;
  friends: number;
  gameBans: number;
  level: number;
  name: string;
  normalBadgeCost: number;
  normalBadges: number;
  playtime: number;
  pointsGiven: number;
  pointsReceived: number;
  privacy: string;
  region?: LeaderboardRegion$Outbound | null | undefined;
  roles: Array<Role$Outbound> | null;
  state?: LeaderboardState$Outbound | null | undefined;
  steamId: string;
  steamSetsScore: number;
  steamSetsVanity: string;
  steamVanity: string;
  vacBans: number;
  xp: number;
};

/** @internal */
export const LeaderboardAccount$outboundSchema: z.ZodType<
  LeaderboardAccount$Outbound,
  z.ZodTypeDef,
  LeaderboardAccount
> = z.object({
  appCost: z.number().int(),
  apps: z.number().int(),
  avatar: z.string(),
  averagePlaytime: z.number().int(),
  awardsGiven: z.number().int(),
  awardsReceived: z.number().int(),
  badges: z.number().int(),
  bans: z.number().int(),
  city: z.nullable(LeaderboardCity$outboundSchema).optional(),
  country: z.nullable(LeaderboardCountry$outboundSchema).optional(),
  createdAt: z.date().transform(v => v.toISOString()),
  donated: z.number().int(),
  economyBan: z.string(),
  foilBadgeCost: z.number().int(),
  foilBadges: z.number().int(),
  friends: z.number().int(),
  gameBans: z.number().int(),
  level: z.number().int(),
  name: z.string(),
  normalBadgeCost: z.number().int(),
  normalBadges: z.number().int(),
  playtime: z.number().int(),
  pointsGiven: z.number().int(),
  pointsReceived: z.number().int(),
  privacy: LeaderboardAccountPrivacy$outboundSchema,
  region: z.nullable(LeaderboardRegion$outboundSchema).optional(),
  roles: z.nullable(z.array(Role$outboundSchema)),
  state: z.nullable(LeaderboardState$outboundSchema).optional(),
  steamId: z.string(),
  steamSetsScore: z.number().int(),
  steamSetsVanity: z.string(),
  steamVanity: z.string(),
  vacBans: z.number().int(),
  xp: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeaderboardAccount$ {
  /** @deprecated use `LeaderboardAccount$inboundSchema` instead. */
  export const inboundSchema = LeaderboardAccount$inboundSchema;
  /** @deprecated use `LeaderboardAccount$outboundSchema` instead. */
  export const outboundSchema = LeaderboardAccount$outboundSchema;
  /** @deprecated use `LeaderboardAccount$Outbound` instead. */
  export type Outbound = LeaderboardAccount$Outbound;
}

export function leaderboardAccountToJSON(
  leaderboardAccount: LeaderboardAccount,
): string {
  return JSON.stringify(
    LeaderboardAccount$outboundSchema.parse(leaderboardAccount),
  );
}

export function leaderboardAccountFromJSON(
  jsonString: string,
): SafeParseResult<LeaderboardAccount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeaderboardAccount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeaderboardAccount' from JSON`,
  );
}
