/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  City,
  City$inboundSchema,
  City$Outbound,
  City$outboundSchema,
} from "./city.js";

export type State = {
  /**
   * The cities of the state
   */
  cities: Array<City> | null;
  /**
   * The code of the state
   */
  code: string;
  /**
   * The name of the state
   */
  name: string;
};

/** @internal */
export const State$inboundSchema: z.ZodType<State, z.ZodTypeDef, unknown> = z
  .object({
    cities: z.nullable(z.array(City$inboundSchema)),
    code: z.string(),
    name: z.string(),
  });

/** @internal */
export type State$Outbound = {
  cities: Array<City$Outbound> | null;
  code: string;
  name: string;
};

/** @internal */
export const State$outboundSchema: z.ZodType<
  State$Outbound,
  z.ZodTypeDef,
  State
> = z.object({
  cities: z.nullable(z.array(City$outboundSchema)),
  code: z.string(),
  name: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace State$ {
  /** @deprecated use `State$inboundSchema` instead. */
  export const inboundSchema = State$inboundSchema;
  /** @deprecated use `State$outboundSchema` instead. */
  export const outboundSchema = State$outboundSchema;
  /** @deprecated use `State$Outbound` instead. */
  export type Outbound = State$Outbound;
}

export function stateToJSON(state: State): string {
  return JSON.stringify(State$outboundSchema.parse(state));
}

export function stateFromJSON(
  jsonString: string,
): SafeParseResult<State, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => State$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'State' from JSON`,
  );
}
