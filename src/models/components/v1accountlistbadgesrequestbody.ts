/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BadgeValueFilter,
  BadgeValueFilter$inboundSchema,
  BadgeValueFilter$Outbound,
  BadgeValueFilter$outboundSchema,
} from "./badgevaluefilter.js";
import {
  IDStruct,
  IDStruct$inboundSchema,
  IDStruct$Outbound,
  IDStruct$outboundSchema,
} from "./idstruct.js";
import {
  V1BadgeFilters,
  V1BadgeFilters$inboundSchema,
  V1BadgeFilters$Outbound,
  V1BadgeFilters$outboundSchema,
} from "./v1badgefilters.js";
import {
  V1BadgeOrder,
  V1BadgeOrder$inboundSchema,
  V1BadgeOrder$Outbound,
  V1BadgeOrder$outboundSchema,
} from "./v1badgeorder.js";
import {
  VanityStruct,
  VanityStruct$inboundSchema,
  VanityStruct$Outbound,
  VanityStruct$outboundSchema,
} from "./vanitystruct.js";

export const V1AccountListBadgesRequestBodyFilter = {
  Foil: "foil",
  Sale: "sale",
  Event: "event",
} as const;
export type V1AccountListBadgesRequestBodyFilter = ClosedEnum<
  typeof V1AccountListBadgesRequestBodyFilter
>;

export type V1AccountListBadgesRequestBody = {
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  filter?: Array<V1AccountListBadgesRequestBodyFilter> | null | undefined;
  filters?: V1BadgeFilters | undefined;
  id?: IDStruct | undefined;
  order?: V1BadgeOrder | null | undefined;
  page?: number | undefined;
  search?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  valueFilter?: Array<BadgeValueFilter> | null | undefined;
  vanity?: VanityStruct | undefined;
};

/** @internal */
export const V1AccountListBadgesRequestBodyFilter$inboundSchema:
  z.ZodNativeEnum<typeof V1AccountListBadgesRequestBodyFilter> = z.nativeEnum(
    V1AccountListBadgesRequestBodyFilter,
  );

/** @internal */
export const V1AccountListBadgesRequestBodyFilter$outboundSchema:
  z.ZodNativeEnum<typeof V1AccountListBadgesRequestBodyFilter> =
    V1AccountListBadgesRequestBodyFilter$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountListBadgesRequestBodyFilter$ {
  /** @deprecated use `V1AccountListBadgesRequestBodyFilter$inboundSchema` instead. */
  export const inboundSchema =
    V1AccountListBadgesRequestBodyFilter$inboundSchema;
  /** @deprecated use `V1AccountListBadgesRequestBodyFilter$outboundSchema` instead. */
  export const outboundSchema =
    V1AccountListBadgesRequestBodyFilter$outboundSchema;
}

/** @internal */
export const V1AccountListBadgesRequestBody$inboundSchema: z.ZodType<
  V1AccountListBadgesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  filter: z.nullable(
    z.array(V1AccountListBadgesRequestBodyFilter$inboundSchema),
  ).optional(),
  filters: V1BadgeFilters$inboundSchema.optional(),
  id: IDStruct$inboundSchema.optional(),
  order: z.nullable(V1BadgeOrder$inboundSchema).optional(),
  page: z.number().int().default(1),
  search: z.nullable(z.string()).optional(),
  valueFilter: z.nullable(z.array(BadgeValueFilter$inboundSchema)).optional(),
  vanity: VanityStruct$inboundSchema.optional(),
});

/** @internal */
export type V1AccountListBadgesRequestBody$Outbound = {
  filter?: Array<string> | null | undefined;
  filters?: V1BadgeFilters$Outbound | undefined;
  id?: IDStruct$Outbound | undefined;
  order?: V1BadgeOrder$Outbound | null | undefined;
  page: number;
  search?: string | null | undefined;
  valueFilter?: Array<BadgeValueFilter$Outbound> | null | undefined;
  vanity?: VanityStruct$Outbound | undefined;
};

/** @internal */
export const V1AccountListBadgesRequestBody$outboundSchema: z.ZodType<
  V1AccountListBadgesRequestBody$Outbound,
  z.ZodTypeDef,
  V1AccountListBadgesRequestBody
> = z.object({
  filter: z.nullable(
    z.array(V1AccountListBadgesRequestBodyFilter$outboundSchema),
  ).optional(),
  filters: V1BadgeFilters$outboundSchema.optional(),
  id: IDStruct$outboundSchema.optional(),
  order: z.nullable(V1BadgeOrder$outboundSchema).optional(),
  page: z.number().int().default(1),
  search: z.nullable(z.string()).optional(),
  valueFilter: z.nullable(z.array(BadgeValueFilter$outboundSchema)).optional(),
  vanity: VanityStruct$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountListBadgesRequestBody$ {
  /** @deprecated use `V1AccountListBadgesRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1AccountListBadgesRequestBody$inboundSchema;
  /** @deprecated use `V1AccountListBadgesRequestBody$outboundSchema` instead. */
  export const outboundSchema = V1AccountListBadgesRequestBody$outboundSchema;
  /** @deprecated use `V1AccountListBadgesRequestBody$Outbound` instead. */
  export type Outbound = V1AccountListBadgesRequestBody$Outbound;
}

export function v1AccountListBadgesRequestBodyToJSON(
  v1AccountListBadgesRequestBody: V1AccountListBadgesRequestBody,
): string {
  return JSON.stringify(
    V1AccountListBadgesRequestBody$outboundSchema.parse(
      v1AccountListBadgesRequestBody,
    ),
  );
}

export function v1AccountListBadgesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountListBadgesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountListBadgesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountListBadgesRequestBody' from JSON`,
  );
}
