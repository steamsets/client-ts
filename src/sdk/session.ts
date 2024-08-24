/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sessionAccountV1SessionDelete } from "../funcs/sessionAccountV1SessionDelete.js";
import { sessionAccountV1SessionGet } from "../funcs/sessionAccountV1SessionGet.js";
import { sessionAccountV1SessionLogin } from "../funcs/sessionAccountV1SessionLogin.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Session extends ClientSDK {
    /**
     * Deletes a session, can also be used to logout
     */
    async accountV1SessionDelete(
        request: components.V1DeleteSessionRequestBody,
        options?: RequestOptions
    ): Promise<operations.AccountV1SessionDeleteResponse> {
        return unwrapAsync(sessionAccountV1SessionDelete(this, request, options));
    }

    /**
     * Gets all session data
     */
    async accountV1SessionGet(
        options?: RequestOptions
    ): Promise<operations.AccountV1SessionGetResponse> {
        return unwrapAsync(sessionAccountV1SessionGet(this, options));
    }

    /**
     * Logs a user in and creates a new session
     */
    async accountV1SessionLogin(
        request: operations.AccountV1SessionLoginRequest,
        security: operations.AccountV1SessionLoginSecurity,
        options?: RequestOptions
    ): Promise<operations.AccountV1SessionLoginResponse> {
        return unwrapAsync(sessionAccountV1SessionLogin(this, request, security, options));
    }
}
