/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const V1BadgeListBadgePriceOrderDirection = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type V1BadgeListBadgePriceOrderDirection = ClosedEnum<
  typeof V1BadgeListBadgePriceOrderDirection
>;

export type V1BadgeListBadgePriceOrder = {
  by: string;
  direction?: V1BadgeListBadgePriceOrderDirection | undefined;
};

/** @internal */
export const V1BadgeListBadgePriceOrderDirection$inboundSchema: z.ZodNativeEnum<
  typeof V1BadgeListBadgePriceOrderDirection
> = z.nativeEnum(V1BadgeListBadgePriceOrderDirection);

/** @internal */
export const V1BadgeListBadgePriceOrderDirection$outboundSchema:
  z.ZodNativeEnum<typeof V1BadgeListBadgePriceOrderDirection> =
    V1BadgeListBadgePriceOrderDirection$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1BadgeListBadgePriceOrderDirection$ {
  /** @deprecated use `V1BadgeListBadgePriceOrderDirection$inboundSchema` instead. */
  export const inboundSchema =
    V1BadgeListBadgePriceOrderDirection$inboundSchema;
  /** @deprecated use `V1BadgeListBadgePriceOrderDirection$outboundSchema` instead. */
  export const outboundSchema =
    V1BadgeListBadgePriceOrderDirection$outboundSchema;
}

/** @internal */
export const V1BadgeListBadgePriceOrder$inboundSchema: z.ZodType<
  V1BadgeListBadgePriceOrder,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: z.string(),
  direction: V1BadgeListBadgePriceOrderDirection$inboundSchema.default("desc"),
});

/** @internal */
export type V1BadgeListBadgePriceOrder$Outbound = {
  by: string;
  direction: string;
};

/** @internal */
export const V1BadgeListBadgePriceOrder$outboundSchema: z.ZodType<
  V1BadgeListBadgePriceOrder$Outbound,
  z.ZodTypeDef,
  V1BadgeListBadgePriceOrder
> = z.object({
  by: z.string(),
  direction: V1BadgeListBadgePriceOrderDirection$outboundSchema.default("desc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1BadgeListBadgePriceOrder$ {
  /** @deprecated use `V1BadgeListBadgePriceOrder$inboundSchema` instead. */
  export const inboundSchema = V1BadgeListBadgePriceOrder$inboundSchema;
  /** @deprecated use `V1BadgeListBadgePriceOrder$outboundSchema` instead. */
  export const outboundSchema = V1BadgeListBadgePriceOrder$outboundSchema;
  /** @deprecated use `V1BadgeListBadgePriceOrder$Outbound` instead. */
  export type Outbound = V1BadgeListBadgePriceOrder$Outbound;
}

export function v1BadgeListBadgePriceOrderToJSON(
  v1BadgeListBadgePriceOrder: V1BadgeListBadgePriceOrder,
): string {
  return JSON.stringify(
    V1BadgeListBadgePriceOrder$outboundSchema.parse(v1BadgeListBadgePriceOrder),
  );
}

export function v1BadgeListBadgePriceOrderFromJSON(
  jsonString: string,
): SafeParseResult<V1BadgeListBadgePriceOrder, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1BadgeListBadgePriceOrder$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1BadgeListBadgePriceOrder' from JSON`,
  );
}
