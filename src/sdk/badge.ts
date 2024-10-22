/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { badgeBadgeV1Tag } from "../funcs/badgeBadgeV1Tag.js";
import { badgeBadgeV1Tags } from "../funcs/badgeBadgeV1Tags.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Badge extends ClientSDK {
  async badgeV1Tags(
    request: components.V1BadgeTagsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.BadgeV1TagsResponse> {
    return unwrapAsync(badgeBadgeV1Tags(
      this,
      request,
      options,
    ));
  }

  async badgeV1Tag(
    request: components.V1BadgeTagRequestBody,
    options?: RequestOptions,
  ): Promise<operations.BadgeV1TagResponse> {
    return unwrapAsync(badgeBadgeV1Tag(
      this,
      request,
      options,
    ));
  }
}
