/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { locationLocation } from "../funcs/locationLocation.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Location extends ClientSDK {
  /**
   * Location List
   *
   * @remarks
   * Get all of our available locations
   */
  async location(
    security: operations.LocationSecurity,
    options?: RequestOptions,
  ): Promise<operations.LocationResponse> {
    return unwrapAsync(locationLocation(
      this,
      security,
      options,
    ));
  }
}
