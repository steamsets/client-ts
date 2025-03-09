/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { badgeGetTags } from "../funcs/badgeGetTags.js";
import { badgeSearch } from "../funcs/badgeSearch.js";
import { badgeSuggest } from "../funcs/badgeSuggest.js";
import { badgeSuggestTags } from "../funcs/badgeSuggestTags.js";
import { badgeTag } from "../funcs/badgeTag.js";
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

  async search(
    request: components.V1SearchRequest,
    options?: RequestOptions,
  ): Promise<operations.BadgeV1SearchResponse> {
    return unwrapAsync(badgeSearch(
      this,
      request,
      options,
    ));
  }

  async suggest(
    request: components.V1BadgeSearchSuggesttRequestBody,
    options?: RequestOptions,
  ): Promise<operations.BadgeV1SearchSuggestResponse> {
    return unwrapAsync(badgeSuggest(
      this,
      request,
      options,
    ));
  }

  async suggestTags(
    request: components.V1BadgeTagsSuggestRequestBody,
    options?: RequestOptions,
  ): Promise<operations.BadgeV1TagsSuggestResponse> {
    return unwrapAsync(badgeSuggestTags(
      this,
      request,
      options,
    ));
  }

  async tag(
    request: components.V1BadgeTagRequestBody,
    options?: RequestOptions,
  ): Promise<operations.BadgeV1TagResponse> {
    return unwrapAsync(badgeTag(
      this,
      request,
      options,
    ));
  }
}
