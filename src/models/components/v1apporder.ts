/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const By = {
  AppId: "appId",
  Playtime: "playtime",
} as const;
export type By = ClosedEnum<typeof By>;

export const Direction = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type Direction = ClosedEnum<typeof Direction>;

export type V1AppOrder = {
  by: By;
  direction?: Direction | undefined;
};

/** @internal */
export const By$inboundSchema: z.ZodNativeEnum<typeof By> = z.nativeEnum(By);

/** @internal */
export const By$outboundSchema: z.ZodNativeEnum<typeof By> = By$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace By$ {
  /** @deprecated use `By$inboundSchema` instead. */
  export const inboundSchema = By$inboundSchema;
  /** @deprecated use `By$outboundSchema` instead. */
  export const outboundSchema = By$outboundSchema;
}

/** @internal */
export const Direction$inboundSchema: z.ZodNativeEnum<typeof Direction> = z
  .nativeEnum(Direction);

/** @internal */
export const Direction$outboundSchema: z.ZodNativeEnum<typeof Direction> =
  Direction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Direction$ {
  /** @deprecated use `Direction$inboundSchema` instead. */
  export const inboundSchema = Direction$inboundSchema;
  /** @deprecated use `Direction$outboundSchema` instead. */
  export const outboundSchema = Direction$outboundSchema;
}

/** @internal */
export const V1AppOrder$inboundSchema: z.ZodType<
  V1AppOrder,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: By$inboundSchema,
  direction: Direction$inboundSchema.default("desc"),
});

/** @internal */
export type V1AppOrder$Outbound = {
  by: string;
  direction: string;
};

/** @internal */
export const V1AppOrder$outboundSchema: z.ZodType<
  V1AppOrder$Outbound,
  z.ZodTypeDef,
  V1AppOrder
> = z.object({
  by: By$outboundSchema,
  direction: Direction$outboundSchema.default("desc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AppOrder$ {
  /** @deprecated use `V1AppOrder$inboundSchema` instead. */
  export const inboundSchema = V1AppOrder$inboundSchema;
  /** @deprecated use `V1AppOrder$outboundSchema` instead. */
  export const outboundSchema = V1AppOrder$outboundSchema;
  /** @deprecated use `V1AppOrder$Outbound` instead. */
  export type Outbound = V1AppOrder$Outbound;
}

export function v1AppOrderToJSON(v1AppOrder: V1AppOrder): string {
  return JSON.stringify(V1AppOrder$outboundSchema.parse(v1AppOrder));
}

export function v1AppOrderFromJSON(
  jsonString: string,
): SafeParseResult<V1AppOrder, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AppOrder$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AppOrder' from JSON`,
  );
}
