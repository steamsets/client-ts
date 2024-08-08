/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type V1App = {
    /**
     * The Steam App ID
     */
    id: number;
    /**
     * The App's image URL
     */
    image: string;
    /**
     * The App's name
     */
    name: string;
    /**
     * The Account's playtime in the App
     */
    playtime: number;
    /**
     * How much the app costs
     */
    price: number;
    /**
     * The App's short name
     */
    shortName: string;
};

/** @internal */
export const V1App$inboundSchema: z.ZodType<V1App, z.ZodTypeDef, unknown> = z.object({
    id: z.number().int(),
    image: z.string(),
    name: z.string(),
    playtime: z.number().int(),
    price: z.number().int(),
    shortName: z.string(),
});

/** @internal */
export type V1App$Outbound = {
    id: number;
    image: string;
    name: string;
    playtime: number;
    price: number;
    shortName: string;
};

/** @internal */
export const V1App$outboundSchema: z.ZodType<V1App$Outbound, z.ZodTypeDef, V1App> = z.object({
    id: z.number().int(),
    image: z.string(),
    name: z.string(),
    playtime: z.number().int(),
    price: z.number().int(),
    shortName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1App$ {
    /** @deprecated use `V1App$inboundSchema` instead. */
    export const inboundSchema = V1App$inboundSchema;
    /** @deprecated use `V1App$outboundSchema` instead. */
    export const outboundSchema = V1App$outboundSchema;
    /** @deprecated use `V1App$Outbound` instead. */
    export type Outbound = V1App$Outbound;
}
