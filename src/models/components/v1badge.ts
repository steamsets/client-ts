/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V1Badge = {
    appId: number;
    appImage: string;
    appName: string;
    appShortName: string;
    badgeImage: string;
    completedAt: Date;
    isFoil: boolean;
    level: number;
    name: string;
    price: number;
    publicId: string;
    scarcity: number;
    steamId: number;
    xp: number;
};

/** @internal */
export const V1Badge$inboundSchema: z.ZodType<V1Badge, z.ZodTypeDef, unknown> = z.object({
    appId: z.number().int(),
    appImage: z.string(),
    appName: z.string(),
    appShortName: z.string(),
    badgeImage: z.string(),
    completedAt: z
        .string()
        .datetime({ offset: true })
        .transform((v) => new Date(v)),
    isFoil: z.boolean(),
    level: z.number().int(),
    name: z.string(),
    price: z.number().int(),
    publicId: z.string(),
    scarcity: z.number().int(),
    steamId: z.number().int(),
    xp: z.number().int(),
});

/** @internal */
export type V1Badge$Outbound = {
    appId: number;
    appImage: string;
    appName: string;
    appShortName: string;
    badgeImage: string;
    completedAt: string;
    isFoil: boolean;
    level: number;
    name: string;
    price: number;
    publicId: string;
    scarcity: number;
    steamId: number;
    xp: number;
};

/** @internal */
export const V1Badge$outboundSchema: z.ZodType<V1Badge$Outbound, z.ZodTypeDef, V1Badge> = z.object({
    appId: z.number().int(),
    appImage: z.string(),
    appName: z.string(),
    appShortName: z.string(),
    badgeImage: z.string(),
    completedAt: z.date().transform((v) => v.toISOString()),
    isFoil: z.boolean(),
    level: z.number().int(),
    name: z.string(),
    price: z.number().int(),
    publicId: z.string(),
    scarcity: z.number().int(),
    steamId: z.number().int(),
    xp: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1Badge$ {
    /** @deprecated use `V1Badge$inboundSchema` instead. */
    export const inboundSchema = V1Badge$inboundSchema;
    /** @deprecated use `V1Badge$outboundSchema` instead. */
    export const outboundSchema = V1Badge$outboundSchema;
    /** @deprecated use `V1Badge$Outbound` instead. */
    export type Outbound = V1Badge$Outbound;
}
