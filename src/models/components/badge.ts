/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Vectors,
  Vectors$inboundSchema,
  Vectors$Outbound,
  Vectors$outboundSchema,
} from "./vectors.js";

export type Badge = {
  vectors: Vectors;
  appId: number;
  appImage: string;
  appName: string;
  bookmarks: number;
  cardCount: number;
  colors: Array<string> | null;
  designs: Array<string> | null;
  firstCompletion: number;
  highestLevel: number;
  highestPrice: number;
  id: string;
  image: string;
  isEvent: boolean;
  isFoil: boolean;
  isSale: boolean;
  lastCompletion: number;
  level: number;
  lowestPrice: number;
  name: string;
  price: number;
  scarcity: number;
  steamId: number;
  xp: number;
};

/** @internal */
export const Badge$inboundSchema: z.ZodType<Badge, z.ZodTypeDef, unknown> = z
  .object({
    _vectors: Vectors$inboundSchema,
    appId: z.number().int(),
    appImage: z.string(),
    appName: z.string(),
    bookmarks: z.number().int(),
    cardCount: z.number().int(),
    colors: z.nullable(z.array(z.string())),
    designs: z.nullable(z.array(z.string())),
    firstCompletion: z.number().int(),
    highestLevel: z.number().int(),
    highestPrice: z.number().int(),
    id: z.string(),
    image: z.string(),
    isEvent: z.boolean(),
    isFoil: z.boolean(),
    isSale: z.boolean(),
    lastCompletion: z.number().int(),
    level: z.number().int(),
    lowestPrice: z.number().int(),
    name: z.string(),
    price: z.number().int(),
    scarcity: z.number().int(),
    steamId: z.number().int(),
    xp: z.number(),
  }).transform((v) => {
    return remap$(v, {
      "_vectors": "vectors",
    });
  });

/** @internal */
export type Badge$Outbound = {
  _vectors: Vectors$Outbound;
  appId: number;
  appImage: string;
  appName: string;
  bookmarks: number;
  cardCount: number;
  colors: Array<string> | null;
  designs: Array<string> | null;
  firstCompletion: number;
  highestLevel: number;
  highestPrice: number;
  id: string;
  image: string;
  isEvent: boolean;
  isFoil: boolean;
  isSale: boolean;
  lastCompletion: number;
  level: number;
  lowestPrice: number;
  name: string;
  price: number;
  scarcity: number;
  steamId: number;
  xp: number;
};

/** @internal */
export const Badge$outboundSchema: z.ZodType<
  Badge$Outbound,
  z.ZodTypeDef,
  Badge
> = z.object({
  vectors: Vectors$outboundSchema,
  appId: z.number().int(),
  appImage: z.string(),
  appName: z.string(),
  bookmarks: z.number().int(),
  cardCount: z.number().int(),
  colors: z.nullable(z.array(z.string())),
  designs: z.nullable(z.array(z.string())),
  firstCompletion: z.number().int(),
  highestLevel: z.number().int(),
  highestPrice: z.number().int(),
  id: z.string(),
  image: z.string(),
  isEvent: z.boolean(),
  isFoil: z.boolean(),
  isSale: z.boolean(),
  lastCompletion: z.number().int(),
  level: z.number().int(),
  lowestPrice: z.number().int(),
  name: z.string(),
  price: z.number().int(),
  scarcity: z.number().int(),
  steamId: z.number().int(),
  xp: z.number(),
}).transform((v) => {
  return remap$(v, {
    vectors: "_vectors",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Badge$ {
  /** @deprecated use `Badge$inboundSchema` instead. */
  export const inboundSchema = Badge$inboundSchema;
  /** @deprecated use `Badge$outboundSchema` instead. */
  export const outboundSchema = Badge$outboundSchema;
  /** @deprecated use `Badge$Outbound` instead. */
  export type Outbound = Badge$Outbound;
}

export function badgeToJSON(badge: Badge): string {
  return JSON.stringify(Badge$outboundSchema.parse(badge));
}

export function badgeFromJSON(
  jsonString: string,
): SafeParseResult<Badge, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Badge$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Badge' from JSON`,
  );
}
