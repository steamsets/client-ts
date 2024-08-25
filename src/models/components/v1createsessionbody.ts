/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type V1CreateSessionBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    dollarSchema?: string | undefined;
    /**
     * The session id
     */
    sessionId: string;
};

/** @internal */
export const V1CreateSessionBody$inboundSchema: z.ZodType<
    V1CreateSessionBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        $schema: z.string().optional(),
        sessionId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            $schema: "dollarSchema",
        });
    });

/** @internal */
export type V1CreateSessionBody$Outbound = {
    $schema?: string | undefined;
    sessionId: string;
};

/** @internal */
export const V1CreateSessionBody$outboundSchema: z.ZodType<
    V1CreateSessionBody$Outbound,
    z.ZodTypeDef,
    V1CreateSessionBody
> = z
    .object({
        dollarSchema: z.string().optional(),
        sessionId: z.string(),
    })
    .transform((v) => {
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
