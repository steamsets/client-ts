/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of the image
 */
export const ImageType = {
  Avatar: "avatar",
  Background: "background",
  AvatarFrame: "avatar_frame",
  AniamtedAvatar: "aniamted_avatar",
  MiniBackground: "mini_background",
} as const;
/**
 * The type of the image
 */
export type ImageType = ClosedEnum<typeof ImageType>;

export type Image = {
  /**
   * Whether the image is active or not
   */
  active: boolean;
  /**
   * The name of the file
   */
  fileName: string;
  /**
   * The id of the image
   */
  imageId: string;
  /**
   * The type of the image
   */
  imageType: ImageType;
};

/** @internal */
export const ImageType$inboundSchema: z.ZodNativeEnum<typeof ImageType> = z
  .nativeEnum(ImageType);

/** @internal */
export const ImageType$outboundSchema: z.ZodNativeEnum<typeof ImageType> =
  ImageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImageType$ {
  /** @deprecated use `ImageType$inboundSchema` instead. */
  export const inboundSchema = ImageType$inboundSchema;
  /** @deprecated use `ImageType$outboundSchema` instead. */
  export const outboundSchema = ImageType$outboundSchema;
}

/** @internal */
export const Image$inboundSchema: z.ZodType<Image, z.ZodTypeDef, unknown> = z
  .object({
    active: z.boolean(),
    fileName: z.string(),
    imageId: z.string(),
    imageType: ImageType$inboundSchema,
  });

/** @internal */
export type Image$Outbound = {
  active: boolean;
  fileName: string;
  imageId: string;
  imageType: string;
};

/** @internal */
export const Image$outboundSchema: z.ZodType<
  Image$Outbound,
  z.ZodTypeDef,
  Image
> = z.object({
  active: z.boolean(),
  fileName: z.string(),
  imageId: z.string(),
  imageType: ImageType$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Image$ {
  /** @deprecated use `Image$inboundSchema` instead. */
  export const inboundSchema = Image$inboundSchema;
  /** @deprecated use `Image$outboundSchema` instead. */
  export const outboundSchema = Image$outboundSchema;
  /** @deprecated use `Image$Outbound` instead. */
  export type Outbound = Image$Outbound;
}

export function imageToJSON(image: Image): string {
  return JSON.stringify(Image$outboundSchema.parse(image));
}

export function imageFromJSON(
  jsonString: string,
): SafeParseResult<Image, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Image$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Image' from JSON`,
  );
}
