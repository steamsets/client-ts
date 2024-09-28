/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  BestLeaderboardRank,
  BestLeaderboardRank$inboundSchema,
  BestLeaderboardRank$Outbound,
  BestLeaderboardRank$outboundSchema,
} from "./bestleaderboardrank.js";
import {
  Connection,
  Connection$inboundSchema,
  Connection$Outbound,
  Connection$outboundSchema,
} from "./connection.js";
import {
  Image,
  Image$inboundSchema,
  Image$Outbound,
  Image$outboundSchema,
} from "./image.js";
import {
  Location,
  Location$inboundSchema,
  Location$Outbound,
  Location$outboundSchema,
} from "./location.js";
import {
  Role,
  Role$inboundSchema,
  Role$Outbound,
  Role$outboundSchema,
} from "./role.js";

/**
 * The privacy of the account
 */
export const AppPrivacy = {
  Private: "private",
  Public: "public",
  FriendsOnly: "friends_only",
} as const;
/**
 * The privacy of the account
 */
export type AppPrivacy = ClosedEnum<typeof AppPrivacy>;

/**
 * The privacy of the account
 */
export const FriendPrivacy = {
  Private: "private",
  Public: "public",
  FriendsOnly: "friends_only",
} as const;
/**
 * The privacy of the account
 */
export type FriendPrivacy = ClosedEnum<typeof FriendPrivacy>;

/**
 * The privacy of the account
 */
export const Privacy = {
  Private: "private",
  Public: "public",
  FriendsOnly: "friends_only",
} as const;
/**
 * The privacy of the account
 */
export type Privacy = ClosedEnum<typeof Privacy>;

export type AccountInfoBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The account id
   */
  accountId: number;
  /**
   * The animated avatar of the account
   */
  animatedAvatar: string;
  /**
   * The cost of an app
   */
  appCost: number;
  /**
   * The privacy of the account
   */
  appPrivacy: AppPrivacy;
  /**
   * The number of apps the account has
   */
  apps: number;
  /**
   * The time the apps were updated
   */
  appsUpdatedAt: Date | null;
  /**
   * The avatar hash of the account
   */
  avatar: string;
  /**
   * The avatar frame of the account
   */
  avatarFrame: string;
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
   * The background of the account
   */
  background: string;
  /**
   * The number of badges the account has
   */
  badges: number;
  /**
   * The time the badges were updated
   */
  badgesUpdatedAt: Date | null;
  /**
   * The number of bans
   */
  bans: number;
  /**
   * The time the bans were updated
   */
  bansUpdatedAt: Date | null;
  city?: Location | null | undefined;
  /**
   * If the account is community banned or not
   */
  communityBan: boolean;
  /**
   * The connections of the account
   */
  connections: Array<Connection> | null;
  country?: Location | null | undefined;
  /**
   * The time the account was created
   */
  createdAt: Date | null;
  /**
   * The current best ranks
   */
  currentBestRanks: Array<BestLeaderboardRank> | null;
  /**
   * The current ranks
   */
  currentRanks: Array<BestLeaderboardRank> | null;
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
   * The privacy of the account
   */
  friendPrivacy: FriendPrivacy;
  /**
   * The number of friends the account has
   */
  friends: number;
  /**
   * The time the friends were updated
   */
  friendsUpdatedAt: Date | null;
  /**
   * The number of game bans
   */
  gameBans: number;
  /**
   * Whether the account is hidden in the leaderboards
   */
  hidden: boolean;
  /**
   * The images of the account
   */
  images: Array<Image> | null;
  /**
   * The Last date the account got a ban on
   */
  lastBanDate: Date | null;
  /**
   * The level of the account
   */
  level: number;
  /**
   * The number of limited apps the account has
   */
  limitedApps: number;
  /**
   * The mini background of the account
   */
  miniBackground: string;
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
  privacy: Privacy;
  region?: Location | null | undefined;
  /**
   * The roles of the account
   */
  roles: Array<Role> | null;
  state?: Location | null | undefined;
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
   * The theme of the account
   */
  theme: string;
  /**
   * The time the account was updated
   */
  updatedAt: Date | null;
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
export const AppPrivacy$inboundSchema: z.ZodNativeEnum<typeof AppPrivacy> = z
  .nativeEnum(AppPrivacy);

