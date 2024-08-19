/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import {
    EmailNotification,
    EmailNotification$inboundSchema,
    EmailNotification$Outbound,
    EmailNotification$outboundSchema,
} from "./emailnotification.js";
import * as z from "zod";

/**
 * The theme the account should use, only if the account is private
 */
export const V1UpdateSettingsRequestBodyTheme = {
    Dark: "dark",
    Light: "light",
} as const;
/**
 * The theme the account should use, only if the account is private
 */
export type V1UpdateSettingsRequestBodyTheme = ClosedEnum<typeof V1UpdateSettingsRequestBodyTheme>;

export type V1UpdateSettingsRequestBody = {
    /**
     * The color the account should use, only if the account is private
     */
    color: string;
    /**
     * The colors the account should use, only if the account is private
     */
    colors: string;
    /**
     * The email the account should use, only if the account is private
     */
    email: string;
    /**
     * The email notifications the account wants
     */
    emailNotifications: Array<EmailNotification> | null;
    /**
     * Whether the account should be hidden in the leaderboards, only possible if the account is private
     */
    hidden: boolean;
    /**
     * The language the account should use, only if the account is private
     */
    language: string;
    /**
     * The theme the account should use, only if the account is private
     */
    theme: V1UpdateSettingsRequestBodyTheme;
    /**
     * The vanity the account should use, only if the account is private
     */
    vanity: string;
};

/** @internal */
export const V1UpdateSettingsRequestBodyTheme$inboundSchema: z.ZodNativeEnum<
    typeof V1UpdateSettingsRequestBodyTheme
> = z.nativeEnum(V1UpdateSettingsRequestBodyTheme);

/** @internal */
export const V1UpdateSettingsRequestBodyTheme$outboundSchema: z.ZodNativeEnum<
    typeof V1UpdateSettingsRequestBodyTheme
> = V1UpdateSettingsRequestBodyTheme$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1UpdateSettingsRequestBodyTheme$ {
    /** @deprecated use `V1UpdateSettingsRequestBodyTheme$inboundSchema` instead. */
    export const inboundSchema = V1UpdateSettingsRequestBodyTheme$inboundSchema;
    /** @deprecated use `V1UpdateSettingsRequestBodyTheme$outboundSchema` instead. */
    export const outboundSchema = V1UpdateSettingsRequestBodyTheme$outboundSchema;
}

/** @internal */
export const V1UpdateSettingsRequestBody$inboundSchema: z.ZodType<
    V1UpdateSettingsRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    color: z.string(),
    colors: z.string(),
    email: z.string(),
    emailNotifications: z.nullable(z.array(EmailNotification$inboundSchema)),
    hidden: z.boolean(),
    language: z.string(),
    theme: V1UpdateSettingsRequestBodyTheme$inboundSchema,
    vanity: z.string(),
});

/** @internal */
export type V1UpdateSettingsRequestBody$Outbound = {
    color: string;
    colors: string;
    email: string;
    emailNotifications: Array<EmailNotification$Outbound> | null;
    hidden: boolean;
    language: string;
    theme: string;
    vanity: string;
};

/** @internal */
export const V1UpdateSettingsRequestBody$outboundSchema: z.ZodType<
    V1UpdateSettingsRequestBody$Outbound,
    z.ZodTypeDef,
    V1UpdateSettingsRequestBody
> = z.object({
    color: z.string(),
    colors: z.string(),
    email: z.string(),
    emailNotifications: z.nullable(z.array(EmailNotification$outboundSchema)),
    hidden: z.boolean(),
    language: z.string(),
    theme: V1UpdateSettingsRequestBodyTheme$outboundSchema,
    vanity: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1UpdateSettingsRequestBody$ {
    /** @deprecated use `V1UpdateSettingsRequestBody$inboundSchema` instead. */
    export const inboundSchema = V1UpdateSettingsRequestBody$inboundSchema;
    /** @deprecated use `V1UpdateSettingsRequestBody$outboundSchema` instead. */
    export const outboundSchema = V1UpdateSettingsRequestBody$outboundSchema;
    /** @deprecated use `V1UpdateSettingsRequestBody$Outbound` instead. */
    export type Outbound = V1UpdateSettingsRequestBody$Outbound;
}
