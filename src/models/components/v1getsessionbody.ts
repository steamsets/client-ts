/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Resource,
  Resource$inboundSchema,
  Resource$Outbound,
  Resource$outboundSchema,
} from "./resource.js";
import {
  Role,
  Role$inboundSchema,
  Role$Outbound,
  Role$outboundSchema,
} from "./role.js";
import {
  Session,
  Session$inboundSchema,
  Session$Outbound,
  Session$outboundSchema,
} from "./session.js";

export type V1GetSessionBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The account id
   */
  accountId: number;
  /**
   * The resources the user has (permissions)
   */
  resources: Array<Resource> | null;
  /**
   * The roles the user has
   */
  roles: Array<Role> | null;
  sessionData: Session;
  /**
   * The steam id
   */
  steamId: string;
};

/** @internal */
export const V1GetSessionBody$inboundSchema: z.ZodType<
  V1GetSessionBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  accountId: z.number().int(),
  resources: z.nullable(z.array(Resource$inboundSchema)),
  roles: z.nullable(z.array(Role$inboundSchema)),
  sessionData: Session$inboundSchema,
  steamId: z.string(),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1GetSessionBody$Outbound = {
  $schema?: string | undefined;
  accountId: number;
  resources: Array<Resource$Outbound> | null;
  roles: Array<Role$Outbound> | null;
  sessionData: Session$Outbound;
  steamId: string;
};

/** @internal */
export const V1GetSessionBody$outboundSchema: z.ZodType<
  V1GetSessionBody$Outbound,
  z.ZodTypeDef,
  V1GetSessionBody
> = z.object({
  dollarSchema: z.string().optional(),
  accountId: z.number().int(),
  resources: z.nullable(z.array(Resource$outboundSchema)),
  roles: z.nullable(z.array(Role$outboundSchema)),
  sessionData: Session$outboundSchema,
  steamId: z.string(),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1GetSessionBody$ {
  /** @deprecated use `V1GetSessionBody$inboundSchema` instead. */
  export const inboundSchema = V1GetSessionBody$inboundSchema;
  /** @deprecated use `V1GetSessionBody$outboundSchema` instead. */
  export const outboundSchema = V1GetSessionBody$outboundSchema;
  /** @deprecated use `V1GetSessionBody$Outbound` instead. */
  export type Outbound = V1GetSessionBody$Outbound;
}
