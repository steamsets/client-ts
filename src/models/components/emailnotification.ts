/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of email notifications
 */
export const EmailNotificationType = {
  Login: "login",
} as const;
/**
 * The type of email notifications
 */
export type EmailNotificationType = ClosedEnum<typeof EmailNotificationType>;

export type EmailNotification = {
  /**
   * Whether the email notifications are enabled or not
   */
  enabled: boolean;
  /**
   * The type of email notifications
   */
  type: EmailNotificationType;
};

/** @internal */
export const EmailNotificationType$inboundSchema: z.ZodNativeEnum<
  typeof EmailNotificationType
> = z.nativeEnum(EmailNotificationType);

/** @internal */
export const EmailNotificationType$outboundSchema: z.ZodNativeEnum<
  typeof EmailNotificationType
> = EmailNotificationType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailNotificationType$ {
  /** @deprecated use `EmailNotificationType$inboundSchema` instead. */
  export const inboundSchema = EmailNotificationType$inboundSchema;
  /** @deprecated use `EmailNotificationType$outboundSchema` instead. */
  export const outboundSchema = EmailNotificationType$outboundSchema;
}

/** @internal */
export const EmailNotification$inboundSchema: z.ZodType<
  EmailNotification,
  z.ZodTypeDef,
  unknown
> = z.object({
  enabled: z.boolean(),
  type: EmailNotificationType$inboundSchema,
});

/** @internal */
export type EmailNotification$Outbound = {
  enabled: boolean;
  type: string;
};

/** @internal */
export const EmailNotification$outboundSchema: z.ZodType<
  EmailNotification$Outbound,
  z.ZodTypeDef,
  EmailNotification
> = z.object({
  enabled: z.boolean(),
  type: EmailNotificationType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailNotification$ {
  /** @deprecated use `EmailNotification$inboundSchema` instead. */
  export const inboundSchema = EmailNotification$inboundSchema;
  /** @deprecated use `EmailNotification$outboundSchema` instead. */
  export const outboundSchema = EmailNotification$outboundSchema;
  /** @deprecated use `EmailNotification$Outbound` instead. */
  export type Outbound = EmailNotification$Outbound;
}

export function emailNotificationToJSON(
  emailNotification: EmailNotification,
): string {
  return JSON.stringify(
    EmailNotification$outboundSchema.parse(emailNotification),
  );
}

export function emailNotificationFromJSON(
  jsonString: string,
): SafeParseResult<EmailNotification, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EmailNotification$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EmailNotification' from JSON`,
  );
}
