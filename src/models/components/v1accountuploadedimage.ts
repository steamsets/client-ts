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
export const V1AccountUploadedImageType = {
  Avatar: "avatar",
  Background: "background",
  MiniBackground: "mini_background",
  AnimatedAvatar: "animated_avatar",
  AvatarFrame: "avatar_frame",
} as const;
/**
 * The Image Type
 */
export type V1AccountUploadedImageType = ClosedEnum<
  typeof V1AccountUploadedImageType
>;

export type V1AccountUploadedImage = {
  /**
   * The image data aka base64 encoded image
   */
  data: string;
  /**
   * The Image Type
   */
  type: V1AccountUploadedImageType;
};

/** @internal */
export const V1AccountUploadedImageType$inboundSchema: z.ZodNativeEnum<
  typeof V1AccountUploadedImageType
> = z.nativeEnum(V1AccountUploadedImageType);

/** @internal */
export const V1AccountUploadedImageType$outboundSchema: z.ZodNativeEnum<
  typeof V1AccountUploadedImageType
> = V1AccountUploadedImageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountUploadedImageType$ {
  /** @deprecated use `V1AccountUploadedImageType$inboundSchema` instead. */
  export const inboundSchema = V1AccountUploadedImageType$inboundSchema;
  /** @deprecated use `V1AccountUploadedImageType$outboundSchema` instead. */
  export const outboundSchema = V1AccountUploadedImageType$outboundSchema;
}

/** @internal */
export const V1AccountUploadedImage$inboundSchema: z.ZodType<
  V1AccountUploadedImage,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.string(),
  type: V1AccountUploadedImageType$inboundSchema,
});

/** @internal */
export type V1AccountUploadedImage$Outbound = {
  data: string;
  type: string;
};

/** @internal */
export const V1AccountUploadedImage$outboundSchema: z.ZodType<
  V1AccountUploadedImage$Outbound,
  z.ZodTypeDef,
  V1AccountUploadedImage
> = z.object({
  data: z.string(),
  type: V1AccountUploadedImageType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace V1AccountUploadedImage$ {
  /** @deprecated use `V1AccountUploadedImage$inboundSchema` instead. */
  export const inboundSchema = V1AccountUploadedImage$inboundSchema;
  /** @deprecated use `V1AccountUploadedImage$outboundSchema` instead. */
  export const outboundSchema = V1AccountUploadedImage$outboundSchema;
  /** @deprecated use `V1AccountUploadedImage$Outbound` instead. */
  export type Outbound = V1AccountUploadedImage$Outbound;
}

export function v1AccountUploadedImageToJSON(
  v1AccountUploadedImage: V1AccountUploadedImage,
): string {
  return JSON.stringify(
    V1AccountUploadedImage$outboundSchema.parse(v1AccountUploadedImage),
  );
}

export function v1AccountUploadedImageFromJSON(
  jsonString: string,
): SafeParseResult<V1AccountUploadedImage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => V1AccountUploadedImage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'V1AccountUploadedImage' from JSON`,
  );
}
