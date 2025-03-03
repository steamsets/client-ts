/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  V1AppEventMapping,
  V1AppEventMapping$inboundSchema,
  V1AppEventMapping$Outbound,
  V1AppEventMapping$outboundSchema,
} from "./v1appeventmapping.js";

export type V1Event = {
  /**
   * The body image of the event
   */
  bodyImage: string;
  /**
   * The number of downvotes the event has
   */
  downvotes: number;
  /**
   * The end time of the event
   */
  endsAt: Date;
  /**
   * Use this ID to make any changes to the event
   */
  eventId: string;
  /**
   * The gid of the event
   */
  gid: string;
  /**
   * The header image of the event
   */
  headerImage: string;
  /**
   * The mappings of the event
   */
  mappings: Array<V1AppEventMapping> | null;
  /**
   * The name of the event
   */
  name: string;
  /**
   * The time the event was posted
   */
  postedAt: Date;
  /**
   * The start time of the event
   */
  startsAt: Date;
  /**
   * The title of the event
   */
  title: string;
  /**
   * The number of upvotes the event has
   */
  upvotes: number;
};

/** @internal */
export const V1Event$inboundSchema: z.ZodType<V1Event, z.ZodTypeDef, unknown> =
  z.object({
    bodyImage: z.string(),
    downvotes: z.number().int(),
    endsAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
    eventId: z.string(),
    gid: z.string(),
    headerImage: z.string(),
    mappings: z.nullable(z.array(V1AppEventMapping$inboundSchema)),
    name: z.string(),
    postedAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
    startsAt: z.string().datetime({ offset: true }).transform(v => new Date(v)),
    title: z.string(),
    upvotes: z.number().int(),
  });

/** @internal */
export type V1Event$Outbound = {
  bodyImage: string;
  downvotes: number;
  endsAt: string;
  eventId: string;
  gid: string;
  headerImage: string;
  mappings: Array<V1AppEventMapping$Outbound> | null;
  name: string;
  postedAt: string;
  startsAt: string;
  title: string;
  upvotes: number;
};

/** @internal */
export const V1Event$outboundSchema: z.ZodType<
  V1Event$Outbound,
  z.ZodTypeDef,
  V1Event
> = z.object({
  bodyImage: z.string(),
  downvotes: z.number().int(),
  endsAt: z.date().transform(v => v.toISOString()),
  eventId: z.string(),
  gid: z.string(),
  headerImage: z.string(),
  mappings: z.nullable(z.array(V1AppEventMapping$outboundSchema)),
  name: z.string(),
  postedAt: z.date().transform(v => v.toISOString()),
  startsAt: z.date().transform(v => v.toISOString()),
  title: z.string(),
  upvotes: z.number().int(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1Event$ {
  /** @deprecated use `V1Event$inboundSchema` instead. */
  export const inboundSchema = V1Event$inboundSchema;
  /** @deprecated use `V1Event$outboundSchema` instead. */
  export const outboundSchema = V1Event$outboundSchema;
  /** @deprecated use `V1Event$Outbound` instead. */
  export type Outbound = V1Event$Outbound;
}

export function v1EventToJSON(v1Event: V1Event): string {
  return JSON.stringify(V1Event$outboundSchema.parse(v1Event));
}

export function v1EventFromJSON(
  jsonString: string,
): SafeParseResult<V1Event, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1Event$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1Event' from JSON`,
  );
}
