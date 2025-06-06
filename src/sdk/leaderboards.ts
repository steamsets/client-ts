/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { leaderboardsList } from "../funcs/leaderboardsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Leaderboards extends ClientSDK {
  async list(
    options?: RequestOptions,
  ): Promise<operations.LeaderboardListBadgesResponse> {
    return unwrapAsync(leaderboardsList(
      this,
      options,
    ));
  }
}
