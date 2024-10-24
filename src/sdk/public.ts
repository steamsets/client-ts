/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { publicGetApps } from "../funcs/publicGetApps.js";
import { publicGetBadges } from "../funcs/publicGetBadges.js";
import { publicGetDataPoints } from "../funcs/publicGetDataPoints.js";
import { publicGetFriends } from "../funcs/publicGetFriends.js";
import { publicGetInfo } from "../funcs/publicGetInfo.js";
import { publicGetLeaderboardHistory } from "../funcs/publicGetLeaderboardHistory.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Public extends ClientSDK {
  async getApps(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetAppsResponse> {
    return unwrapAsync(publicGetApps(
      this,
      request,
      options,
    ));
  }

  async getBadges(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetBadgesResponse> {
    return unwrapAsync(publicGetBadges(
      this,
      request,
      options,
    ));
  }

  async getDataPoints(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetDataPointsResponse> {
    return unwrapAsync(publicGetDataPoints(
      this,
      request,
      options,
    ));
  }

  async getFriends(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetFriendsResponse> {
    return unwrapAsync(publicGetFriends(
      this,
      request,
      options,
    ));
  }

  async getInfo(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetInfoResponse> {
    return unwrapAsync(publicGetInfo(
      this,
      request,
      options,
    ));
  }

  async getLeaderboardHistory(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetLeaderboardHistoryResponse> {
    return unwrapAsync(publicGetLeaderboardHistory(
      this,
      request,
      options,
    ));
  }
}
