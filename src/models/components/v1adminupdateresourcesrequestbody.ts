/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  IDStruct,
  IDStruct$inboundSchema,
  IDStruct$Outbound,
  IDStruct$outboundSchema,
} from "./idstruct.js";
import {
  Resource,
  Resource$inboundSchema,
  Resource$Outbound,
  Resource$outboundSchema,
} from "./resource.js";
import {
  VanityStruct,
  VanityStruct$inboundSchema,
  VanityStruct$Outbound,
  VanityStruct$outboundSchema,
} from "./vanitystruct.js";

export const V1AdminUpdateResourcesRequestBodyResource = {
  AnimatedAvatar: "animated_avatar",
  AutoRefresh: "auto_refresh",
  AvatarFrame: "avatar_frame",
  Background: "background",
  BetaAccess: "beta_access",
  CustomVanity: "custom_vanity",
  GoToLeaderboardEntry: "go_to_leaderboard_entry",
  MaxLeaderboardEntries: "max_leaderboard_entries",
  MiniBackground: "mini_background",
  AccountColors: "account_colors",
  AccountRefreshRate: "account_refresh_rate",
  SiteColor: "site_color",
  SocialLinks: "social_links",
  Theme: "theme",
  VanityLength: "vanity_length",
  DeveloperApps: "developer_apps",
  AccountQueues: "account_queues",
  ShortLinkDomain: "short_link_domain",
} as const;
export type V1AdminUpdateResourcesRequestBodyResource = ClosedEnum<
  typeof V1AdminUpdateResourcesRequestBodyResource
>;

export type V1AdminUpdateResourcesRequestBody = {
  id?: IDStruct | undefined;
  /**
   * The resources to add for this account
   */
  newResources: Array<Resource> | null;
  resource: Array<V1AdminUpdateResourcesRequestBodyResource> | null;
  vanity?: VanityStruct | undefined;
};

/** @internal */
export const V1AdminUpdateResourcesRequestBodyResource$inboundSchema:
  z.ZodNativeEnum<typeof V1AdminUpdateResourcesRequestBodyResource> = z
    .nativeEnum(V1AdminUpdateResourcesRequestBodyResource);

/** @internal */
export const V1AdminUpdateResourcesRequestBodyResource$outboundSchema:
  z.ZodNativeEnum<typeof V1AdminUpdateResourcesRequestBodyResource> =
    V1AdminUpdateResourcesRequestBodyResource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AdminUpdateResourcesRequestBodyResource$ {
  /** @deprecated use `V1AdminUpdateResourcesRequestBodyResource$inboundSchema` instead. */
  export const inboundSchema =
    V1AdminUpdateResourcesRequestBodyResource$inboundSchema;
  /** @deprecated use `V1AdminUpdateResourcesRequestBodyResource$outboundSchema` instead. */
  export const outboundSchema =
    V1AdminUpdateResourcesRequestBodyResource$outboundSchema;
}

/** @internal */
export const V1AdminUpdateResourcesRequestBody$inboundSchema: z.ZodType<
  V1AdminUpdateResourcesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: IDStruct$inboundSchema.optional(),
  newResources: z.nullable(z.array(Resource$inboundSchema)),
  resource: z.nullable(
    z.array(V1AdminUpdateResourcesRequestBodyResource$inboundSchema),
  ),
  vanity: VanityStruct$inboundSchema.optional(),
});

/** @internal */
export type V1AdminUpdateResourcesRequestBody$Outbound = {
  id?: IDStruct$Outbound | undefined;
  newResources: Array<Resource$Outbound> | null;
  resource: Array<string> | null;
  vanity?: VanityStruct$Outbound | undefined;
};

/** @internal */
export const V1AdminUpdateResourcesRequestBody$outboundSchema: z.ZodType<
  V1AdminUpdateResourcesRequestBody$Outbound,
  z.ZodTypeDef,
  V1AdminUpdateResourcesRequestBody
> = z.object({
  id: IDStruct$outboundSchema.optional(),
  newResources: z.nullable(z.array(Resource$outboundSchema)),
  resource: z.nullable(
    z.array(V1AdminUpdateResourcesRequestBodyResource$outboundSchema),
  ),
  vanity: VanityStruct$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AdminUpdateResourcesRequestBody$ {
  /** @deprecated use `V1AdminUpdateResourcesRequestBody$inboundSchema` instead. */
  export const inboundSchema = V1AdminUpdateResourcesRequestBody$inboundSchema;
  /** @deprecated use `V1AdminUpdateResourcesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    V1AdminUpdateResourcesRequestBody$outboundSchema;
  /** @deprecated use `V1AdminUpdateResourcesRequestBody$Outbound` instead. */
  export type Outbound = V1AdminUpdateResourcesRequestBody$Outbound;
}
