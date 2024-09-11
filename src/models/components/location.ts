/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Location = {
  /**
   * The code of the location
   */
  code?: string | null | undefined;
  /**
   * The id of the location
   */
  id: number;
  /**
   * The name of the location
   */
  name: string;
};

/** @internal */
export const Location$inboundSchema: z.ZodType<
  Location,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.nullable(z.string()).optional(),
  id: z.number().int(),
  name: z.string(),
});

/** @internal */
export type Location$Outbound = {
  code?: string | null | undefined;
  id: number;
  name: string;
};

/** @internal */
export const Location$outboundSchema: z.ZodType<
  Location$Outbound,
  z.ZodTypeDef,
  Location
> = z.object({
  code: z.nullable(z.string()).optional(),
  id: z.number().int(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Location$ {
  /** @deprecated use `Location$inboundSchema` instead. */
  export const inboundSchema = Location$inboundSchema;
  /** @deprecated use `Location$outboundSchema` instead. */
  export const outboundSchema = Location$outboundSchema;
  /** @deprecated use `Location$Outbound` instead. */
  export type Outbound = Location$Outbound;
}
