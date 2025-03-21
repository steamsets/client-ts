/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The Image Type
 */
export const V1UploadedImageType = {
  Avatar: "avatar",
  Background: "background",
  MiniBackground: "mini_background",
  AnimatedAvatar: "animated_avatar",
  AvatarFrame: "avatar_frame",
} as const;
/**
 * The Image Type
 */
export type V1UploadedImageType = ClosedEnum<typeof V1UploadedImageType>;

export type V1UploadedImage = {
  /**
   * The image data aka base64 encoded image
   */
  data: string;
  /**
   * The Image Type
   */
  type: V1UploadedImageType;
};

/** @internal */
export const V1UploadedImageType$inboundSchema: z.ZodNativeEnum<
  typeof V1UploadedImageType
> = z.nativeEnum(V1UploadedImageType);

/** @internal */
export const V1UploadedImageType$outboundSchema: z.ZodNativeEnum<
  typeof V1UploadedImageType
> = V1UploadedImageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1UploadedImageType$ {
  /** @deprecated use `V1UploadedImageType$inboundSchema` instead. */
  export const inboundSchema = V1UploadedImageType$inboundSchema;
  /** @deprecated use `V1UploadedImageType$outboundSchema` instead. */
  export const outboundSchema = V1UploadedImageType$outboundSchema;
}

/** @internal */
export const V1UploadedImage$inboundSchema: z.ZodType<
  V1UploadedImage,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.string(),
  type: V1UploadedImageType$inboundSchema,
});

/** @internal */
export type V1UploadedImage$Outbound = {
  data: string;
  type: string;
};

/** @internal */
export const V1UploadedImage$outboundSchema: z.ZodType<
  V1UploadedImage$Outbound,
  z.ZodTypeDef,
  V1UploadedImage
> = z.object({
  data: z.string(),
  type: V1UploadedImageType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1UploadedImage$ {
  /** @deprecated use `V1UploadedImage$inboundSchema` instead. */
  export const inboundSchema = V1UploadedImage$inboundSchema;
  /** @deprecated use `V1UploadedImage$outboundSchema` instead. */
  export const outboundSchema = V1UploadedImage$outboundSchema;
  /** @deprecated use `V1UploadedImage$Outbound` instead. */
  export type Outbound = V1UploadedImage$Outbound;
}

export function v1UploadedImageToJSON(
  v1UploadedImage: V1UploadedImage,
): string {
  return JSON.stringify(V1UploadedImage$outboundSchema.parse(v1UploadedImage));
}

export function v1UploadedImageFromJSON(
  jsonString: string,
): SafeParseResult<V1UploadedImage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1UploadedImage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1UploadedImage' from JSON`,
  );
}
