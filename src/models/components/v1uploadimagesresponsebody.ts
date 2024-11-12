/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Image,
  Image$inboundSchema,
  Image$Outbound,
  Image$outboundSchema,
} from "./image.js";

export type V1UploadImagesResponseBody = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * The images uploaded
   */
  images: Array<Image> | null;
};

/** @internal */
export const V1UploadImagesResponseBody$inboundSchema: z.ZodType<
  V1UploadImagesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  images: z.nullable(z.array(Image$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "$schema": "dollarSchema",
  });
});

/** @internal */
export type V1UploadImagesResponseBody$Outbound = {
  $schema?: string | undefined;
  images: Array<Image$Outbound> | null;
};

/** @internal */
export const V1UploadImagesResponseBody$outboundSchema: z.ZodType<
  V1UploadImagesResponseBody$Outbound,
  z.ZodTypeDef,
  V1UploadImagesResponseBody
> = z.object({
  dollarSchema: z.string().optional(),
  images: z.nullable(z.array(Image$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    dollarSchema: "$schema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1UploadImagesResponseBody$ {
  /** @deprecated use `V1UploadImagesResponseBody$inboundSchema` instead. */
  export const inboundSchema = V1UploadImagesResponseBody$inboundSchema;
  /** @deprecated use `V1UploadImagesResponseBody$outboundSchema` instead. */
  export const outboundSchema = V1UploadImagesResponseBody$outboundSchema;
  /** @deprecated use `V1UploadImagesResponseBody$Outbound` instead. */
  export type Outbound = V1UploadImagesResponseBody$Outbound;
}
