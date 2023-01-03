import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// SIGN UP

UserSchema.statics.signup = async function (
  name: string,
  email: string,
  password: string
) {
  // validation
  if (!email || !password) throw Error("Tous les champs doivent être remplis");
  if (!validator.isEmail(email)) throw Error("Email non valide");
  if (!validator.isStrongPassword(password))
    throw Error("Password pas assez solide");
  const exists = await this.findOne({ email });
  if (exists) throw Error("Email existe déjà");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hash });

  return user;
};

// LOGIN

UserSchema.statics.login = async function (email: string, password: string) {
  if (!email || !password) throw Error("Tous les champs doivent être remplis");

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Email incorrect");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Mot de passe incorrect");
  }

  return user;
};

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
