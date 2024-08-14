/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type V1ConnectResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    dollarSchema?: string | undefined;
    /**
     * Code that has to be used to verify domain connections
     */
    code?: string | undefined;
    /**
     * Always true
     */
    success: boolean;
};

/** @internal */
export const V1ConnectResponseBody$inboundSchema: z.ZodType<
    V1ConnectResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        $schema: z.string().optional(),
        code: z.string().optional(),
        success: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            $schema: "dollarSchema",
        });
    });

/** @internal */
export type V1ConnectResponseBody$Outbound = {
    $schema?: string | undefined;
    code?: string | undefined;
    success: boolean;
};

/** @internal */
export const V1ConnectResponseBody$outboundSchema: z.ZodType<
    V1ConnectResponseBody$Outbound,
    z.ZodTypeDef,
    V1ConnectResponseBody
> = z
    .object({
        dollarSchema: z.string().optional(),
        code: z.string().optional(),
        success: z.boolean(),
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
export namespace V1ConnectResponseBody$ {
    /** @deprecated use `V1ConnectResponseBody$inboundSchema` instead. */
    export const inboundSchema = V1ConnectResponseBody$inboundSchema;
    /** @deprecated use `V1ConnectResponseBody$outboundSchema` instead. */
    export const outboundSchema = V1ConnectResponseBody$outboundSchema;
    /** @deprecated use `V1ConnectResponseBody$Outbound` instead. */
    export type Outbound = V1ConnectResponseBody$Outbound;
}
