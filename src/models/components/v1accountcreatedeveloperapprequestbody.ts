/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The environment to create the app for
 */
export const Environment = {
  Production: "production",
  Development: "development",
  Staging: "staging",
} as const;
/**
 * The environment to create the app for
 */
export type Environment = ClosedEnum<typeof Environment>;

export type V1AccountCreateDeveloperAppRequestBody = {
  /**
   * The description of the app
   */
  description: string;
  /**
   * The environment to create the app for
   */
  environment: Environment;
  /**
   * Whether to generate a key for the app
   */
  generateKey: boolean;
  /**
   * The name of the app
   */
  name: string;
};

/** @internal */
export const Environment$inboundSchema: z.ZodNativeEnum<typeof Environment> = z
  .nativeEnum(Environment);

/** @internal */
export const Environment$outboundSchema: z.ZodNativeEnum<typeof Environment> =
  Environment$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Environment$ {
  /** @deprecated use `Environment$inboundSchema` instead. */
  export const inboundSchema = Environment$inboundSchema;
  /** @deprecated use `Environment$outboundSchema` instead. */
  export const outboundSchema = Environment$outboundSchema;
}

/** @internal */
export const V1AccountCreateDeveloperAppRequestBody$inboundSchema: z.ZodType<
  V1AccountCreateDeveloperAppRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.string(),
  environment: Environment$inboundSchema,
  generateKey: z.boolean(),
  name: z.string(),
});

/** @internal */
export type V1AccountCreateDeveloperAppRequestBody$Outbound = {
  description: string;
  environment: string;
  generateKey: boolean;
  name: string;
};

/** @internal */
export const V1AccountCreateDeveloperAppRequestBody$outboundSchema: z.ZodType<
  V1AccountCreateDeveloperAppRequestBody$Outbound,
  z.ZodTypeDef,
  V1AccountCreateDeveloperAppRequestBody
> = z.object({
  description: z.string(),
  environment: Environment$outboundSchema,
  generateKey: z.boolean(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountCreateDeveloperAppRequestBody$ {
  /** @deprecated use `V1AccountCreateDeveloperAppRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    V1AccountCreateDeveloperAppRequestBody$inboundSchema;
  /** @deprecated use `V1AccountCreateDeveloperAppRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountCreateDeveloperAppRequestBody$outboundSchema;
  /** @deprecated use `V1AccountCreateDeveloperAppRequestBody$Outbound` instead. */
  export type Outbound = V1AccountCreateDeveloperAppRequestBody$Outbound;
}

export function v1AccountCreateDeveloperAppRequestBodyToJSON(
  v1AccountCreateDeveloperAppRequestBody:
    V1AccountCreateDeveloperAppRequestBody,
): string {
  return JSON.stringify(
    V1AccountCreateDeveloperAppRequestBody$outboundSchema.parse(
      v1AccountCreateDeveloperAppRequestBody,
    ),
  );
}

export function v1AccountCreateDeveloperAppRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountCreateDeveloperAppRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      V1AccountCreateDeveloperAppRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountCreateDeveloperAppRequestBody' from JSON`,
  );
}
