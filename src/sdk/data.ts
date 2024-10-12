/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dataAccountV1GetApps } from "../funcs/dataAccountV1GetApps.js";
import { dataAccountV1GetBadges } from "../funcs/dataAccountV1GetBadges.js";
import { dataAccountV1GetDataPoints } from "../funcs/dataAccountV1GetDataPoints.js";
import { dataAccountV1GetFriends } from "../funcs/dataAccountV1GetFriends.js";
import { dataAccountV1GetInfo } from "../funcs/dataAccountV1GetInfo.js";
import { dataAccountV1GetLeaderboardHistory } from "../funcs/dataAccountV1GetLeaderboardHistory.js";
import { dataAccountV1GetStaff } from "../funcs/dataAccountV1GetStaff.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Data extends ClientSDK {
  /**
   * Get Account Apps
   */
  async accountV1GetApps(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetAppsResponse> {
    return unwrapAsync(dataAccountV1GetApps(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Account Badges
   */
  async accountV1GetBadges(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetBadgesResponse> {
    return unwrapAsync(dataAccountV1GetBadges(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Account DataPoints
   */
  async accountV1GetDataPoints(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetDataPointsResponse> {
    return unwrapAsync(dataAccountV1GetDataPoints(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Account Friends
   */
  async accountV1GetFriends(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetFriendsResponse> {
    return unwrapAsync(dataAccountV1GetFriends(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Account Info
   */
  async accountV1GetInfo(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetInfoResponse> {
    return unwrapAsync(dataAccountV1GetInfo(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Account Leaderboard History
   */
  async accountV1GetLeaderboardHistory(
    request: components.AccountSearch,
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetLeaderboardHistoryResponse> {
    return unwrapAsync(dataAccountV1GetLeaderboardHistory(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Staff Members and their info
   */
  async accountV1GetStaff(
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetStaffResponse> {
    return unwrapAsync(dataAccountV1GetStaff(
      this,
      options,
    ));
  }
}
