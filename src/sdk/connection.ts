/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectionDelete } from "../funcs/connectionDelete.js";
import { connectionReconnect } from "../funcs/connectionReconnect.js";
import { connectionUpdate } from "../funcs/connectionUpdate.js";
import { connectionVerify } from "../funcs/connectionVerify.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Connection extends ClientSDK {
  async delete(
    request: components.V1DeleteConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionDeleteConnectionResponse> {
    return unwrapAsync(connectionDelete(
      this,
      request,
      options,
    ));
  }

  async reconnect(
    request: components.V1ReconnectRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionReconnectResponse> {
    return unwrapAsync(connectionReconnect(
      this,
      request,
      options,
    ));
  }

  async update(
    request: components.V1UpdateConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionUpdateConnectionResponse> {
    return unwrapAsync(connectionUpdate(
      this,
      request,
      options,
    ));
  }

  async verify(
    request: components.V1VerifyConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionVerifyConnectionResponse> {
    return unwrapAsync(connectionVerify(
      this,
      request,
      options,
    ));
  }
}
