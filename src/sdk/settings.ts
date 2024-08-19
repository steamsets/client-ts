/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { settingsAccountV1SettingsDeleteImages } from "../funcs/settingsAccountV1SettingsDeleteImages.js";
import { settingsAccountV1SettingsGenerateApiKey } from "../funcs/settingsAccountV1SettingsGenerateApiKey.js";
import { settingsAccountV1SettingsGet } from "../funcs/settingsAccountV1SettingsGet.js";
import { settingsAccountV1SettingsSendEmailVerification } from "../funcs/settingsAccountV1SettingsSendEmailVerification.js";
import { settingsAccountV1SettingsUpdate } from "../funcs/settingsAccountV1SettingsUpdate.js";
import { settingsAccountV1SettingsUpdateImage } from "../funcs/settingsAccountV1SettingsUpdateImage.js";
import { settingsAccountV1SettingsVerfyEmail } from "../funcs/settingsAccountV1SettingsVerfyEmail.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Settings extends ClientSDK {
    /**
     * Delete mulitple imagest
     */
    async accountV1SettingsDeleteImages(
        request: components.V1DeleteImagesRequestBody,
        options?: RequestOptions
    ): Promise<components.V1DeleteImagesResponseBody> {
        return unwrapAsync(settingsAccountV1SettingsDeleteImages(this, request, options));
    }

    /**
     * Generate a new API key for the account
     */
    async accountV1SettingsGenerateApiKey(
        options?: RequestOptions
    ): Promise<components.V1GenerateApiKeyResponseBody> {
        return unwrapAsync(settingsAccountV1SettingsGenerateApiKey(this, options));
    }

    /**
     * Gets all settings for the account
     */
    async accountV1SettingsGet(options?: RequestOptions): Promise<components.V1GetSettingsBody> {
        return unwrapAsync(settingsAccountV1SettingsGet(this, options));
    }

    /**
     * Resend the verification code for an email
     */
    async accountV1SettingsSendEmailVerification(
        request: operations.AccountV1SettingsSendEmailVerificationRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(settingsAccountV1SettingsSendEmailVerification(this, request, options));
    }

    /**
     * Update one of the uploaded images
     */
    async accountV1SettingsUpdateImage(
        request: components.V1UpdateImageRequestBody,
        options?: RequestOptions
    ): Promise<components.V1UpdateImageResponseBody> {
        return unwrapAsync(settingsAccountV1SettingsUpdateImage(this, request, options));
    }

    /**
     * Update settings for the logged in account
     */
    async accountV1SettingsUpdate(
        request: operations.AccountV1SettingsUpdateRequest,
        options?: RequestOptions
    ): Promise<components.V1UpdateSettingsResponseBody> {
        return unwrapAsync(settingsAccountV1SettingsUpdate(this, request, options));
    }

    /**
     * Verify the email by passing in the code the user should've gotten
     */
    async accountV1SettingsVerfyEmail(
        request: components.V1VerifyEmailRequestBody,
        options?: RequestOptions
    ): Promise<components.V1VerifyEmailResponseBody> {
        return unwrapAsync(settingsAccountV1SettingsVerfyEmail(this, request, options));
    }
}
