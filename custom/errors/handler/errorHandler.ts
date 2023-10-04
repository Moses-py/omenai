import {
  ForbiddenError,
  NotFoundError,
  ServerError,
} from "../dictionary/errorDictionary";

export const handleErrorEdgeCases = (error: any) => {
  if (error instanceof NotFoundError) {
    return { message: error.message, status: 404 };
  } else if (error instanceof ServerError) {
    return { message: error.message, status: 500 };
  } else if (error instanceof ForbiddenError) {
    return { message: error.message, status: 403 };
  } else if (error && error.code === 11000) {
    return { message: "Account already exists", status: 409 };
  }
};
