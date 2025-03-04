/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { badgeGetTags } from "../funcs/badgeGetTags.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Badge extends ClientSDK {
  async getTags(
    options?: RequestOptions,
  ): Promise<operations.BadgeV1TagsResponse> {
    return unwrapAsync(badgeGetTags(
      this,
      options,
    ));
  }
}
