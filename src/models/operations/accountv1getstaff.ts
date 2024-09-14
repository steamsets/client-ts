/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountV1GetStaffResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  leaderboardAccounts?: Array<components.LeaderboardAccount> | null | undefined;
};

/** @internal */
export const AccountV1GetStaffResponse$inboundSchema: z.ZodType<
  AccountV1GetStaffResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  LeaderboardAccounts: z.nullable(
    z.array(components.LeaderboardAccount$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "LeaderboardAccounts": "leaderboardAccounts",
  });
});

/** @internal */
export type AccountV1GetStaffResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  LeaderboardAccounts?:
    | Array<components.LeaderboardAccount$Outbound>
    | null
    | undefined;
};

/** @internal */
export const AccountV1GetStaffResponse$outboundSchema: z.ZodType<
  AccountV1GetStaffResponse$Outbound,
  z.ZodTypeDef,
  AccountV1GetStaffResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  leaderboardAccounts: z.nullable(
    z.array(components.LeaderboardAccount$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    leaderboardAccounts: "LeaderboardAccounts",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1GetStaffResponse$ {
  /** @deprecated use `AccountV1GetStaffResponse$inboundSchema` instead. */
  export const inboundSchema = AccountV1GetStaffResponse$inboundSchema;
  /** @deprecated use `AccountV1GetStaffResponse$outboundSchema` instead. */
  export const outboundSchema = AccountV1GetStaffResponse$outboundSchema;
  /** @deprecated use `AccountV1GetStaffResponse$Outbound` instead. */
  export type Outbound = AccountV1GetStaffResponse$Outbound;
}
