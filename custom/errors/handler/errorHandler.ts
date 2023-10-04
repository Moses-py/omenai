import { RateLimitExceededError } from "./../dictionary/errorDictionary";
import {
  ACCOUNT_ALREADY_EXISTS_ERROR_CODE,
  BAD_REQUEST_STATUS,
  CONFLICT_STATUS,
  FORBIDDEN_STATUS,
  NOT_FOUND_STATUS,
  SERVER_ERROR_STATUS,
  RATE_LIMIT_EXCEEDED_STATUS,
} from "@/constants/statusCodes/codes";

const errorStatusMap: { [key: string]: number } = {
  NotFoundError: NOT_FOUND_STATUS,
  ServerError: SERVER_ERROR_STATUS,
  ForbiddenError: FORBIDDEN_STATUS,
  ConflictError: CONFLICT_STATUS,
  BadRequestError: BAD_REQUEST_STATUS,
  RateLimitExceededError: RATE_LIMIT_EXCEEDED_STATUS,
};

const createErrorObject = (message: string, status: number) => {
  return { message, status };
};

export const handleErrorEdgeCases = (error: any) => {
  const errorName = error.name;
  const errorCode = error.code;

  if (errorName in errorStatusMap) {
    return createErrorObject(error.message, errorStatusMap[errorName]);
  } else if (errorCode === ACCOUNT_ALREADY_EXISTS_ERROR_CODE) {
    return createErrorObject("Account already exists", CONFLICT_STATUS);
  } else {
    return createErrorObject(
      "An unexpected error occured",
      SERVER_ERROR_STATUS
    );
  }
};
