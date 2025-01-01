/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { badgeAccountV1BookmarkBadge } from "../funcs/badgeAccountV1BookmarkBadge.js";
import { badgeAccountV1GetBadgeBookmarks } from "../funcs/badgeAccountV1GetBadgeBookmarks.js";
import { badgeBadgeV1Search } from "../funcs/badgeBadgeV1Search.js";
import { badgeGetTags } from "../funcs/badgeGetTags.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Badge extends ClientSDK {
  async accountV1BookmarkBadge(
    request: components.V1AccountBadgeBookmarkRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1BookmarkBadgeResponse> {
    return unwrapAsync(badgeAccountV1BookmarkBadge(
      this,
      request,
      options,
    ));
  }

  async accountV1GetBadgeBookmarks(
    options?: RequestOptions,
  ): Promise<operations.AccountV1GetBadgeBookmarksResponse> {
    return unwrapAsync(badgeAccountV1GetBadgeBookmarks(
      this,
      options,
    ));
  }

  async getTags(
    options?: RequestOptions,
  ): Promise<operations.BadgeV1TagsResponse> {
    return unwrapAsync(badgeGetTags(
      this,
      options,
    ));
  }

  async badgeV1Search(
    request: components.V1SearchRequest,
    options?: RequestOptions,
  ): Promise<operations.BadgeV1SearchResponse> {
    return unwrapAsync(badgeBadgeV1Search(
      this,
      request,
      options,
    ));
  }
}
