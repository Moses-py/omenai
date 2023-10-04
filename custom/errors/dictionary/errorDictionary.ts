import createCustomErrorClass from "../createCustomError";

export const ServerError = createCustomErrorClass("ServerError");
export const ConflictError = createCustomErrorClass("ConflictError");
export const NotFoundError = createCustomErrorClass("NotFoundError");
export const ForbiddenError = createCustomErrorClass("ForbiddenError");
export const TooManyRequestError = createCustomErrorClass(
  "TooManyRequestError"
);
