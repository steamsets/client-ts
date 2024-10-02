/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SteamSetsCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
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
 * Logs a user in and creates a new session
 */
export async function sessionAccountV1SessionLogin(
  client: SteamSetsCore,
  request: operations.AccountV1SessionLoginRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.AccountV1SessionLoginResponse,
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
  const parsed = safeParse(
    request,
    (value) =>
      operations.AccountV1SessionLoginRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.LoginRequestBody, { explode: true });

  const path = pathToFunc("/account.v1.AccountService/Login")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "User-Agent": encodeSimple("User-Agent", payload["User-Agent"], {
      explode: false,
      charEncoding: "none",
    }),
    "X-Forwarded-For": encodeSimple(
      "X-Forwarded-For",
      payload["X-Forwarded-For"],
      { explode: false, charEncoding: "none" },
    ),
  });

  const secConfig = await extractSecurity(client._options.session);
  const securityInput = secConfig == null ? {} : { session: secConfig };
  const context = {
    operationID: "account.v1.session.login",
    oAuth2Scopes: [],
    securitySource: client._options.session,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    uaHeader: "x-speakeasy-user-agent",
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "422", "429", "4XX", "500", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.AccountV1SessionLoginResponse,
    | errors.ErrorModel
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.AccountV1SessionLoginResponse$inboundSchema, {
      key: "V1LoginResponseBody",
    }),
    M.jsonErr([400, 422, 429, 500], errors.ErrorModel$inboundSchema, {
      ctype: "application/problem+json",
    }),
    M.fail(["4XX", "5XX"]),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
