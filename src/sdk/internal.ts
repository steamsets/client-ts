/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { internalCheck } from "../funcs/internalCheck.js";
import { internalCreateDeveloperApp } from "../funcs/internalCreateDeveloperApp.js";
import { internalDeleteDeveloperApp } from "../funcs/internalDeleteDeveloperApp.js";
import { internalDeleteImages } from "../funcs/internalDeleteImages.js";
import { internalGetAccount } from "../funcs/internalGetAccount.js";
import { internalGetStaff } from "../funcs/internalGetStaff.js";
import { internalGetTags } from "../funcs/internalGetTags.js";
import { internalUpdateApp } from "../funcs/internalUpdateApp.js";
import { internalUploadImages } from "../funcs/internalUploadImages.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Internal extends ClientSDK {
  async createDeveloperApp(
    request: components.V1DeveloperAppCreateRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsDeveloperAppCreateResponse> {
    return unwrapAsync(internalCreateDeveloperApp(
      this,
      request,
      options,
    ));
  }

  async deleteDeveloperApp(
    request: components.V1AccountDeveloperAppDeleteRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsDeveloperAppDeleteResponse> {
    return unwrapAsync(internalDeleteDeveloperApp(
      this,
      request,
      options,
    ));
  }

  async deleteImages(
    request: components.V1DeleteImagesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ImagesDeleteResponse> {
    return unwrapAsync(internalDeleteImages(
      this,
      request,
      options,
    ));
  }

  async updateApp(
    request: components.V1AccountDeveloperAppUpdateRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsDeveloperAppUpdateResponse> {
    return unwrapAsync(internalUpdateApp(
      this,
      request,
      options,
    ));
  }

  async getStaff(
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetStaffResponse> {
    return unwrapAsync(internalGetStaff(
      this,
      options,
    ));
  }

  async uploadImages(
    request: components.V1UploadImagesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ImagesUploadResponse> {
    return unwrapAsync(internalUploadImages(
      this,
      request,
      options,
    ));
  }

  async getAccount(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AdminV1GetAccountResponse> {
    return unwrapAsync(internalGetAccount(
      this,
      request,
      options,
    ));
  }

  async getTags(
    options?: RequestOptions,
  ): Promise<operations.BadgeV1TagsResponse> {
    return unwrapAsync(internalGetTags(
      this,
      options,
    ));
  }

  /**
   * Liveness check
   *
   * @remarks
   * This endpoint checks if the service is alive.
   */
  async check(
    options?: RequestOptions,
  ): Promise<operations.LivenessResponse> {
    return unwrapAsync(internalCheck(
      this,
      options,
    ));
  }
}
