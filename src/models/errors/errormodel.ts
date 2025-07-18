/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import { SteamSetsError } from "./steamsetserror.js";

export type ErrorModelData = {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * A human-readable explanation specific to this occurrence of the problem.
   */
  detail?: string | undefined;
  /**
   * Optional list of individual error details
   */
  errors?: Array<components.ErrorDetail> | null | undefined;
  /**
   * A URI reference that identifies the specific occurrence of the problem.
   */
  instance?: string | undefined;
  /**
   * HTTP status code
   */
  status?: number | undefined;
  /**
   * A short, human-readable summary of the problem type. This value should not change between occurrences of the error.
   */
  title?: string | undefined;
  /**
   * A URI reference to human-readable documentation for the error.
   */
  type?: string;
};

export class ErrorModel extends SteamSetsError {
  /**
   * A URL to the JSON Schema for this object.
   */
  dollarSchema?: string | undefined;
  /**
   * A human-readable explanation specific to this occurrence of the problem.
   */
  detail?: string | undefined;
  /**
   * Optional list of individual error details
   */
  errors?: Array<components.ErrorDetail> | null | undefined;
  /**
   * A URI reference that identifies the specific occurrence of the problem.
   */
  instance?: string | undefined;
  /**
   * HTTP status code
   */
  status?: number | undefined;
  /**
   * A short, human-readable summary of the problem type. This value should not change between occurrences of the error.
   */
  title?: string | undefined;
  /**
   * A URI reference to human-readable documentation for the error.
   */
  type?: string;

  /** The original data that was passed to this error instance. */
  data$: ErrorModelData;

  constructor(
    err: ErrorModelData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    if (err.dollarSchema != null) this.dollarSchema = err.dollarSchema;
    if (err.detail != null) this.detail = err.detail;
    if (err.errors != null) this.errors = err.errors;
    if (err.instance != null) this.instance = err.instance;
    if (err.status != null) this.status = err.status;
    if (err.title != null) this.title = err.title;
    if (err.type != null) this.type = err.type;

    this.name = "ErrorModel";
  }
}

/** @internal */
export const ErrorModel$inboundSchema: z.ZodType<
  ErrorModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  $schema: z.string().optional(),
  detail: z.string().optional(),
  errors: z.nullable(z.array(components.ErrorDetail$inboundSchema)).optional(),
  instance: z.string().optional(),
  status: z.number().int().optional(),
  title: z.string().optional(),
  type: z.string().default("about:blank"),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "$schema": "dollarSchema",
    });

    return new ErrorModel(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type ErrorModel$Outbound = {
  $schema?: string | undefined;
  detail?: string | undefined;
  errors?: Array<components.ErrorDetail$Outbound> | null | undefined;
  instance?: string | undefined;
  status?: number | undefined;
  title?: string | undefined;
  type?: string;
};

/** @internal */
export const ErrorModel$outboundSchema: z.ZodType<
  ErrorModel$Outbound,
  z.ZodTypeDef,
  ErrorModel
> = z.instanceof(ErrorModel)
  .transform(v => v.data$)
  .pipe(
    z.object({
      dollarSchema: z.string().optional(),
      detail: z.string().optional(),
      errors: z.nullable(z.array(components.ErrorDetail$outboundSchema))
        .optional(),
      instance: z.string().optional(),
      status: z.number().int().optional(),
      title: z.string().optional(),
      type: z.string().default("about:blank"),
    }).transform((v) => {
      return remap$(v, {
        dollarSchema: "$schema",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorModel$ {
  /** @deprecated use `ErrorModel$inboundSchema` instead. */
  export const inboundSchema = ErrorModel$inboundSchema;
  /** @deprecated use `ErrorModel$outboundSchema` instead. */
  export const outboundSchema = ErrorModel$outboundSchema;
  /** @deprecated use `ErrorModel$Outbound` instead. */
  export type Outbound = ErrorModel$Outbound;
}
