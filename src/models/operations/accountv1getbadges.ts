/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AccountV1GetBadgesRequest = {
    xForwardedFor?: string | undefined;
    accountSearch: components.AccountSearch;
};

export type AccountV1GetBadgesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    v1BadgesResponseBody?: components.V1BadgesResponseBody | undefined;
};

/** @internal */
export const AccountV1GetBadgesRequest$inboundSchema: z.ZodType<
    AccountV1GetBadgesRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        "X-Forwarded-For": z.string().optional(),
        AccountSearch: components.AccountSearch$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "X-Forwarded-For": "xForwardedFor",
            AccountSearch: "accountSearch",
        });
    });

/** @internal */
export type AccountV1GetBadgesRequest$Outbound = {
    "X-Forwarded-For"?: string | undefined;
    AccountSearch: components.AccountSearch$Outbound;
};

/** @internal */
export const AccountV1GetBadgesRequest$outboundSchema: z.ZodType<
    AccountV1GetBadgesRequest$Outbound,
    z.ZodTypeDef,
    AccountV1GetBadgesRequest
> = z
    .object({
        xForwardedFor: z.string().optional(),
        accountSearch: components.AccountSearch$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            xForwardedFor: "X-Forwarded-For",
            accountSearch: "AccountSearch",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1GetBadgesRequest$ {
    /** @deprecated use `AccountV1GetBadgesRequest$inboundSchema` instead. */
    export const inboundSchema = AccountV1GetBadgesRequest$inboundSchema;
    /** @deprecated use `AccountV1GetBadgesRequest$outboundSchema` instead. */
    export const outboundSchema = AccountV1GetBadgesRequest$outboundSchema;
    /** @deprecated use `AccountV1GetBadgesRequest$Outbound` instead. */
    export type Outbound = AccountV1GetBadgesRequest$Outbound;
}

/** @internal */
export const AccountV1GetBadgesResponse$inboundSchema: z.ZodType<
    AccountV1GetBadgesResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        HttpMeta: components.HTTPMetadata$inboundSchema,
        V1BadgesResponseBody: components.V1BadgesResponseBody$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            HttpMeta: "httpMeta",
            V1BadgesResponseBody: "v1BadgesResponseBody",
        });
    });

/** @internal */
export type AccountV1GetBadgesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    V1BadgesResponseBody?: components.V1BadgesResponseBody$Outbound | undefined;
};

/** @internal */
export const AccountV1GetBadgesResponse$outboundSchema: z.ZodType<
    AccountV1GetBadgesResponse$Outbound,
    z.ZodTypeDef,
    AccountV1GetBadgesResponse
> = z
    .object({
        httpMeta: components.HTTPMetadata$outboundSchema,
        v1BadgesResponseBody: components.V1BadgesResponseBody$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            httpMeta: "HttpMeta",
            v1BadgesResponseBody: "V1BadgesResponseBody",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1GetBadgesResponse$ {
    /** @deprecated use `AccountV1GetBadgesResponse$inboundSchema` instead. */
    export const inboundSchema = AccountV1GetBadgesResponse$inboundSchema;
    /** @deprecated use `AccountV1GetBadgesResponse$outboundSchema` instead. */
    export const outboundSchema = AccountV1GetBadgesResponse$outboundSchema;
    /** @deprecated use `AccountV1GetBadgesResponse$Outbound` instead. */
    export type Outbound = AccountV1GetBadgesResponse$Outbound;
}
