/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { eventsGet } from "../funcs/eventsGet.js";
import { eventsUpdate } from "../funcs/eventsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Events extends ClientSDK {
  async get(
    options?: RequestOptions,
  ): Promise<operations.AdminV1GetEventsResponse> {
    return unwrapAsync(eventsGet(
      this,
      options,
    ));
  }

  async update(
    request: components.V1AdminUpdateEventRequestBody,
    options?: RequestOptions,
  ): Promise<operations.AdminV1UpdateEventResponse> {
    return unwrapAsync(eventsUpdate(
      this,
      request,
      options,
    ));
  }
}
