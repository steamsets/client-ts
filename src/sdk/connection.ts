/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountConnectionUpdate } from "../funcs/accountConnectionUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Connection extends ClientSDK {
  async update(
    request: components.V1UpdateConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionUpdateConnectionResponse> {
    return unwrapAsync(accountConnectionUpdate(
      this,
      request,
      options,
    ));
  }
}
