/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountSessionDelete } from "../funcs/accountSessionDelete.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Session extends ClientSDK {
  async delete(
    request: components.V1DeleteSessionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SessionDeleteResponse> {
    return unwrapAsync(accountSessionDelete(
      this,
      request,
      options,
    ));
  }
}
