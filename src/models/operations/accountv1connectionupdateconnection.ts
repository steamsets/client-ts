/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AccountV1ConnectionUpdateConnectionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    v1UpdateConnectionResponseBody?: components.V1UpdateConnectionResponseBody | undefined;
};

/** @internal */
export const AccountV1ConnectionUpdateConnectionResponse$inboundSchema: z.ZodType<
    AccountV1ConnectionUpdateConnectionResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        V1UpdateConnectionResponseBody:
            components.V1UpdateConnectionResponseBody$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            V1UpdateConnectionResponseBody: "v1UpdateConnectionResponseBody",
        });
    });

/** @internal */
export type AccountV1ConnectionUpdateConnectionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    V1UpdateConnectionResponseBody?: components.V1UpdateConnectionResponseBody$Outbound | undefined;
};

/** @internal */
export const AccountV1ConnectionUpdateConnectionResponse$outboundSchema: z.ZodType<
    AccountV1ConnectionUpdateConnectionResponse$Outbound,
    z.ZodTypeDef,
    AccountV1ConnectionUpdateConnectionResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        v1UpdateConnectionResponseBody:
            components.V1UpdateConnectionResponseBody$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            v1UpdateConnectionResponseBody: "V1UpdateConnectionResponseBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1ConnectionUpdateConnectionResponse$ {
    /** @deprecated use `AccountV1ConnectionUpdateConnectionResponse$inboundSchema` instead. */
    export const inboundSchema = AccountV1ConnectionUpdateConnectionResponse$inboundSchema;
    /** @deprecated use `AccountV1ConnectionUpdateConnectionResponse$outboundSchema` instead. */
    export const outboundSchema = AccountV1ConnectionUpdateConnectionResponse$outboundSchema;
    /** @deprecated use `AccountV1ConnectionUpdateConnectionResponse$Outbound` instead. */
    export type Outbound = AccountV1ConnectionUpdateConnectionResponse$Outbound;
}
