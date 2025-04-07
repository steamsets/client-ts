/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { statsGet } from "../funcs/statsGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Stats extends ClientSDK {
  async get(
    options?: RequestOptions,
  ): Promise<operations.StatsGetStatsResponse> {
    return unwrapAsync(statsGet(
      this,
      options,
    ));
  }
}
