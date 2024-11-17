/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountV1QueueResponse = {
  httpMeta: components.HTTPMetadata;
  headers: { [k: string]: Array<string> };
};

/** @internal */
export const AccountV1QueueResponse$inboundSchema: z.ZodType<
  AccountV1QueueResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  Headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Headers": "headers",
  });
});

/** @internal */
export type AccountV1QueueResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  Headers: { [k: string]: Array<string> };
};

/** @internal */
export const AccountV1QueueResponse$outboundSchema: z.ZodType<
  AccountV1QueueResponse$Outbound,
  z.ZodTypeDef,
  AccountV1QueueResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  headers: z.record(z.array(z.string())),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    headers: "Headers",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountV1QueueResponse$ {
  /** @deprecated use `AccountV1QueueResponse$inboundSchema` instead. */
  export const inboundSchema = AccountV1QueueResponse$inboundSchema;
  /** @deprecated use `AccountV1QueueResponse$outboundSchema` instead. */
  export const outboundSchema = AccountV1QueueResponse$outboundSchema;
  /** @deprecated use `AccountV1QueueResponse$Outbound` instead. */
  export type Outbound = AccountV1QueueResponse$Outbound;
}

export function accountV1QueueResponseToJSON(
  accountV1QueueResponse: AccountV1QueueResponse,
): string {
  return JSON.stringify(
    AccountV1QueueResponse$outboundSchema.parse(accountV1QueueResponse),
  );
}

export function accountV1QueueResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountV1QueueResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountV1QueueResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountV1QueueResponse' from JSON`,
  );
}
