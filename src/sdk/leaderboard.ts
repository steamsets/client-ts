/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { leaderboardGetAccount } from "../funcs/leaderboardGetAccount.js";
import { leaderboardGetAccountMeta } from "../funcs/leaderboardGetAccountMeta.js";
import { leaderboardGetGroup } from "../funcs/leaderboardGetGroup.js";
import { leaderboardGetGroupMeta } from "../funcs/leaderboardGetGroupMeta.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Badges } from "./badges.js";

export class Leaderboard extends ClientSDK {
  private _badges?: Badges;
  get badges(): Badges {
    return (this._badges ??= new Badges(this._options));
  }

  async getAccount(
    request: components.V1AccountLeaderboardRequestBody,
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetAccountLeaderboardResponse> {
    return unwrapAsync(leaderboardGetAccount(
      this,
      request,
      options,
    ));
  }

  async getAccountMeta(
    request: components.V1LeaderboardAccountMetaRequestBody,
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetAccountLeaderboardMetaResponse> {
    return unwrapAsync(leaderboardGetAccountMeta(
      this,
      request,
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

  async getGroupMeta(
    request: components.V1LeaderboardGroupMetaRequestBody,
    options?: RequestOptions,
  ): Promise<operations.LeaderboardV1GetGroupLeaderboardMetaResponse> {
    return unwrapAsync(leaderboardGetGroupMeta(
      this,
      request,
      options,
    ));
  }
}
