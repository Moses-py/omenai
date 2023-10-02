import { Schema, model, models } from "mongoose";

const individualLoginSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const IndividualLogin =
  models.IndividualLogin || model("IndividualLogin", individualLoginSchema);
export default IndividualLogin;
