/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Connection,
  Connection$inboundSchema,
  Connection$Outbound,
  Connection$outboundSchema,
} from "./connection.js";
import {
  DeveloperApp,
  DeveloperApp$inboundSchema,
  DeveloperApp$Outbound,
  DeveloperApp$outboundSchema,
} from "./developerapp.js";
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
import {
  V1AccountLocationUpdate,
  V1AccountLocationUpdate$inboundSchema,
  V1AccountLocationUpdate$Outbound,
  V1AccountLocationUpdate$outboundSchema,
} from "./v1accountlocationupdate.js";
import {
  V1AccountNameUpdate,
  V1AccountNameUpdate$inboundSchema,
  V1AccountNameUpdate$Outbound,
  V1AccountNameUpdate$outboundSchema,
} from "./v1accountnameupdate.js";
import {
  V1AccountVanityUpdate,
  V1AccountVanityUpdate$inboundSchema,
  V1AccountVanityUpdate$Outbound,
  V1AccountVanityUpdate$outboundSchema,
} from "./v1accountvanityupdate.js";

/**
 * The privacy of the account
 */
export const V1AdminGetAccountResponseBodyPrivacy = {
  Private: "private",
  Public: "public",
  FriendsOnly: "friends_only",
} as const;
/**
 * The privacy of the account
 */
export type V1AdminGetAccountResponseBodyPrivacy = ClosedEnum<
  typeof V1AdminGetAccountResponseBodyPrivacy
>;

export type V1AdminGetAccountResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The avatar of the account
   */
  avatar: string;
  /**
   * The city of the account
   */
  city: string | null;
  /**
   * The connections the account has
   */
  connections: Array<Connection> | null;
  /**
   * The country code of the account
   */
  country: string | null;
  /**
   * The developer apps the account has
   */
  developerApps: Array<DeveloperApp> | null;
  /**
   * The email of the account
   */
  email: string | null;
  /**
   * The location updates the account has
   */
  locationUpdates: Array<V1AccountLocationUpdate> | null;
  /**
   * The name of the account
   */
  name: string;
  /**
   * The name updates the account has
   */
  nameUpdates: Array<V1AccountNameUpdate> | null;
  /**
   * The privacy of the account
   */
  privacy: V1AdminGetAccountResponseBodyPrivacy;
  /**
   * The region of the account
   */
  region: string | null;
  /**
   * The resources the account has (permissions)
   */
  resources: Array<Resource> | null;
  /**
   * The roles the account has
   */
  roles: Array<Role> | null;
  /**
   * The sessions the account has
   */
  sessions: Array<Session> | null;
  /**
   * The state of the account
   */
  state: string | null;
  /**
   * The vanity of the account
   */
  vanity: string | null;
  /**
   * The vanity updates the account has
   */
  vanityUpdates: Array<V1AccountVanityUpdate> | null;
};

/** @internal */
export const V1AdminGetAccountResponseBodyPrivacy$inboundSchema:
  z.ZodNativeEnum<typeof V1AdminGetAccountResponseBodyPrivacy> = z.nativeEnum(
    V1AdminGetAccountResponseBodyPrivacy,
  );

/** @internal */
export const V1AdminGetAccountResponseBodyPrivacy$outboundSchema:
  z.ZodNativeEnum<typeof V1AdminGetAccountResponseBodyPrivacy> =
    V1AdminGetAccountResponseBodyPrivacy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AdminGetAccountResponseBodyPrivacy$ {
  /** @deprecated use `V1AdminGetAccountResponseBodyPrivacy$inboundSchema` instead. */
  export const inboundSchema =
    V1AdminGetAccountResponseBodyPrivacy$inboundSchema;
  /** @deprecated use `V1AdminGetAccountResponseBodyPrivacy$outboundSchema` instead. */
  export const outboundSchema =
    V1AdminGetAccountResponseBodyPrivacy$outboundSchema;
}

