/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sessionCreate } from "../funcs/sessionCreate.js";
import { sessionLogin } from "../funcs/sessionLogin.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Session extends ClientSDK {
  async create(
    request: operations.AccountV1SessionCreateRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SessionCreateResponse> {
    return unwrapAsync(sessionCreate(
      this,
      request,
      options,
    ));
  }

  async login(
    request: operations.AccountV1SessionLoginRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountV1SessionLoginResponse> {
    return unwrapAsync(sessionLogin(
      this,
      request,
      options,
    ));
  }
}