/** @internal */
export const AppPrivacy$outboundSchema: z.ZodNativeEnum<typeof AppPrivacy> =
  AppPrivacy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppPrivacy$ {
  /** @deprecated use `AppPrivacy$inboundSchema` instead. */
  export const inboundSchema = AppPrivacy$inboundSchema;
  /** @deprecated use `AppPrivacy$outboundSchema` instead. */
  export const outboundSchema = AppPrivacy$outboundSchema;
}

/** @internal */
export const FriendPrivacy$inboundSchema: z.ZodNativeEnum<
  typeof FriendPrivacy
> = z.nativeEnum(FriendPrivacy);

/** @internal */
export const FriendPrivacy$outboundSchema: z.ZodNativeEnum<
  typeof FriendPrivacy
> = FriendPrivacy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FriendPrivacy$ {
  /** @deprecated use `FriendPrivacy$inboundSchema` instead. */
  export const inboundSchema = FriendPrivacy$inboundSchema;
  /** @deprecated use `FriendPrivacy$outboundSchema` instead. */
  export const outboundSchema = FriendPrivacy$outboundSchema;
}

/** @internal */
export const Privacy$inboundSchema: z.ZodNativeEnum<typeof Privacy> = z
  .nativeEnum(Privacy);

/** @internal */
export const Privacy$outboundSchema: z.ZodNativeEnum<typeof Privacy> =
  Privacy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Privacy$ {
  /** @deprecated use `Privacy$inboundSchema` instead. */
  export const inboundSchema = Privacy$inboundSchema;
  /** @deprecated use `Privacy$outboundSchema` instead. */
  export const outboundSchema = Privacy$outboundSchema;
}

/** @internal */
export const AccountInfoBody$inboundSchema: z.ZodType<
  AccountInfoBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  accountId: z.number().int(),
  animatedAvatar: z.string(),
  appCost: z.number().int(),
  appPrivacy: AppPrivacy$inboundSchema,
  apps: z.number().int(),
  appsUpdatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  avatar: z.string(),
  avatarFrame: z.string(),
  averagePlaytime: z.number().int(),
  awardsGiven: z.number().int(),
  awardsReceived: z.number().int(),
  background: z.string(),
  badges: z.number().int(),
  badgesUpdatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  bans: z.number().int(),
  bansUpdatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  city: z.nullable(Location$inboundSchema).optional(),
  communityBan: z.boolean(),
  connections: z.nullable(z.array(Connection$inboundSchema)),
  country: z.nullable(Location$inboundSchema).optional(),
  createdAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  currentBestRanks: z.nullable(z.array(BestLeaderboardRank$inboundSchema)),
  currentRanks: z.nullable(z.array(BestLeaderboardRank$inboundSchema)),
  economyBan: z.string(),
  foilBadgeCost: z.number().int(),
  foilBadges: z.number().int(),
  friendPrivacy: FriendPrivacy$inboundSchema,
  friends: z.number().int(),
  friendsUpdatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  gameBans: z.number().int(),
  hidden: z.boolean(),
  images: z.nullable(z.array(Image$inboundSchema)),
  lastBanDate: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  level: z.number().int(),
  limitedApps: z.number().int(),
  miniBackground: z.string(),
  name: z.string(),
  normalBadgeCost: z.number().int(),
  normalBadges: z.number().int(),
  playtime: z.number().int(),
  pointsGiven: z.number().int(),
  pointsReceived: z.number().int(),
  privacy: Privacy$inboundSchema,
  region: z.nullable(Location$inboundSchema).optional(),
  roles: z.nullable(z.array(Role$inboundSchema)),
  state: z.nullable(Location$inboundSchema).optional(),
  steamId: z.string(),
  steamSetsScore: z.number().int(),
  steamSetsVanity: z.string(),
  steamVanity: z.string(),
  theme: z.string(),
  updatedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  vacBans: z.number().int(),
  xp: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type AccountInfoBody$Outbound = {
  $schema?: string | undefined;
  accountId: number;
  animatedAvatar: string;
  appCost: number;
  appPrivacy: string;
  apps: number;
  appsUpdatedAt: string | null;
  avatar: string;
  avatarFrame: string;
  averagePlaytime: number;
  awardsGiven: number;
  awardsReceived: number;
  background: string;
  badges: number;
  badgesUpdatedAt: string | null;
  bans: number;
  bansUpdatedAt: string | null;
  city?: Location$Outbound | null | undefined;
  communityBan: boolean;
  connections: Array<Connection$Outbound> | null;
  country?: Location$Outbound | null | undefined;
  createdAt: string | null;
  currentBestRanks: Array<BestLeaderboardRank$Outbound> | null;
  currentRanks: Array<BestLeaderboardRank$Outbound> | null;
  economyBan: string;
  foilBadgeCost: number;
  foilBadges: number;
  friendPrivacy: string;
  friends: number;
  friendsUpdatedAt: string | null;
  gameBans: number;
  hidden: boolean;
  images: Array<Image$Outbound> | null;
  lastBanDate: string | null;
  level: number;
  limitedApps: number;
  miniBackground: string;
  name: string;
  normalBadgeCost: number;
  normalBadges: number;
  playtime: number;
  pointsGiven: number;
  pointsReceived: number;
  privacy: string;
  region?: Location$Outbound | null | undefined;
  roles: Array<Role$Outbound> | null;
  state?: Location$Outbound | null | undefined;
  steamId: string;
  steamSetsScore: number;
  steamSetsVanity: string;
  steamVanity: string;
  theme: string;
  updatedAt: string | null;
  vacBans: number;
  xp: number;
};

