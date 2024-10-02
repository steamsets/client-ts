/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { leaderboardAccountV1LeaderboardPreview } from "../funcs/leaderboardAccountV1LeaderboardPreview.js";
import { leaderboardLeaderboardV1GetAccount } from "../funcs/leaderboardLeaderboardV1GetAccount.js";
import { leaderboardLeaderboardV1GetBadges } from "../funcs/leaderboardLeaderboardV1GetBadges.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Leaderboard extends ClientSDK {
  /**
   * Preview what a given score would result in
   */
  async accountV1LeaderboardPreview(
    request: components.V1AccountLeaderboardPreviewRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1LeaderboardPreviewResponse> {
    return unwrapAsync(leaderboardAccountV1LeaderboardPreview(
      this,
      request,
      options,
    ));
  }

  /**
   * Get an leaderboard for accounts
   */
  async leaderboardV1GetAccount(
    request: components.V1AccountLeaderboardRequestBody,
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetAccountResponse> {
    return unwrapAsync(leaderboardLeaderboardV1GetAccount(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all available badges for leaderboards
   */
  async leaderboardV1GetBadges(
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetBadgesResponse> {
    return unwrapAsync(leaderboardLeaderboardV1GetBadges(
      this,
      options,
    ));
  }
}
