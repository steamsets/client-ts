/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  Connection,
  Connection$inboundSchema,
  Connection$Outbound,
  Connection$outboundSchema,
} from "./connection.js";
import {
  DeveloperApp,
  DeveloperApp$inboundSchema,
  DeveloperApp$Outbound,
  DeveloperApp$outboundSchema,
} from "./developerapp.js";
import {
  EmailNotification,
  EmailNotification$inboundSchema,
  EmailNotification$Outbound,
  EmailNotification$outboundSchema,
} from "./emailnotification.js";
import {
  Image,
  Image$inboundSchema,
  Image$Outbound,
  Image$outboundSchema,
} from "./image.js";
import {
  Session,
  Session$inboundSchema,
  Session$Outbound,
  Session$outboundSchema,
} from "./session.js";
import {
  V1VanityAnalytics,
  V1VanityAnalytics$inboundSchema,
  V1VanityAnalytics$Outbound,
  V1VanityAnalytics$outboundSchema,
} from "./v1vanityanalytics.js";

/**
 * The theme the account is using
 */
export const Theme = {
  Dark: "dark",
  Light: "light",
} as const;
/**
 * The theme the account is using
 */
export type Theme = ClosedEnum<typeof Theme>;

export type V1GetSettingsBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The color the account is using
   */
  color: string;
  /**
   * The colors the account is using
   */
  colors: string;
  /**
   * The connections the account has
   */
  connections: Array<Connection> | null;
  /**
   * The developer apps the account has
   */
  developerApps: Array<DeveloperApp> | null;
  /**
   * The email the account is using
   */
  email: string;
  /**
   * The email notifications the account has
   */
  emailNotifications: Array<EmailNotification> | null;
  /**
   * The time the email was verified
   */
  emailVerifiedAt: Date | null;
  /**
   * Whether the account is hidden in the leaderboards
   */
  hidden: boolean;
  /**
   * The images the account has
   */
  images: Array<Image> | null;
  /**
   * The language the account is using
   */
  language: string;
  /**
   * The sessions the account has
   */
  sessions: Array<Session> | null;
  /**
   * The theme the account is using
   */
  theme: Theme;
  /**
   * The vanity the account is using
   */
  vanity: string;
  vanityAnalytics: V1VanityAnalytics | null;
};

/** @internal */
export const Theme$inboundSchema: z.ZodNativeEnum<typeof Theme> = z.nativeEnum(
  Theme,
);

/** @internal */
export const Theme$outboundSchema: z.ZodNativeEnum<typeof Theme> =
  Theme$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Theme$ {
  /** @deprecated use `Theme$inboundSchema` instead. */
  export const inboundSchema = Theme$inboundSchema;
  /** @deprecated use `Theme$outboundSchema` instead. */
  export const outboundSchema = Theme$outboundSchema;
}

/** @internal */
export const V1GetSettingsBody$inboundSchema: z.ZodType<
  V1GetSettingsBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  color: z.string(),
  colors: z.string(),
  connections: z.nullable(z.array(Connection$inboundSchema)),
  developerApps: z.nullable(z.array(DeveloperApp$inboundSchema)),
  email: z.string(),
  emailNotifications: z.nullable(z.array(EmailNotification$inboundSchema)),
  emailVerifiedAt: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  hidden: z.boolean(),
  images: z.nullable(z.array(Image$inboundSchema)),
  language: z.string(),
  sessions: z.nullable(z.array(Session$inboundSchema)),
  theme: Theme$inboundSchema,
  vanity: z.string(),
  vanityAnalytics: z.nullable(V1VanityAnalytics$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1GetSettingsBody$Outbound = {
  $schema?: string | undefined;
  color: string;
  colors: string;
  connections: Array<Connection$Outbound> | null;
  developerApps: Array<DeveloperApp$Outbound> | null;
  email: string;
  emailNotifications: Array<EmailNotification$Outbound> | null;
  emailVerifiedAt: string | null;
  hidden: boolean;
  images: Array<Image$Outbound> | null;
  language: string;
  sessions: Array<Session$Outbound> | null;
  theme: string;
  vanity: string;
  vanityAnalytics: V1VanityAnalytics$Outbound | null;
};

/** @internal */
export const V1GetSettingsBody$outboundSchema: z.ZodType<
  V1GetSettingsBody$Outbound,
  z.ZodTypeDef,
  V1GetSettingsBody
> = z.object({
  dollarSchema: z.string().optional(),
  color: z.string(),
  colors: z.string(),
  connections: z.nullable(z.array(Connection$outboundSchema)),
  developerApps: z.nullable(z.array(DeveloperApp$outboundSchema)),
  email: z.string(),
  emailNotifications: z.nullable(z.array(EmailNotification$outboundSchema)),
  emailVerifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  hidden: z.boolean(),
  images: z.nullable(z.array(Image$outboundSchema)),
  language: z.string(),
  sessions: z.nullable(z.array(Session$outboundSchema)),
  theme: Theme$outboundSchema,
  vanity: z.string(),
  vanityAnalytics: z.nullable(V1VanityAnalytics$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1GetSettingsBody$ {
  /** @deprecated use `V1GetSettingsBody$inboundSchema` instead. */
  export const inboundSchema = V1GetSettingsBody$inboundSchema;
  /** @deprecated use `V1GetSettingsBody$outboundSchema` instead. */
  export const outboundSchema = V1GetSettingsBody$outboundSchema;
  /** @deprecated use `V1GetSettingsBody$Outbound` instead. */
  export type Outbound = V1GetSettingsBody$Outbound;
}
