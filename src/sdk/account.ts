/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountBookmarkBadge } from "../funcs/accountBookmarkBadge.js";
import { accountCreateConnection } from "../funcs/accountCreateConnection.js";
import { accountCreateDeveloperApp } from "../funcs/accountCreateDeveloperApp.js";
import { accountDeleteConnection } from "../funcs/accountDeleteConnection.js";
import { accountDeleteDeveloperApp } from "../funcs/accountDeleteDeveloperApp.js";
import { accountDeleteImages } from "../funcs/accountDeleteImages.js";
import { accountDeleteSession } from "../funcs/accountDeleteSession.js";
import { accountGetDataPoints } from "../funcs/accountGetDataPoints.js";
import { accountGetInfo } from "../funcs/accountGetInfo.js";
import { accountGetMeta } from "../funcs/accountGetMeta.js";
import { accountGetSession } from "../funcs/accountGetSession.js";
import { accountGetSettings } from "../funcs/accountGetSettings.js";
import { accountListApps } from "../funcs/accountListApps.js";
import { accountListBadgeBookmarks } from "../funcs/accountListBadgeBookmarks.js";
import { accountListBadges } from "../funcs/accountListBadges.js";
import { accountListFriends } from "../funcs/accountListFriends.js";
import { accountListImages } from "../funcs/accountListImages.js";
import { accountListLeaderboardHistory } from "../funcs/accountListLeaderboardHistory.js";
import { accountListOwnedBadges } from "../funcs/accountListOwnedBadges.js";
import { accountLogin } from "../funcs/accountLogin.js";
import { accountLogout } from "../funcs/accountLogout.js";
import { accountQueue } from "../funcs/accountQueue.js";
import { accountReconnectConnection } from "../funcs/accountReconnectConnection.js";
import { accountRefreshSession } from "../funcs/accountRefreshSession.js";
import { accountSendEmailVerification } from "../funcs/accountSendEmailVerification.js";
import { accountSubscribeEmail } from "../funcs/accountSubscribeEmail.js";
import { accountUpdateConnection } from "../funcs/accountUpdateConnection.js";
import { accountUpdateDeveloperApp } from "../funcs/accountUpdateDeveloperApp.js";
import { accountUpdateImages } from "../funcs/accountUpdateImages.js";
import { accountUpdateRole } from "../funcs/accountUpdateRole.js";
import { accountUpdateSettings } from "../funcs/accountUpdateSettings.js";
import { accountUpdateVanity } from "../funcs/accountUpdateVanity.js";
import { accountUploadImages } from "../funcs/accountUploadImages.js";
import { accountVerifyConnection } from "../funcs/accountVerifyConnection.js";
import { accountVerifyEmail } from "../funcs/accountVerifyEmail.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Account extends ClientSDK {
  async bookmarkBadge(
    request: components.V1AccountBookmarkBadgeRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountBookmarkBadgeResponse> {
    return unwrapAsync(accountBookmarkBadge(
      this,
      request,
      options,
    ));
  }

  async createConnection(
    request: components.V1AccountCreateConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountCreateConnectionResponse> {
    return unwrapAsync(accountCreateConnection(
      this,
      request,
      options,
    ));
  }

  async createDeveloperApp(
    request: components.V1AccountCreateDeveloperAppRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountCreateDeveloperAppResponse> {
    return unwrapAsync(accountCreateDeveloperApp(
      this,
      request,
      options,
    ));
  }

  async deleteConnection(
    request: components.V1AccountDeleteConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountDeleteConnectionResponse> {
    return unwrapAsync(accountDeleteConnection(
      this,
      request,
      options,
    ));
  }

  async deleteDeveloperApp(
    request: components.V1AccountDeleteDeveloperAppRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountDeleteDeveloperAppResponse> {
    return unwrapAsync(accountDeleteDeveloperApp(
      this,
      request,
      options,
    ));
  }

  async deleteImages(
    request: components.V1AccountDeleteImagesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountDeleteImagesResponse> {
    return unwrapAsync(accountDeleteImages(
      this,
      request,
      options,
    ));
  }

  async deleteSession(
    request: components.V1AccountDeleteSessionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountDeleteSessionResponse> {
    return unwrapAsync(accountDeleteSession(
      this,
      request,
      options,
    ));
  }

  async getDataPoints(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountGetDataPointsResponse> {
    return unwrapAsync(accountGetDataPoints(
      this,
      request,
      options,
    ));
  }

  async getInfo(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountGetInfoResponse> {
    return unwrapAsync(accountGetInfo(
      this,
      request,
      options,
    ));
  }

  async getMeta(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountGetMetaResponse> {
    return unwrapAsync(accountGetMeta(
      this,
      request,
      options,
    ));
  }

  async getSession(
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountGetSessionResponse> {
    return unwrapAsync(accountGetSession(
      this,
      options,
    ));
  }

  async getSettings(
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountGetSettingsResponse> {
    return unwrapAsync(accountGetSettings(
      this,
      options,
    ));
  }

  async listApps(
    request: components.V1AccountListAppsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountListAppsResponse> {
    return unwrapAsync(accountListApps(
      this,
      request,
      options,
    ));
  }

  async listBadgeBookmarks(
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountListBadgeBookmarksResponse> {
    return unwrapAsync(accountListBadgeBookmarks(
      this,
      options,
    ));
  }

  async listBadges(
    request: components.V1AccountListBadgesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountListBadgesResponse> {
    return unwrapAsync(accountListBadges(
      this,
      request,
      options,
    ));
  }

  async listFriends(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountListFriendsResponse> {
    return unwrapAsync(accountListFriends(
      this,
      request,
      options,
    ));
  }

  async listImages(
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountListImagesResponse> {
    return unwrapAsync(accountListImages(
      this,
      options,
    ));
  }

  async listLeaderboardHistory(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountListLeaderboardHistoryResponse> {
    return unwrapAsync(accountListLeaderboardHistory(
      this,
      request,
      options,
    ));
  }

  async listOwnedBadges(
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountListOwnedBadgesResponse> {
    return unwrapAsync(accountListOwnedBadges(
      this,
      options,
    ));
  }

  async login(
    request: operations.PostV1AccountLoginRequest,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountLoginResponse> {
    return unwrapAsync(accountLogin(
      this,
      request,
      options,
    ));
  }

  async logout(
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountLogoutResponse> {
    return unwrapAsync(accountLogout(
      this,
      options,
    ));
  }

  async queue(
    request: components.V1AccountQueueRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountQueueResponse> {
    return unwrapAsync(accountQueue(
      this,
      request,
      options,
    ));
  }

  async reconnectConnection(
    request: components.V1AccountReconnectRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountReconnectConnectionResponse> {
    return unwrapAsync(accountReconnectConnection(
      this,
      request,
      options,
    ));
  }

  async refreshSession(
    request: operations.PostV1AccountRefreshSessionRequest,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountRefreshSessionResponse> {
    return unwrapAsync(accountRefreshSession(
      this,
      request,
      options,
    ));
  }

  async sendEmailVerification(
    request: operations.PostV1AccountSendEmailVerificationRequest,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountSendEmailVerificationResponse> {
    return unwrapAsync(accountSendEmailVerification(
      this,
      request,
      options,
    ));
  }

  async subscribeEmail(
    request: operations.PostV1AccountSubscribeEmailRequest,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountSubscribeEmailResponse> {
    return unwrapAsync(accountSubscribeEmail(
      this,
      request,
      options,
    ));
  }

  async updateConnection(
    request: components.V1AccountUpdateConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountUpdateConnectionResponse> {
    return unwrapAsync(accountUpdateConnection(
      this,
      request,
      options,
    ));
  }

  async updateDeveloperApp(
    request: components.V1AccountDeveloperAppUpdateRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountUpdateDeveloperAppResponse> {
    return unwrapAsync(accountUpdateDeveloperApp(
      this,
      request,
      options,
    ));
  }

  async updateImages(
    request: components.V1AccountUpdateImageRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountUpdateImagesResponse> {
    return unwrapAsync(accountUpdateImages(
      this,
      request,
      options,
    ));
  }

  async updateRole(
    request: components.V1AccountUpdateRoleRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountUpdateRoleResponse> {
    return unwrapAsync(accountUpdateRole(
      this,
      request,
      options,
    ));
  }

  async updateSettings(
    request: operations.PostV1AccountUpdateSettingsRequest,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountUpdateSettingsResponse> {
    return unwrapAsync(accountUpdateSettings(
      this,
      request,
      options,
    ));
  }

  async updateVanity(
    request: components.V1AccountUpdateVanityRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountUpdateVanityResponse> {
    return unwrapAsync(accountUpdateVanity(
      this,
      request,
      options,
    ));
  }

  async uploadImages(
    request: components.V1AccountUploadImagesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountUploadImagesResponse> {
    return unwrapAsync(accountUploadImages(
      this,
      request,
      options,
    ));
  }

  async verifyConnection(
    request: components.V1AccountVerifyConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountVerifyConnectionResponse> {
    return unwrapAsync(accountVerifyConnection(
      this,
      request,
      options,
    ));
  }

  async verifyEmail(
    request: components.V1AccountVerifyEmailRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV1AccountVerifyEmailResponse> {
    return unwrapAsync(accountVerifyEmail(
      this,
      request,
      options,
    ));
  }
}
