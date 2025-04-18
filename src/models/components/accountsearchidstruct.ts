/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountSearchIDStruct = {
  /**
   * Account ID to search for
   */
  accountId?: number | undefined;
  /**
   * SteamID64 to search for
   */
  steamId64?: string | undefined;
};

/** @internal */
export const AccountSearchIDStruct$inboundSchema: z.ZodType<
  AccountSearchIDStruct,
  z.ZodTypeDef,
  unknown
> = z.object({
  accountId: z.number().int().optional(),
  steamId64: z.string().optional(),
});

/** @internal */
export type AccountSearchIDStruct$Outbound = {
  accountId?: number | undefined;
  steamId64?: string | undefined;
};

/** @internal */
export const AccountSearchIDStruct$outboundSchema: z.ZodType<
  AccountSearchIDStruct$Outbound,
  z.ZodTypeDef,
  AccountSearchIDStruct
> = z.object({
  accountId: z.number().int().optional(),
  steamId64: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountSearchIDStruct$ {
  /** @deprecated use `AccountSearchIDStruct$inboundSchema` instead. */
  export const inboundSchema = AccountSearchIDStruct$inboundSchema;
  /** @deprecated use `AccountSearchIDStruct$outboundSchema` instead. */
  export const outboundSchema = AccountSearchIDStruct$outboundSchema;
  /** @deprecated use `AccountSearchIDStruct$Outbound` instead. */
  export type Outbound = AccountSearchIDStruct$Outbound;
}

export function accountSearchIDStructToJSON(
  accountSearchIDStruct: AccountSearchIDStruct,
): string {
  return JSON.stringify(
    AccountSearchIDStruct$outboundSchema.parse(accountSearchIDStruct),
  );
}

export function accountSearchIDStructFromJSON(
  jsonString: string,
): SafeParseResult<AccountSearchIDStruct, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountSearchIDStruct$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountSearchIDStruct' from JSON`,
  );
}
