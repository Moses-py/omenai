import createCustomErrorClass from "../createCustomError";

export const ServerError = createCustomErrorClass("ServerError");
export const NotFoundError = createCustomErrorClass("NotFoundError");
export const ForbiddenError = createCustomErrorClass("ForbiddenError");
