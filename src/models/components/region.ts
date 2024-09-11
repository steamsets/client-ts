/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Country,
  Country$inboundSchema,
  Country$Outbound,
  Country$outboundSchema,
} from "./country.js";

export type Region = {
  /**
   * The countries of the region
   */
  countries: { [k: string]: Country };
  /**
   * The name of the region
   */
  name: string;
};

/** @internal */
export const Region$inboundSchema: z.ZodType<Region, z.ZodTypeDef, unknown> = z
  .object({
    countries: z.record(Country$inboundSchema),
    name: z.string(),
  });

/** @internal */
export type Region$Outbound = {
  countries: { [k: string]: Country$Outbound };
  name: string;
};

/** @internal */
export const Region$outboundSchema: z.ZodType<
  Region$Outbound,
  z.ZodTypeDef,
  Region
> = z.object({
  countries: z.record(Country$outboundSchema),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Region$ {
  /** @deprecated use `Region$inboundSchema` instead. */
  export const inboundSchema = Region$inboundSchema;
  /** @deprecated use `Region$outboundSchema` instead. */
  export const outboundSchema = Region$outboundSchema;
  /** @deprecated use `Region$Outbound` instead. */
  export type Outbound = Region$Outbound;
}
