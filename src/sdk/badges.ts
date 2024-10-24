/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { badgesTag } from "../funcs/badgesTag.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Badges extends ClientSDK {
  async tag(
    request: components.V1BadgeTagRequestBody,
    options?: RequestOptions,
  ): Promise<operations.BadgeV1TagResponse> {
    return unwrapAsync(badgesTag(
      this,
      request,
      options,
    ));
  }
}