/** @internal */
export const V1AdminGetAccountResponseBody$inboundSchema: z.ZodType<
  V1AdminGetAccountResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  avatar: z.string(),
  city: z.nullable(z.string()),
  connections: z.nullable(z.array(Connection$inboundSchema)),
  country: z.nullable(z.string()),
  developerApps: z.nullable(z.array(DeveloperApp$inboundSchema)),
  email: z.nullable(z.string()),
  locationUpdates: z.nullable(z.array(V1AccountLocationUpdate$inboundSchema)),
  name: z.string(),
  nameUpdates: z.nullable(z.array(V1AccountNameUpdate$inboundSchema)),
  privacy: V1AdminGetAccountResponseBodyPrivacy$inboundSchema,
  region: z.nullable(z.string()),
  resources: z.nullable(z.array(Resource$inboundSchema)),
  roles: z.nullable(z.array(Role$inboundSchema)),
  sessions: z.nullable(z.array(Session$inboundSchema)),
  state: z.nullable(z.string()),
  vanity: z.nullable(z.string()),
  vanityUpdates: z.nullable(z.array(V1AccountVanityUpdate$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1AdminGetAccountResponseBody$Outbound = {
  $schema?: string | undefined;
  avatar: string;
  city: string | null;
  connections: Array<Connection$Outbound> | null;
  country: string | null;
  developerApps: Array<DeveloperApp$Outbound> | null;
  email: string | null;
  locationUpdates: Array<V1AccountLocationUpdate$Outbound> | null;
  name: string;
  nameUpdates: Array<V1AccountNameUpdate$Outbound> | null;
  privacy: string;
  region: string | null;
  resources: Array<Resource$Outbound> | null;
  roles: Array<Role$Outbound> | null;
  sessions: Array<Session$Outbound> | null;
  state: string | null;
  vanity: string | null;
  vanityUpdates: Array<V1AccountVanityUpdate$Outbound> | null;
};

/** @internal */
export const V1AdminGetAccountResponseBody$outboundSchema: z.ZodType<
  V1AdminGetAccountResponseBody$Outbound,
  z.ZodTypeDef,
  V1AdminGetAccountResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  avatar: z.string(),
  city: z.nullable(z.string()),
  connections: z.nullable(z.array(Connection$outboundSchema)),
  country: z.nullable(z.string()),
  developerApps: z.nullable(z.array(DeveloperApp$outboundSchema)),
  email: z.nullable(z.string()),
  locationUpdates: z.nullable(z.array(V1AccountLocationUpdate$outboundSchema)),
  name: z.string(),
  nameUpdates: z.nullable(z.array(V1AccountNameUpdate$outboundSchema)),
  privacy: V1AdminGetAccountResponseBodyPrivacy$outboundSchema,
  region: z.nullable(z.string()),
  resources: z.nullable(z.array(Resource$outboundSchema)),
  roles: z.nullable(z.array(Role$outboundSchema)),
  sessions: z.nullable(z.array(Session$outboundSchema)),
  state: z.nullable(z.string()),
  vanity: z.nullable(z.string()),
  vanityUpdates: z.nullable(z.array(V1AccountVanityUpdate$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AdminGetAccountResponseBody$ {
  /** @deprecated use `V1AdminGetAccountResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1AdminGetAccountResponseBody$inboundSchema;
  /** @deprecated use `V1AdminGetAccountResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1AdminGetAccountResponseBody$outboundSchema;
  /** @deprecated use `V1AdminGetAccountResponseBody$Outbound` instead. */
  export type Outbound = V1AdminGetAccountResponseBody$Outbound;
}

export function v1AdminGetAccountResponseBodyToJSON(
  v1AdminGetAccountResponseBody: V1AdminGetAccountResponseBody,
): string {
  return JSON.stringify(
    V1AdminGetAccountResponseBody$outboundSchema.parse(
      v1AdminGetAccountResponseBody,
    ),
  );
}

export function v1AdminGetAccountResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<V1AdminGetAccountResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AdminGetAccountResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AdminGetAccountResponseBody' from JSON`,
  );
}
