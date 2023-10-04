import {
  ACCOUNT_ALREADY_EXISTS_ERROR_CODE,
  FORBIDDEN_STATUS,
  NOT_FOUND_STATUS,
  SERVER_ERROR_STATUS,
} from "@/constants/statusCodes/codes";

const createErrorObject = (message: string, status: number) => {
  return { message, status };
};

export const handleErrorEdgeCases = (error: any) => {
  switch (error.constructor.name) {
    case "NotFoundError":
      return createErrorObject(error.message, NOT_FOUND_STATUS);
    case "ServerError":
      return createErrorObject(error.message, SERVER_ERROR_STATUS);
    case "ForbiddenError":
      return createErrorObject(error.message, FORBIDDEN_STATUS);
    default:
      if (error?.code === ACCOUNT_ALREADY_EXISTS_ERROR_CODE) {
        return createErrorObject("Account already exists", 409);
      }
  }
};
