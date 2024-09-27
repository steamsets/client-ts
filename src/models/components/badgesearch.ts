/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BadgeSearch = {
  /**
   * The app id
   */
  appId: number | null;
  /**
   * The app ids
   */
  appIds: Array<number> | null;
  /**
   * The badge id
   */
  badgeId: string | null;
  /**
   * The badge ids
   */
  badgeIds: Array<string> | null;
  /**
   * The color tags you want to search for
   */
  colorSearch: Array<{ [k: string]: Array<string> }> | null;
  /**
   * Whether to include/exclude event badges
   */
  isEvent: boolean | null;
  /**
   * Whether to include/exclude foil badges
   */
  isFoil: boolean | null;
  /**
   * Whether to include/exclude sale badges
   */
  isSale: boolean | null;
  /**
   * The limit of results
   */
  limit: number | null;
  /**
   * The offset of results
   */
  offset: number | null;
  /**
   * The tags you want to search for
   */
  typeSearch: Array<{ [k: string]: Array<string> }> | null;
};

/** @internal */
export const BadgeSearch$inboundSchema: z.ZodType<
  BadgeSearch,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.nullable(z.number().int()),
  appIds: z.nullable(z.array(z.number().int())),
  badgeId: z.nullable(z.string()),
  badgeIds: z.nullable(z.array(z.string())),
  colorSearch: z.nullable(z.array(z.record(z.array(z.string())))),
  isEvent: z.nullable(z.boolean()),
  isFoil: z.nullable(z.boolean()),
  isSale: z.nullable(z.boolean()),
  limit: z.nullable(z.number().int()),
  offset: z.nullable(z.number().int()),
  typeSearch: z.nullable(z.array(z.record(z.array(z.string())))),
});

/** @internal */
export type BadgeSearch$Outbound = {
  appId: number | null;
  appIds: Array<number> | null;
  badgeId: string | null;
  badgeIds: Array<string> | null;
  colorSearch: Array<{ [k: string]: Array<string> }> | null;
  isEvent: boolean | null;
  isFoil: boolean | null;
  isSale: boolean | null;
  limit: number | null;
  offset: number | null;
  typeSearch: Array<{ [k: string]: Array<string> }> | null;
};

/** @internal */
export const BadgeSearch$outboundSchema: z.ZodType<
  BadgeSearch$Outbound,
  z.ZodTypeDef,
  BadgeSearch
> = z.object({
  appId: z.nullable(z.number().int()),
  appIds: z.nullable(z.array(z.number().int())),
  badgeId: z.nullable(z.string()),
  badgeIds: z.nullable(z.array(z.string())),
  colorSearch: z.nullable(z.array(z.record(z.array(z.string())))),
  isEvent: z.nullable(z.boolean()),
  isFoil: z.nullable(z.boolean()),
  isSale: z.nullable(z.boolean()),
  limit: z.nullable(z.number().int()),
  offset: z.nullable(z.number().int()),
  typeSearch: z.nullable(z.array(z.record(z.array(z.string())))),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadgeSearch$ {
  /** @deprecated use `BadgeSearch$inboundSchema` instead. */
  export const inboundSchema = BadgeSearch$inboundSchema;
  /** @deprecated use `BadgeSearch$outboundSchema` instead. */
  export const outboundSchema = BadgeSearch$outboundSchema;
  /** @deprecated use `BadgeSearch$Outbound` instead. */
  export type Outbound = BadgeSearch$Outbound;
}
