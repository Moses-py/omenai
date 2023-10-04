import { NextResponse } from "next/server";
import {
  ForbiddenError,
  NotFoundError,
  ServerError,
} from "../dictionary/errorDictionary";
import { MongoServerError } from "mongodb";
import { MongooseError } from "mongoose";

export const handleErrorEdgeCases = (error: unknown) => {
  if (error instanceof NotFoundError) {
    return NextResponse.json({ message: error.message }, { status: 404 });
  } else if (error instanceof ServerError) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } else if (error instanceof ForbiddenError) {
    return NextResponse.json({ message: error.message }, { status: 403 });
  } else if (error instanceof MongoServerError && error.code === 11000) {
    return NextResponse.json(
      { message: "Account already exists" },
      { status: 409 }
    );
  }
};
