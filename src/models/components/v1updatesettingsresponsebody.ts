/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type V1UpdateSettingsResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    dollarSchema?: string | undefined;
};

/** @internal */
export const V1UpdateSettingsResponseBody$inboundSchema: z.ZodType<
    V1UpdateSettingsResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        $schema: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            $schema: "dollarSchema",
        });
    });

/** @internal */
export type V1UpdateSettingsResponseBody$Outbound = {
    $schema?: string | undefined;
};

/** @internal */
export const V1UpdateSettingsResponseBody$outboundSchema: z.ZodType<
    V1UpdateSettingsResponseBody$Outbound,
    z.ZodTypeDef,
    V1UpdateSettingsResponseBody
> = z
    .object({
        dollarSchema: z.string().optional(),
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
export namespace V1UpdateSettingsResponseBody$ {
    /** @deprecated use `V1UpdateSettingsResponseBody$inboundSchema` instead. */
    export const inboundSchema = V1UpdateSettingsResponseBody$inboundSchema;
    /** @deprecated use `V1UpdateSettingsResponseBody$outboundSchema` instead. */
    export const outboundSchema = V1UpdateSettingsResponseBody$outboundSchema;
    /** @deprecated use `V1UpdateSettingsResponseBody$Outbound` instead. */
    export type Outbound = V1UpdateSettingsResponseBody$Outbound;
}
