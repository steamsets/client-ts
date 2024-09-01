/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SteamSetsCore } from "../core.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
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
 * Get Account DataPoints
 */
export async function accountAccountV1GetDataPoints(
    client$: SteamSetsCore,
    request: operations.AccountV1GetDataPointsRequest,
    options?: RequestOptions
): Promise<
    Result<
        operations.AccountV1GetDataPointsResponse,
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
        (value$) => operations.AccountV1GetDataPointsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$.AccountSearch, { explode: true });

    const path$ = pathToFunc("/account.v1.AccountService/GetDataPoints")();

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": encodeSimple$("User-Agent", payload$["User-Agent"], {
            explode: false,
            charEncoding: "none",
        }),
        "X-Forwarded-For": encodeSimple$("X-Forwarded-For", payload$["X-Forwarded-For"], {
            explode: false,
            charEncoding: "none",
        }),
    });

    const session$ = await extractSecurity(client$.options$.session);
    const security$ = session$ == null ? {} : { session: session$ };
    const context = {
        operationID: "account.v1.getDataPoints",
        oAuth2Scopes: [],
        securitySource: client$.options$.session,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "POST",
            path: path$,
            headers: headers$,
            body: body$,
            uaHeader: "x-speakeasy-user-agent",
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "404", "422", "4XX", "500", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
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
        operations.AccountV1GetDataPointsResponse,
        | errors.ErrorModel
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.AccountV1GetDataPointsResponse$inboundSchema, {
            key: "V1AccountDataPointsResponseBody",
        }),
        m$.jsonErr([400, 404, 422, 500], errors.ErrorModel$inboundSchema, {
            ctype: "application/problem+json",
        }),
        m$.fail(["4XX", "5XX"])
    )(response, request$, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
