import {
  ACCOUNT_ALREADY_EXISTS_ERROR_CODE,
  CONFLICT_STATUS,
  FORBIDDEN_STATUS,
  NOT_FOUND_STATUS,
  SERVER_ERROR_STATUS,
  TOO_MANY_REQUESTS_STATUS,
} from "@/constants/statusCodes/codes";

const createErrorObject = (message: string, status: number) => {
  return { message, status };
};

export const handleErrorEdgeCases = (error: any) => {
  switch (error.name) {
    case "NotFoundError":
      return createErrorObject(error.message, NOT_FOUND_STATUS);
    case "ServerError":
      return createErrorObject(error.message, SERVER_ERROR_STATUS);
    case "ForbiddenError":
      return createErrorObject(error.message, FORBIDDEN_STATUS);
    case "ConflictError":
      return createErrorObject(error.message, CONFLICT_STATUS);
    case "TooManyRequestError":
      return createErrorObject(error.message, TOO_MANY_REQUESTS_STATUS);
    default:
      if (error?.code === ACCOUNT_ALREADY_EXISTS_ERROR_CODE) {
        return createErrorObject("Account already exists", CONFLICT_STATUS);
      } else {
        return createErrorObject(
          "An unexpected error occurred",
          SERVER_ERROR_STATUS
        );
      }
  }
};