/** @internal */
export const AccountInfoBody$outboundSchema: z.ZodType<
  AccountInfoBody$Outbound,
  z.ZodTypeDef,
  AccountInfoBody
> = z.object({
  dollarSchema: z.string().optional(),
  accountId: z.number().int(),
  animatedAvatar: z.string(),
  appCost: z.number().int(),
  appPrivacy: AppPrivacy$outboundSchema,
  apps: z.number().int(),
  appsUpdatedAt: z.nullable(z.date().transform(v => v.toISOString())),
  avatar: z.string(),
  avatarFrame: z.string(),
  averagePlaytime: z.number().int(),
  awardsGiven: z.number().int(),
  awardsReceived: z.number().int(),
  background: z.string(),
  badges: z.number().int(),
  badgesUpdatedAt: z.nullable(z.date().transform(v => v.toISOString())),
  bans: z.number().int(),
  bansUpdatedAt: z.nullable(z.date().transform(v => v.toISOString())),
  city: z.nullable(Location$outboundSchema).optional(),
  communityBan: z.boolean(),
  connections: z.nullable(z.array(Connection$outboundSchema)),
  country: z.nullable(Location$outboundSchema).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())),
  currentBestRanks: z.nullable(z.array(BestLeaderboardRank$outboundSchema)),
  currentRanks: z.nullable(z.array(BestLeaderboardRank$outboundSchema)),
  economyBan: z.string(),
  foilBadgeCost: z.number().int(),
  foilBadges: z.number().int(),
  friendPrivacy: FriendPrivacy$outboundSchema,
  friends: z.number().int(),
  friendsUpdatedAt: z.nullable(z.date().transform(v => v.toISOString())),
  gameBans: z.number().int(),
  hidden: z.boolean(),
  images: z.nullable(z.array(Image$outboundSchema)),
  lastBanDate: z.nullable(z.date().transform(v => v.toISOString())),
  level: z.number().int(),
  limitedApps: z.number().int(),
  miniBackground: z.string(),
  name: z.string(),
  normalBadgeCost: z.number().int(),
  normalBadges: z.number().int(),
  playtime: z.number().int(),
  pointsGiven: z.number().int(),
  pointsReceived: z.number().int(),
  privacy: Privacy$outboundSchema,
  region: z.nullable(Location$outboundSchema).optional(),
  roles: z.nullable(z.array(Role$outboundSchema)),
  state: z.nullable(Location$outboundSchema).optional(),
  steamId: z.string(),
  steamSetsScore: z.number().int(),
  steamSetsVanity: z.string(),
  steamVanity: z.string(),
  theme: z.string(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())),
  vacBans: z.number().int(),
  xp: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountInfoBody$ {
  /** @deprecated use `AccountInfoBody$inboundSchema` instead. */
  export const inboundSchema = AccountInfoBody$inboundSchema;
  /** @deprecated use `AccountInfoBody$outboundSchema` instead. */
  export const outboundSchema = AccountInfoBody$outboundSchema;
  /** @deprecated use `AccountInfoBody$Outbound` instead. */
  export type Outbound = AccountInfoBody$Outbound;
}
