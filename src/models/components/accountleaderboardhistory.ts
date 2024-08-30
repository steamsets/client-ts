/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const AccountLeaderboardHistoryLeaderboard = {
    Apps: "apps",
    LimitedApps: "limited_apps",
    AwardsGiven: "awards_given",
    AwardsReceived: "awards_received",
    Bans: "bans",
    GameBans: "game_bans",
    VacBans: "vac_bans",
    FoilBadges: "foil_badges",
    NormalBadges: "normal_badges",
    Badges: "badges",
    Playtime: "playtime",
    PointsGiven: "points_given",
    PointsReceived: "points_received",
    SteamSets: "steam_sets",
    Xp: "xp",
} as const;
export type AccountLeaderboardHistoryLeaderboard = ClosedEnum<
    typeof AccountLeaderboardHistoryLeaderboard
>;

export type AccountLeaderboardHistory = {
    date: Date;
    leaderboard: AccountLeaderboardHistoryLeaderboard;
    rank: number;
    score: number;
};

/** @internal */
export const AccountLeaderboardHistoryLeaderboard$inboundSchema: z.ZodNativeEnum<
    typeof AccountLeaderboardHistoryLeaderboard
> = z.nativeEnum(AccountLeaderboardHistoryLeaderboard);

/** @internal */
export const AccountLeaderboardHistoryLeaderboard$outboundSchema: z.ZodNativeEnum<
    typeof AccountLeaderboardHistoryLeaderboard
> = AccountLeaderboardHistoryLeaderboard$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountLeaderboardHistoryLeaderboard$ {
    /** @deprecated use `AccountLeaderboardHistoryLeaderboard$inboundSchema` instead. */
    export const inboundSchema = AccountLeaderboardHistoryLeaderboard$inboundSchema;
    /** @deprecated use `AccountLeaderboardHistoryLeaderboard$outboundSchema` instead. */
    export const outboundSchema = AccountLeaderboardHistoryLeaderboard$outboundSchema;
}

/** @internal */
export const AccountLeaderboardHistory$inboundSchema: z.ZodType<
    AccountLeaderboardHistory,
    z.ZodTypeDef,
    unknown
> = z.object({
    date: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    leaderboard: AccountLeaderboardHistoryLeaderboard$inboundSchema,
    rank: z.number().int(),
    score: z.number().int(),
});

/** @internal */
export type AccountLeaderboardHistory$Outbound = {
    date: string;
    leaderboard: string;
    rank: number;
    score: number;
};

/** @internal */
export const AccountLeaderboardHistory$outboundSchema: z.ZodType<
    AccountLeaderboardHistory$Outbound,
    z.ZodTypeDef,
    AccountLeaderboardHistory
> = z.object({
    date: z.date().transform((v) => v.toISOString()),
    leaderboard: AccountLeaderboardHistoryLeaderboard$outboundSchema,
    rank: z.number().int(),
    score: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountLeaderboardHistory$ {
    /** @deprecated use `AccountLeaderboardHistory$inboundSchema` instead. */
    export const inboundSchema = AccountLeaderboardHistory$inboundSchema;
    /** @deprecated use `AccountLeaderboardHistory$outboundSchema` instead. */
    export const outboundSchema = AccountLeaderboardHistory$outboundSchema;
    /** @deprecated use `AccountLeaderboardHistory$Outbound` instead. */
    export type Outbound = AccountLeaderboardHistory$Outbound;
}
