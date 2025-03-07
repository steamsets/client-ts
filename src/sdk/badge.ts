/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { badgeBadgeV1TagsSuggest } from "../funcs/badgeBadgeV1TagsSuggest.js";
import { badgeGetTags } from "../funcs/badgeGetTags.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
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

  async badgeV1TagsSuggest(
    request: components.V1BadgeTagsSuggestRequestBody,
    options?: RequestOptions,
  ): Promise<operations.BadgeV1TagsSuggestResponse> {
    return unwrapAsync(badgeBadgeV1TagsSuggest(
      this,
      request,
      options,
    ));
  }
}
