/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The environment of the developer app
 */
export const DeveloperAppEnvironment = {
  Production: "production",
  Development: "development",
  Staging: "staging",
} as const;
/**
 * The environment of the developer app
 */
export type DeveloperAppEnvironment = ClosedEnum<
  typeof DeveloperAppEnvironment
>;

export type DeveloperApp = {
  /**
   * The api key of the developer app
   */
  apiKey: string | null;
  /**
   * The description of the developer app
   */
  description: string;
  /**
   * The environment of the developer app
   */
  environment: DeveloperAppEnvironment;
  /**
   * The icon of the developer app
   */
  icon: string | null;
  /**
   * The id of the developer app
   */
  id: string;
  /**
   * The name of the developer app
   */
  name: string;
};

/** @internal */
export const DeveloperAppEnvironment$inboundSchema: z.ZodNativeEnum<
  typeof DeveloperAppEnvironment
> = z.nativeEnum(DeveloperAppEnvironment);

/** @internal */
export const DeveloperAppEnvironment$outboundSchema: z.ZodNativeEnum<
  typeof DeveloperAppEnvironment
> = DeveloperAppEnvironment$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeveloperAppEnvironment$ {
  /** @deprecated use `DeveloperAppEnvironment$inboundSchema` instead. */
  export const inboundSchema = DeveloperAppEnvironment$inboundSchema;
  /** @deprecated use `DeveloperAppEnvironment$outboundSchema` instead. */
  export const outboundSchema = DeveloperAppEnvironment$outboundSchema;
}

/** @internal */
export const DeveloperApp$inboundSchema: z.ZodType<
  DeveloperApp,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.nullable(z.string()),
  description: z.string(),
  environment: DeveloperAppEnvironment$inboundSchema,
  icon: z.nullable(z.string()),
  id: z.string(),
  name: z.string(),
});

/** @internal */
export type DeveloperApp$Outbound = {
  apiKey: string | null;
  description: string;
  environment: string;
  icon: string | null;
  id: string;
  name: string;
};

/** @internal */
export const DeveloperApp$outboundSchema: z.ZodType<
  DeveloperApp$Outbound,
  z.ZodTypeDef,
  DeveloperApp
> = z.object({
  apiKey: z.nullable(z.string()),
  description: z.string(),
  environment: DeveloperAppEnvironment$outboundSchema,
  icon: z.nullable(z.string()),
  id: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeveloperApp$ {
  /** @deprecated use `DeveloperApp$inboundSchema` instead. */
  export const inboundSchema = DeveloperApp$inboundSchema;
  /** @deprecated use `DeveloperApp$outboundSchema` instead. */
  export const outboundSchema = DeveloperApp$outboundSchema;
  /** @deprecated use `DeveloperApp$Outbound` instead. */
  export type Outbound = DeveloperApp$Outbound;
}
