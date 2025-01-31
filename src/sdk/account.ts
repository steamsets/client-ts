/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountAccountV1ConnectionReconnect } from "../funcs/accountAccountV1ConnectionReconnect.js";
import { accountAccountV1GetBadgeBookmarks } from "../funcs/accountAccountV1GetBadgeBookmarks.js";
import { accountAccountV1GetOwnedBadges } from "../funcs/accountAccountV1GetOwnedBadges.js";
import { accountAccountV1ImagesGet } from "../funcs/accountAccountV1ImagesGet.js";
import { accountAccountV1ImagesUpdate } from "../funcs/accountAccountV1ImagesUpdate.js";
import { accountAdminV1UpdateResources } from "../funcs/accountAdminV1UpdateResources.js";
import { accountAdminV1UpdateRoles } from "../funcs/accountAdminV1UpdateRoles.js";
import { accountCreateDeveloperApp } from "../funcs/accountCreateDeveloperApp.js";
import { accountDeleteDeveloperApp } from "../funcs/accountDeleteDeveloperApp.js";
import { accountDeleteImages } from "../funcs/accountDeleteImages.js";
import { accountGetAccount } from "../funcs/accountGetAccount.js";
import { accountGetApps } from "../funcs/accountGetApps.js";
import { accountGetBadges } from "../funcs/accountGetBadges.js";
import { accountGetDataPoints } from "../funcs/accountGetDataPoints.js";
import { accountGetFriends } from "../funcs/accountGetFriends.js";
import { accountGetInfo } from "../funcs/accountGetInfo.js";
import { accountGetLeaderboardHistory } from "../funcs/accountGetLeaderboardHistory.js";
import { accountGetStaff } from "../funcs/accountGetStaff.js";
import { accountSendEmailVerification } from "../funcs/accountSendEmailVerification.js";
import { accountUpdateApp } from "../funcs/accountUpdateApp.js";
import { accountUploadImages } from "../funcs/accountUploadImages.js";
import { accountVerifyEmail } from "../funcs/accountVerifyEmail.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Account extends ClientSDK {
  async createDeveloperApp(
    request: components.V1DeveloperAppCreateRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsDeveloperAppCreateResponse> {
    return unwrapAsync(accountCreateDeveloperApp(
      this,
      request,
      options,
    ));
  }

  async deleteDeveloperApp(
    request: components.V1AccountDeveloperAppDeleteRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsDeveloperAppDeleteResponse> {
    return unwrapAsync(accountDeleteDeveloperApp(
      this,
      request,
      options,
    ));
  }

  async deleteImages(
    request: components.V1DeleteImagesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ImagesDeleteResponse> {
    return unwrapAsync(accountDeleteImages(
      this,
      request,
      options,
    ));
  }

  async updateApp(
    request: components.V1AccountDeveloperAppUpdateRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsDeveloperAppUpdateResponse> {
    return unwrapAsync(accountUpdateApp(
      this,
      request,
      options,
    ));
  }

  async getApps(
    request: components.V1AccountsAppsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetAppsResponse> {
    return unwrapAsync(accountGetApps(
      this,
      request,
      options,
    ));
  }

  async accountV1GetBadgeBookmarks(
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetBadgeBookmarksResponse> {
    return unwrapAsync(accountAccountV1GetBadgeBookmarks(
      this,
      options,
    ));
  }

  async getBadges(
    request: components.V1BadgesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetBadgesResponse> {
    return unwrapAsync(accountGetBadges(
      this,
      request,
      options,
    ));
  }

  async getDataPoints(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetDataPointsResponse> {
    return unwrapAsync(accountGetDataPoints(
      this,
      request,
      options,
    ));
  }

  async getFriends(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetFriendsResponse> {
    return unwrapAsync(accountGetFriends(
      this,
      request,
      options,
    ));
  }

  async accountV1ImagesGet(
    options?: RequestOptions,
  ): Promise<operations.AccountV1ImagesGetResponse> {
    return unwrapAsync(accountAccountV1ImagesGet(
      this,
      options,
    ));
  }

  async getInfo(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetInfoResponse> {
    return unwrapAsync(accountGetInfo(
      this,
      request,
      options,
    ));
  }

  async getLeaderboardHistory(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetLeaderboardHistoryResponse> {
    return unwrapAsync(accountGetLeaderboardHistory(
      this,
      request,
      options,
    ));
  }

  async accountV1GetOwnedBadges(
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetOwnedBadgesResponse> {
    return unwrapAsync(accountAccountV1GetOwnedBadges(
      this,
      options,
    ));
  }

  async getStaff(
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetStaffResponse> {
    return unwrapAsync(accountGetStaff(
      this,
      options,
    ));
  }

  async accountV1ConnectionReconnect(
    request: components.V1ReconnectRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionReconnectResponse> {
    return unwrapAsync(accountAccountV1ConnectionReconnect(
      this,
      request,
      options,
    ));
  }

  async sendEmailVerification(
    request: operations.AccountV1SettingsSendEmailVerificationRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsSendEmailVerificationResponse> {
    return unwrapAsync(accountSendEmailVerification(
      this,
      request,
      options,
    ));
  }

  async accountV1ImagesUpdate(
    request: components.V1UpdateImageRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ImagesUpdateResponse> {
    return unwrapAsync(accountAccountV1ImagesUpdate(
      this,
      request,
      options,
    ));
  }

  async uploadImages(
    request: components.V1UploadImagesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ImagesUploadResponse> {
    return unwrapAsync(accountUploadImages(
      this,
      request,
      options,
    ));
  }

  async verifyEmail(
    request: components.V1VerifyEmailRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SettingsVerfyEmailResponse> {
    return unwrapAsync(accountVerifyEmail(
      this,
      request,
      options,
    ));
  }

  async getAccount(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AdminV1GetAccountResponse> {
    return unwrapAsync(accountGetAccount(
      this,
      request,
      options,
    ));
  }

  async adminV1UpdateResources(
    request: components.V1AdminUpdateResourcesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AdminV1UpdateResourcesResponse> {
    return unwrapAsync(accountAdminV1UpdateResources(
      this,
      request,
      options,
    ));
  }

  async adminV1UpdateRoles(
    request: components.V1AdminUpdateRolessRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AdminV1UpdateRolesResponse> {
    return unwrapAsync(accountAdminV1UpdateRoles(
      this,
      request,
      options,
    ));
  }
}
