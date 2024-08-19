/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type V1UpdateImageResponseBody = {
    /**
     * A URL to the JSON Schema for this object.
     */
    dollarSchema?: string | undefined;
    /**
     * The generated API Key
     */
    key: string;
};

/** @internal */
export const V1UpdateImageResponseBody$inboundSchema: z.ZodType<
    V1UpdateImageResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        $schema: z.string().optional(),
        key: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            $schema: "dollarSchema",
        });
    });

/** @internal */
export type V1UpdateImageResponseBody$Outbound = {
    $schema?: string | undefined;
    key: string;
};

/** @internal */
export const V1UpdateImageResponseBody$outboundSchema: z.ZodType<
    V1UpdateImageResponseBody$Outbound,
    z.ZodTypeDef,
    V1UpdateImageResponseBody
> = z
    .object({
        dollarSchema: z.string().optional(),
        key: z.string(),
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
export namespace V1UpdateImageResponseBody$ {
    /** @deprecated use `V1UpdateImageResponseBody$inboundSchema` instead. */
    export const inboundSchema = V1UpdateImageResponseBody$inboundSchema;
    /** @deprecated use `V1UpdateImageResponseBody$outboundSchema` instead. */
    export const outboundSchema = V1UpdateImageResponseBody$outboundSchema;
    /** @deprecated use `V1UpdateImageResponseBody$Outbound` instead. */
    export type Outbound = V1UpdateImageResponseBody$Outbound;
}
