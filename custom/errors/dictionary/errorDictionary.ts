import createCustomErrorClass from "../createCustomError";

export const ServerError = createCustomErrorClass("ServerError");
export const ConflictError = createCustomErrorClass("ConflictError");
