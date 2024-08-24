/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountAccountV1ConnectionConnect } from "../funcs/accountAccountV1ConnectionConnect.js";
import { accountAccountV1ConnectionDeleteConnection } from "../funcs/accountAccountV1ConnectionDeleteConnection.js";
import { accountAccountV1ConnectionUpdateConnection } from "../funcs/accountAccountV1ConnectionUpdateConnection.js";
import { accountAccountV1ConnectionVerifyConnection } from "../funcs/accountAccountV1ConnectionVerifyConnection.js";
import { accountAccountV1GetApps } from "../funcs/accountAccountV1GetApps.js";
import { accountAccountV1GetBadges } from "../funcs/accountAccountV1GetBadges.js";
import { accountAccountV1SessionDelete } from "../funcs/accountAccountV1SessionDelete.js";
import { accountAccountV1SessionGet } from "../funcs/accountAccountV1SessionGet.js";
import { accountAccountV1SessionLogin } from "../funcs/accountAccountV1SessionLogin.js";
import { accountAccountV1SettingsDeleteImages } from "../funcs/accountAccountV1SettingsDeleteImages.js";
import { accountAccountV1SettingsGenerateApiKey } from "../funcs/accountAccountV1SettingsGenerateApiKey.js";
import { accountAccountV1SettingsGet } from "../funcs/accountAccountV1SettingsGet.js";
import { accountAccountV1SettingsSendEmailVerification } from "../funcs/accountAccountV1SettingsSendEmailVerification.js";
import { accountAccountV1SettingsUpdate } from "../funcs/accountAccountV1SettingsUpdate.js";
import { accountAccountV1SettingsUpdateImage } from "../funcs/accountAccountV1SettingsUpdateImage.js";
import { accountAccountV1SettingsUploadImages } from "../funcs/accountAccountV1SettingsUploadImages.js";
import { accountAccountV1SettingsVerfyEmail } from "../funcs/accountAccountV1SettingsVerfyEmail.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Account extends ClientSDK {
    /**
     * Connect a new Social Provider
     */
    async accountV1ConnectionConnect(
        request: components.V1ConnectRequestBody,
        options?: RequestOptions
    ): Promise<components.V1ConnectResponseBody> {
        return unwrapAsync(accountAccountV1ConnectionConnect(this, request, options));
    }

    /**
     * Remove a connection
     */
    async accountV1ConnectionDeleteConnection(
        request: components.V1DeleteConnectionRequestBody,
        options?: RequestOptions
    ): Promise<components.V1DeleteConnectionResponseBody> {
        return unwrapAsync(accountAccountV1ConnectionDeleteConnection(this, request, options));
    }

    /**
     * Delete mulitple imagest
     */
    async accountV1SettingsDeleteImages(
        request: components.V1DeleteImagesRequestBody,
        options?: RequestOptions
    ): Promise<components.V1DeleteImagesResponseBody> {
        return unwrapAsync(accountAccountV1SettingsDeleteImages(this, request, options));
    }

    /**
     * Deletes a session, can also be used to logout
     */
    async accountV1SessionDelete(
        request: components.V1DeleteSessionRequestBody,
        options?: RequestOptions
    ): Promise<components.V1DeleteSessionResponseBody> {
        return unwrapAsync(accountAccountV1SessionDelete(this, request, options));
    }

    /**
     * Generate a new API key for the account
     */
    async accountV1SettingsGenerateApiKey(
        options?: RequestOptions
    ): Promise<components.V1GenerateApiKeyResponseBody> {
        return unwrapAsync(accountAccountV1SettingsGenerateApiKey(this, options));
    }

    /**
     * Get Account Apps
     */
    async accountV1GetApps(
        request: components.AccountSearch,
        options?: RequestOptions
    ): Promise<components.V1AccountsAppsResponseBody> {
        return unwrapAsync(accountAccountV1GetApps(this, request, options));
    }

    /**
     * Get Account Badges
     */
    async accountV1GetBadges(
        request: components.AccountSearch,
        options?: RequestOptions
    ): Promise<components.V1BadgesResponseBody> {
        return unwrapAsync(accountAccountV1GetBadges(this, request, options));
    }

    /**
     * Gets all session data
     */
    async accountV1SessionGet(options?: RequestOptions): Promise<components.V1GetSessionBody> {
        return unwrapAsync(accountAccountV1SessionGet(this, options));
    }

    /**
     * Gets all settings for the account
     */
    async accountV1SettingsGet(options?: RequestOptions): Promise<components.V1GetSettingsBody> {
        return unwrapAsync(accountAccountV1SettingsGet(this, options));
    }

    /**
     * Logs a user in and creates a new session
     */
    async accountV1SessionLogin(
        request: operations.AccountV1SessionLoginRequest,
        security: operations.AccountV1SessionLoginSecurity,
        options?: RequestOptions
    ): Promise<components.V1LoginResponseBody> {
        return unwrapAsync(accountAccountV1SessionLogin(this, request, security, options));
    }

    /**
     * Resend the verification code for an email
     */
    async accountV1SettingsSendEmailVerification(
        request: operations.AccountV1SettingsSendEmailVerificationRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(accountAccountV1SettingsSendEmailVerification(this, request, options));
    }

    /**
     * Make a connection visible/invisible
     */
    async accountV1ConnectionUpdateConnection(
        request: components.V1UpdateConnectionRequestBody,
        options?: RequestOptions
    ): Promise<components.V1UpdateConnectionResponseBody> {
        return unwrapAsync(accountAccountV1ConnectionUpdateConnection(this, request, options));
    }

    /**
     * Update one of the uploaded images
     */
    async accountV1SettingsUpdateImage(
        request: components.V1UpdateImageRequestBody,
        options?: RequestOptions
    ): Promise<components.V1UpdateImageResponseBody> {
        return unwrapAsync(accountAccountV1SettingsUpdateImage(this, request, options));
    }

    /**
     * Update settings for the logged in account
     */
    async accountV1SettingsUpdate(
        request: operations.AccountV1SettingsUpdateRequest,
        options?: RequestOptions
    ): Promise<components.V1UpdateSettingsResponseBody> {
        return unwrapAsync(accountAccountV1SettingsUpdate(this, request, options));
    }

    /**
     * Multi Upload Endpoint for images
     */
    async accountV1SettingsUploadImages(
        request: components.V1UploadImagesRequestBody,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(accountAccountV1SettingsUploadImages(this, request, options));
    }

    /**
     * Verify a domain connection only atm
     */
    async accountV1ConnectionVerifyConnection(
        request: components.V1VerifyConnectionRequestBody,
        options?: RequestOptions
    ): Promise<components.V1VerifyConnectionResponseBody> {
        return unwrapAsync(accountAccountV1ConnectionVerifyConnection(this, request, options));
    }

    /**
     * Verify the email by passing in the code the user should've gotten
     */
    async accountV1SettingsVerfyEmail(
        request: components.V1VerifyEmailRequestBody,
        options?: RequestOptions
    ): Promise<components.V1VerifyEmailResponseBody> {
        return unwrapAsync(accountAccountV1SettingsVerfyEmail(this, request, options));
    }
}
