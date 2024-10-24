/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { leaderboardGetAccount } from "../funcs/leaderboardGetAccount.js";
import { leaderboardGetBadges } from "../funcs/leaderboardGetBadges.js";
import { leaderboardGetGroup } from "../funcs/leaderboardGetGroup.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Leaderboard extends ClientSDK {
  async getAccount(
    request: components.V1AccountLeaderboardRequestBody,
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetAccountResponse> {
    return unwrapAsync(leaderboardGetAccount(
      this,
      request,
      options,
    ));
  }

  async getBadges(
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetBadgesResponse> {
    return unwrapAsync(leaderboardGetBadges(
      this,
      options,
    ));
  }

  async getGroup(
    request: components.V1GroupLeaderboardRequestBody,
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetGroupResponse> {
    return unwrapAsync(leaderboardGetGroup(
      this,
      request,
      options,
    ));
  }
}
