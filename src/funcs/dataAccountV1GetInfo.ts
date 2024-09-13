/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SteamSetsCore } from "../core.js";
import { encodeJSON as encodeJSON$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity, SecurityInput } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Get Account Info
 */
export async function dataAccountV1GetInfo(
  client$: SteamSetsCore,
  request: components.AccountSearch,
  security: operations.AccountV1GetInfoSecurity,
  options?: RequestOptions,
): Promise<
  Result<
    operations.AccountV1GetInfoResponse,
    | errors.ErrorModel
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => components.AccountSearch$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = encodeJSON$("body", payload$, { explode: true });

  const path$ = pathToFunc("/account.v1.AccountService/GetInfo")();

  const headers$ = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const security$: SecurityInput[][] = [
    [
      {
        fieldName: "api-key",
        type: "apiKey:header",
        value: security?.apiKey,
      },
      {
        fieldName: "Authorization",
        type: "http:bearer",
        value: security?.session,
      },
    ],
  ];
  const securitySettings$ = resolveSecurity(...security$);
  const context = {
    operationID: "account.v1.getInfo",
    oAuth2Scopes: [],
    securitySource: security,
  };

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
    path: path$,
    headers: headers$,
    body: body$,
    uaHeader: "x-speakeasy-user-agent",
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["404", "422", "429", "4XX", "500", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    HttpMeta: { Response: response, Request: request$ },
  };

  const [result$] = await m$.match<
    operations.AccountV1GetInfoResponse,
    | errors.ErrorModel
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.AccountV1GetInfoResponse$inboundSchema, {
      key: "AccountInfoBody",
    }),
    m$.jsonErr([404, 422, 429, 500], errors.ErrorModel$inboundSchema, {
      ctype: "application/problem+json",
    }),
    m$.fail(["4XX", "5XX"]),
  )(response, request$, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
