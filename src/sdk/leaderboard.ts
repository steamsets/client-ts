/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { leaderboardLeaderboardV1GetAccount } from "../funcs/leaderboardLeaderboardV1GetAccount.js";
import { leaderboardLeaderboardV1GetBadges } from "../funcs/leaderboardLeaderboardV1GetBadges.js";
import { leaderboardLeaderboardV1GetGroup } from "../funcs/leaderboardLeaderboardV1GetGroup.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Leaderboard extends ClientSDK {
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

  async leaderboardV1GetBadges(
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetBadgesResponse> {
    return unwrapAsync(leaderboardLeaderboardV1GetBadges(
      this,
      options,
    ));
  }

  async leaderboardV1GetGroup(
    request: components.V1GroupLeaderboardRequestBody,
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetGroupResponse> {
    return unwrapAsync(leaderboardLeaderboardV1GetGroup(
      this,
      request,
      options,
    ));
  }
}
