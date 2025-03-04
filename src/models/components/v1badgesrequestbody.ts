/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IDStruct,
  IDStruct$inboundSchema,
  IDStruct$Outbound,
  IDStruct$outboundSchema,
} from "./idstruct.js";
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

export const Filter = {
  Foil: "foil",
  Sale: "sale",
  Event: "event",
} as const;
export type Filter = ClosedEnum<typeof Filter>;

export type V1BadgesRequestBody = {
  filter?: Array<Filter> | null | undefined;
  id?: IDStruct | undefined;
  order?: V1BadgeOrder | null | undefined;
  page?: number | undefined;
  search?: string | null | undefined;
  vanity?: VanityStruct | undefined;
};

/** @internal */
export const Filter$inboundSchema: z.ZodNativeEnum<typeof Filter> = z
  .nativeEnum(Filter);

/** @internal */
export const Filter$outboundSchema: z.ZodNativeEnum<typeof Filter> =
  Filter$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Filter$ {
  /** @deprecated use `Filter$inboundSchema` instead. */
  export const inboundSchema = Filter$inboundSchema;
  /** @deprecated use `Filter$outboundSchema` instead. */
  export const outboundSchema = Filter$outboundSchema;
}

/** @internal */
export const V1BadgesRequestBody$inboundSchema: z.ZodType<
  V1BadgesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  filter: z.nullable(z.array(Filter$inboundSchema)).optional(),
  id: IDStruct$inboundSchema.optional(),
  order: z.nullable(V1BadgeOrder$inboundSchema).optional(),
  page: z.number().int().default(1),
  search: z.nullable(z.string()).optional(),
  vanity: VanityStruct$inboundSchema.optional(),
});

/** @internal */
export type V1BadgesRequestBody$Outbound = {
  filter?: Array<string> | null | undefined;
  id?: IDStruct$Outbound | undefined;
  order?: V1BadgeOrder$Outbound | null | undefined;
  page: number;
  search?: string | null | undefined;
  vanity?: VanityStruct$Outbound | undefined;
};

/** @internal */
export const V1BadgesRequestBody$outboundSchema: z.ZodType<
  V1BadgesRequestBody$Outbound,
  z.ZodTypeDef,
  V1BadgesRequestBody
> = z.object({
  filter: z.nullable(z.array(Filter$outboundSchema)).optional(),
  id: IDStruct$outboundSchema.optional(),
  order: z.nullable(V1BadgeOrder$outboundSchema).optional(),
  page: z.number().int().default(1),
  search: z.nullable(z.string()).optional(),
  vanity: VanityStruct$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1BadgesRequestBody$ {
  /** @deprecated use `V1BadgesRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1BadgesRequestBody$inboundSchema;
  /** @deprecated use `V1BadgesRequestBody$outboundSchema` instead. */
  export const outboundSchema = V1BadgesRequestBody$outboundSchema;
  /** @deprecated use `V1BadgesRequestBody$Outbound` instead. */
  export type Outbound = V1BadgesRequestBody$Outbound;
}

export function v1BadgesRequestBodyToJSON(
  v1BadgesRequestBody: V1BadgesRequestBody,
): string {
  return JSON.stringify(
    V1BadgesRequestBody$outboundSchema.parse(v1BadgesRequestBody),
  );
}

export function v1BadgesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1BadgesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1BadgesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1BadgesRequestBody' from JSON`,
  );
}
