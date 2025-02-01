/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { settingsAccountV1SettingsUpdateRole } from "../funcs/settingsAccountV1SettingsUpdateRole.js";
import { settingsGet } from "../funcs/settingsGet.js";
import { settingsSendEmailVerification } from "../funcs/settingsSendEmailVerification.js";
import { settingsUpdate } from "../funcs/settingsUpdate.js";
import { settingsVerifyEmail } from "../funcs/settingsVerifyEmail.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Settings extends ClientSDK {
  async get(
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsGetResponse> {
    return unwrapAsync(settingsGet(
      this,
      options,
    ));
  }

  async sendEmailVerification(
    request: operations.AccountV1SettingsSendEmailVerificationRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsSendEmailVerificationResponse> {
    return unwrapAsync(settingsSendEmailVerification(
      this,
      request,
      options,
    ));
  }

  async accountV1SettingsUpdateRole(
    request: components.V1UpdateRoleRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsUpdateRoleResponse> {
    return unwrapAsync(settingsAccountV1SettingsUpdateRole(
      this,
      request,
      options,
    ));
  }

  async update(
    request: operations.AccountV1SettingsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsUpdateResponse> {
    return unwrapAsync(settingsUpdate(
      this,
      request,
      options,
    ));
  }

  async verifyEmail(
    request: components.V1VerifyEmailRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsVerfyEmailResponse> {
    return unwrapAsync(settingsVerifyEmail(
      this,
      request,
      options,
    ));
  }
}
