/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectionAccountV1ConnectionConnect } from "../funcs/connectionAccountV1ConnectionConnect.js";
import { connectionAccountV1ConnectionDeleteConnection } from "../funcs/connectionAccountV1ConnectionDeleteConnection.js";
import { connectionAccountV1ConnectionUpdateConnection } from "../funcs/connectionAccountV1ConnectionUpdateConnection.js";
import { connectionAccountV1ConnectionVerifyConnection } from "../funcs/connectionAccountV1ConnectionVerifyConnection.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Connection extends ClientSDK {
  async accountV1ConnectionConnect(
    request: components.V1ConnectRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionConnectResponse> {
    return unwrapAsync(connectionAccountV1ConnectionConnect(
      this,
      request,
      options,
    ));
  }

  async accountV1ConnectionDeleteConnection(
    request: components.V1DeleteConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionDeleteConnectionResponse> {
    return unwrapAsync(connectionAccountV1ConnectionDeleteConnection(
      this,
      request,
      options,
    ));
  }

  async accountV1ConnectionUpdateConnection(
    request: components.V1UpdateConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionUpdateConnectionResponse> {
    return unwrapAsync(connectionAccountV1ConnectionUpdateConnection(
      this,
      request,
      options,
    ));
  }

  async accountV1ConnectionVerifyConnection(
    request: components.V1VerifyConnectionRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AccountV1ConnectionVerifyConnectionResponse> {
    return unwrapAsync(connectionAccountV1ConnectionVerifyConnection(
      this,
      request,
      options,
    ));
  }
}
